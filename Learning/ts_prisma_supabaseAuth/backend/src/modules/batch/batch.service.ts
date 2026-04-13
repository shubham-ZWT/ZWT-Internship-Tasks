import prisma from "../../lib/prisma";
import { BadRequestError, NotFoundError } from "../../lib/AppError";
import type { CreateBatchInput, UpdateBatchInput } from "./batch.types";

class BatchService {
  static async createBatch(data: CreateBatchInput) {
    const college = await prisma.college.findUnique({
      where: { id: data.collegeId },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    const batch = await prisma.batch.create({
      data: {
        name: data.name,
        collegeId: data.collegeId,
      },
      include: {
        college: {
          select: { id: true, name: true },
        },
      },
    });

    return batch;
  }

  static async getBatchById(id: string) {
    const batch = await prisma.batch.findUnique({
      where: { id },
      include: {
        college: {
          select: { id: true, name: true },
        },
        _count: {
          select: { students: true },
        },
      },
    });

    if (!batch) {
      throw new NotFoundError("Batch not found");
    }

    return {
      ...batch,
      studentCount: batch._count.students,
    };
  }

  static async getBatchesByCollege(collegeId: string) {
    const college = await prisma.college.findUnique({
      where: { id: collegeId },
    });

    if (!college) {
      throw new NotFoundError("College not found");
    }

    return prisma.batch.findMany({
      where: { collegeId },
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { students: true },
        },
      },
    });
  }

  static async getBatchStudents(batchId: string) {
    const batch = await prisma.batch.findUnique({
      where: { id: batchId },
    });

    if (!batch) {
      throw new NotFoundError("Batch not found");
    }

    return prisma.profile.findMany({
      where: { batchId },
      orderBy: { createdAt: "desc" },
    });
  }

  static async validateInviteCode(inviteCode: string) {
    const batch = await prisma.batch.findUnique({
      where: { inviteCode },
      include: {
        college: {
          select: { id: true, name: true },
        },
      },
    });

    if (!batch) {
      throw new NotFoundError("Invalid invite code");
    }

    if (!batch.isActive) {
      throw new BadRequestError("This batch registration is closed");
    }

    return batch;
  }

  static async updateBatch(id: string, data: UpdateBatchInput) {
    const batch = await prisma.batch.findUnique({
      where: { id },
    });

    if (!batch) {
      throw new NotFoundError("Batch not found");
    }

    return prisma.batch.update({
      where: { id },
      data,
    });
  }

  static async deleteBatch(id: string) {
    const batch = await prisma.batch.findUnique({
      where: { id },
    });

    if (!batch) {
      throw new NotFoundError("Batch not found");
    }

    return prisma.batch.delete({
      where: { id },
    });
  }
}

export default BatchService;