import { prisma } from "../lib/prisma";
import { AuthProvider } from "../generated/prisma/client";
import { redis } from "../lib/redis";
import type { User } from "../generated/prisma/client";

const USER_CACHE_TTL_SECONDS = 60 * 60; 
const userCacheKey = (id: string) => `user:${id}`;

export const getUserFromCache = async (id: string): Promise<User | null> => {
  const payload = await redis.get(userCacheKey(id));
  if (!payload) return null;
  try {
    return JSON.parse(payload) as User;
  } catch (err) {
    console.warn(`Invalid user cache for id=${id}, clearing`);
    await redis.del(userCacheKey(id));
    return null;
  }
};

export const setUserCache = async (user: User): Promise<void> => {
  await redis.set(
    userCacheKey(user.id),
    JSON.stringify(user),
    "EX",
    USER_CACHE_TTL_SECONDS,
  );
};

export const clearUserCache = async (id: string): Promise<void> => {
  await redis.del(userCacheKey(id));
};

export const getUserByIdCached = async (id: string): Promise<User | null> => {
  const cached = await getUserFromCache(id);
  console.log(`Cache ${cached ? "hit" : "miss"} for user id=${id}`);
  if (cached) return cached;

  const user = await prisma.user.findUnique({ where: { id } });
  if (user) {
    await setUserCache(user);
  }

  console.log(
    `Fetched user from DB for id=${id}: ${user ? "found" : "not found"}`,
  );
  return user;
};

export const upsertOAuthUser = async ({
  email,
  name,
  avatarUrl,
  provider,
  providerId,
}: {
  email: string;
  name: string;
  avatarUrl?: string;
  provider: AuthProvider;
  providerId: string;
}) => {
  const user = await prisma.user.upsert({
    where: {
      provider_providerId: { provider, providerId },
    },
    update: { email, name, avatarUrl },
    create: { email, name, avatarUrl, provider, providerId },
  });

  await setUserCache(user);
  return user;
};
