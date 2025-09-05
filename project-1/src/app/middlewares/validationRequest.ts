import type { NextFunction, Request, RequestHandler, Response } from "express";
import type {  ZodTypeAny } from "zod";

const validationRequest = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
};

export default validationRequest;
