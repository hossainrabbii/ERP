import type { NextFunction, Request, Response } from "express";

const globaErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong!",
    error,
  });
};
export default globaErrorHandler;
