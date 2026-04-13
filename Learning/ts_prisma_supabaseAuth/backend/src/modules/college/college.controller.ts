import { Request, Response, NextFunction } from "express";
import CollegeService from "./college.service";
import { BadRequestError } from "../../lib/AppError";
import { AsyncHandler } from "../../lib/errorHandler";

const getParam = (param: string | string[] | undefined): string => {
  if (!param || Array.isArray(param)) {
    throw new BadRequestError("Invalid parameter");
  }
  return param;
};

export const createCollegeController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, address, city, state, country } = req.body;

    if (!name) {
      throw new BadRequestError("College name is required");
    }

    const college = await CollegeService.createCollege({
      name,
      address,
      city,
      state,
      country,
    });

    return res.status(201).json({
      message: "College created successfully",
      college,
    });
  }
);

export const getCollegeController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    const college = await CollegeService.getCollegeById(id);

    return res.status(200).json(college);
  }
);

export const getAllCollegesController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const colleges = await CollegeService.getAllColleges();

    return res.status(200).json(colleges);
  }
);

export const updateCollegeController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    const { name, address, city, state, country } = req.body;

    const college = await CollegeService.updateCollege(id, {
      name,
      address,
      city,
      state,
      country,
    });

    return res.status(200).json(college);
  }
);

export const deleteCollegeController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const id = getParam(req.params.id);
    await CollegeService.deleteCollege(id);

    return res.status(204).send();
  }
);