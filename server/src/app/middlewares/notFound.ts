import type { NextFunction, Request, Response } from "express";
import status from "http-status";

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(status.NOT_FOUND).json({
    status: status.NOT_FOUND,
    success: false,
    message: "API not found!",
    error: " ",
  });
};
export default notFound;
