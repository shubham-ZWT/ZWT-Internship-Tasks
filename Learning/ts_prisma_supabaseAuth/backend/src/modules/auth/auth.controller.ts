import { Request, Response, NextFunction } from "express";
import AuthService from "./auth.service";
import BatchService from "../batch/batch.service";
import { BadRequestError } from "../../lib/AppError";
import { AsyncHandler } from "../../lib/errorHandler";

const getParam = (param: string | string[] | undefined): string => {
  if (!param || Array.isArray(param)) {
    throw new BadRequestError("Invalid parameter");
  }
  return param;
};

export const loginController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new BadRequestError("Email and password are required");
    }

    const result = await AuthService.loginUser(email, password);
    const profile = await AuthService.getProfile(result.user!.id);

    return res.status(200).json({
      message: "Login successful",
      user: result.user,
      profile,
      session: result.session,
    });
  }
);

export const registerTPOController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, collegeId } = req.body;

    if (!email || !password || !collegeId) {
      throw new BadRequestError("Email, password, and collegeId are required");
    }

    const result = await AuthService.registerTPO({ email, password, collegeId });

    return res.status(201).json({
      message: "TPO registered successfully",
      user: result.user,
      session: result.session,
    });
  }
);

export const registerStudentController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, fullName, phone, inviteCode } = req.body;

    if (!email || !password || !fullName || !phone || !inviteCode) {
      throw new BadRequestError("All fields are required");
    }

    const result = await AuthService.registerStudent({
      email,
      password,
      fullName,
      phone,
      inviteCode,
    });

    return res.status(201).json({
      message: "Student registered successfully",
      user: result.user,
      session: result.session,
    });
  }
);

export const getBatchByInviteController = AsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const inviteCode = getParam(req.params.inviteCode);

    const batch = await BatchService.validateInviteCode(inviteCode);

    return res.status(200).json({
      batch: {
        id: batch.id,
        name: batch.name,
        college: batch.college.name,
      },
    });
  }
);
