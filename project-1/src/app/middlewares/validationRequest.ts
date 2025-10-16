import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";
import catchAsync from "../utils/catchAsync.js";

const validationRequest = (schema: ZodTypeAny) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    console.log("From validation Request: ", req.body);
    await schema.parseAsync({
      body: req.body,
      cookies: req.cookies,
    });
    next();
  });
};

export default validationRequest;
