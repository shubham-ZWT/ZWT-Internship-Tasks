import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/appError.js";

export const globalErrorHandler = (
  err: AppError | Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const statusCode = err instanceof AppError ? err.statusCode : 500;
  const status = err instanceof AppError ? "fail" : "error";

  res.status(statusCode).json({
    status,
    message: err.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
