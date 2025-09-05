import type { NextFunction, Request, Response } from "express";
import type { ZodTypeAny } from "zod";
declare const validationRequest: (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default validationRequest;
//# sourceMappingURL=validationRequest.d.ts.map