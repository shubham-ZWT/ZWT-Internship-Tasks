import { Request, Response, NextFunction } from "express";
import ProfileService from "./profile.service";
import { BadRequestError } from "../../lib/AppError";
import { AsyncHandler } from "../../lib/errorHandler";

export const getProfileController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;

    if (!userId || Array.isArray(userId)) {
      throw new BadRequestError("Invalid userId");
    }

    const profile = await ProfileService.getProfileByUserId(userId);
    return res.status(200).json(profile);
  }
);

export const getAllProfilesController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const profiles = await ProfileService.getAllProfiles();
    return res.status(200).json(profiles);
  }
);

export const updateProfileController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;

    if (!userId || Array.isArray(userId)) {
      throw new BadRequestError("Invalid userId");
    }

    const { fullName, role } = req.body;
    const profile = await ProfileService.updateProfile(userId, { fullName, role });
    return res.status(200).json(profile);
  }
);

export const deleteProfileController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;

    if (!userId || Array.isArray(userId)) {
      throw new BadRequestError("Invalid userId");
    }

    await ProfileService.deleteProfile(userId);
    return res.status(204).send();
  }
);