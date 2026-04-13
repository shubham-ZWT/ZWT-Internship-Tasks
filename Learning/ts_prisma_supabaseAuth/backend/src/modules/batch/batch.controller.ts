import { Request, Response, NextFunction } from "express";
import BatchService from "./batch.service";
import { BadRequestError } from "../../lib/AppError";
import { AsyncHandler } from "../../lib/errorHandler";

const getParam = (param: string | string[] | undefined): string => {
  if (!param || Array.isArray(param)) {
    throw new BadRequestError(`Invalid ${param}`);
  }
  return param;
};

export const createBatchController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, collegeId } = req.body;

    if (!name || !collegeId) {
      throw new BadRequestError("Name and collegeId are required");
    }

    const batch = await BatchService.createBatch({ name, collegeId });

    return res.status(201).json({
      message: "Batch created successfully",
      batch,
      inviteLink: `/register/${batch.inviteCode}`,
    });
  }
);

export const getBatchController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    const batch = await BatchService.getBatchById(id);

    return res.status(200).json(batch);
  }
);

export const getBatchesByCollegeController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const collegeId = req.query.collegeId as string;

    if (!collegeId) {
      throw new BadRequestError("collegeId query parameter is required");
    }

    const batches = await BatchService.getBatchesByCollege(collegeId);

    return res.status(200).json(batches);
  }
);

export const getBatchStudentsController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    const students = await BatchService.getBatchStudents(id);

    return res.status(200).json(students);
  }
);

export const updateBatchController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    const { name, isActive } = req.body;

    const batch = await BatchService.updateBatch(id, { name, isActive });

    return res.status(200).json(batch);
  }
);

export const deleteBatchController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    await BatchService.deleteBatch(id);

    return res.status(204).send();
  }
);