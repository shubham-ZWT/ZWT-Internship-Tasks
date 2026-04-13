import { getSupabaseClient } from "../../lib/supabase";
import prisma from "../../lib/prisma";
import { BadRequestError, NotFoundError } from "../../lib/AppError";
import type { Role } from "@prisma/client";

interface RegisterTPOInput {
  email: string;
  password: string;
  collegeId: string;
}

interface RegisterStudentInput {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  inviteCode: string;
}

class AuthService {
  static async loginUser(
    email: string,
    password: string,
  ) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new BadRequestError(error.message);
    }

    return {
      user: data.user ? { id: data.user.id, email: data.user.email! } : null,
      session: data.session,
    };
  }

  static async registerTPO(input: RegisterTPOInput) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
    });

    if (error) {
      throw new BadRequestError(error.message);
    }

    const college = await prisma.college.findUnique({
      where: { id: input.collegeId },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    if (data.user) {
      try {
        await prisma.profile.create({
          data: {
            userId: data.user.id,
            email: input.email,
            role: "TPO" as Role,
            collegeId: input.collegeId,
          },
        });
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        throw new BadRequestError("User created but failed to create profile");
      }
    }

    return {
      user: data.user ? { id: data.user.id, email: data.user.email! } : null,
      session: data.session,
    };
  }

  static async registerStudent(input: RegisterStudentInput) {
    const supabase = getSupabaseClient();
    const { data, error } = await supabase.auth.signUp({
      email: input.email,
      password: input.password,
    });

    if (error) {
      throw new BadRequestError(error.message);
    }

    const batch = await prisma.batch.findUnique({
      where: { inviteCode: input.inviteCode },
    });

    if (!batch) {
      throw new NotFoundError("Invalid invite code");
    }

    if (!batch.isActive) {
      throw new BadRequestError("This batch registration is closed");
    }

    if (data.user) {
      try {
        await prisma.profile.create({
          data: {
            userId: data.user.id,
            email: input.email,
            fullName: input.fullName,
            phone: input.phone,
            role: "STUDENT" as Role,
            collegeId: batch.collegeId,
            batchId: batch.id,
          },
        });
      } catch (profileError) {
        console.error("Profile creation error:", profileError);
        throw new BadRequestError("User created but failed to create profile");
      }
    }

    return {
      user: data.user ? { id: data.user.id, email: data.user.email! } : null,
      session: data.session,
    };
  }

  static async getProfile(userId: string) {
    const profile = await prisma.profile.findUnique({
      where: { userId },
      include: {
        college: {
          select: { id: true, name: true },
        },
        batch: {
          select: { id: true, name: true, inviteCode: true },
        },
      },
    });

    return profile;
  }
}

export default AuthService;
