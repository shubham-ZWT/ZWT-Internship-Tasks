import prisma from "../../lib/prisma";
import type { CreateProfileInput, UpdateProfileInput } from "./profile.types";

class ProfileService {
  static async createProfile(data: CreateProfileInput) {
    return prisma.profile.create({
      data: {
        userId: data.userId,
        email: data.email,
        fullName: data.fullName,
        role: data.role || "STUDENT",
      },
    });
  }

  static async getProfileByUserId(userId: string) {
    return prisma.profile.findUnique({
      where: { userId },
    });
  }

  static async getProfileById(id: string) {
    return prisma.profile.findUnique({
      where: { id },
    });
  }

  static async getAllProfiles() {
    return prisma.profile.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  static async updateProfile(userId: string, data: UpdateProfileInput) {
    return prisma.profile.update({
      where: { userId },
      data,
    });
  }

  static async deleteProfile(userId: string) {
    return prisma.profile.delete({
      where: { userId },
    });
  }
}

export default ProfileService;
