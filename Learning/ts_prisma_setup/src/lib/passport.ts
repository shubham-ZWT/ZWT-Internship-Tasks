import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { AuthProvider } from "../generated/prisma/enums";
import { upsertOAuthUser, getUserByIdCached } from "../services/auth.service";
import { prisma } from "../lib/prisma";
import { emailQueue } from "../queues";

console.log("Initializing Passport with Google OAuth strategy...");
// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("Google Client Secret:", process.env.GOOGLE_CLIENT_SECRET);
// console.log("Google Callback URL:", process.env.GOOGLE_CALLBACK_URL);

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL!,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const isNewUser = !(await prisma.user.findUnique({
          where: {
            provider_providerId: {
              provider: AuthProvider.GOOGLE,
              providerId: profile.id,
            },
          },
        }));

        const user = await upsertOAuthUser({
          email: profile.emails![0].value,
          name: profile.displayName,
          avatarUrl: profile.photos?.[0].value,
          provider: AuthProvider.GOOGLE,
          providerId: profile.id,
        });

        // Only send welcome email on first login
        if (isNewUser) {
          await emailQueue.add("welcome-email", {
            email: user.email,
            name: user.name ?? "there",
          });
          console.log(`Queued welcome email for new user: ${user.email}`);
        }

        done(null, user);
      } catch (err) {
        done(err);
      }
    },
  ),
);

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await getUserByIdCached(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;
