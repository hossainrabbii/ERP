import type { RequestHandler } from "express";
export declare const invitationControllers: {
    createInvitation: (req: import("express").Request, res: import("express").Response, next: import("express").NextFunction) => void;
    getAllInvitations: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    acceptInvitation: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
};
//# sourceMappingURL=invitation.controller.d.ts.map