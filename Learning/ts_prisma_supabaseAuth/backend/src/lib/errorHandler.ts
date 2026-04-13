import { Request, Response, NextFunction } from "express";
import { AppError } from "./AppError";

interface ErrorResponse {
  status: string;
  error: {
    message: string;
    statusCode: number;
    stack?: string;
  };
}

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  let error: AppError = err as AppError;
  let statusCode = error.statusCode || 500;
  let status = error.status || "error";

  if (process.env.NODE_ENV === "development") {
    const response: ErrorResponse = {
      status,
      error: {
        message: error.message,
        statusCode,
        stack: err.stack,
      },
    };
    return res.status(statusCode).json(response);
  }

  if (err instanceof AppError) {
    return res.status(statusCode).json({
      status,
      error: {
        message: error.message,
        statusCode,
      },
    });
  }

  console.error("ERROR 💥", err);

  return res.status(500).json({
    status: "error",
    error: {
      message: "Internal server error",
      statusCode: 500,
    },
  });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new AppError(`Route ${req.originalUrl} not found`, 404);
  next(error);
};

type ControllerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<Response>;

export const AsyncHandler = (fn: ControllerFn) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};