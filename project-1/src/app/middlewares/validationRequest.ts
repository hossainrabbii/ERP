import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";

const validationRequest = (schema: ZodTypeAny) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log("From validation Request: ", req.body);
      await schema.parseAsync(req.body);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
};

export default validationRequest;
