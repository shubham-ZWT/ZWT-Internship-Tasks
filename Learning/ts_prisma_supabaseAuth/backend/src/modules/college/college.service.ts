import prisma from "../../lib/prisma";
import { NotFoundError } from "../../lib/AppError";
import type { CreateCollegeInput, UpdateCollegeInput } from "./college.types";

class CollegeService {
  static async createCollege(data: CreateCollegeInput) {
    return prisma.college.create({
      data,
    });
  }

  static async getCollegeById(id: string) {
    const college = await prisma.college.findUnique({
      where: { id },
      include: {
        _count: {
          select: { tpos: true, batches: true },
        },
      },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    return college;
  }

  static async getAllColleges() {
    return prisma.college.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { tpos: true, batches: true },
        },
      },
    });
  }

  static async updateCollege(id: string, data: UpdateCollegeInput) {
    const college = await prisma.college.findUnique({
      where: { id },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    return prisma.college.update({
      where: { id },
      data,
    });
  }

  static async deleteCollege(id: string) {
    const college = await prisma.college.findUnique({
      where: { id },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    return prisma.college.delete({
      where: { id },
    });
  }
}

export default CollegeService;