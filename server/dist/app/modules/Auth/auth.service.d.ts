import { type JwtPayload } from "jsonwebtoken";
import type { TChangePassword, TLogin } from "./auth.interface.js";
export declare const authServices: {
    loginUser: (payload: TLogin) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    changePassword: (authorizedUser: JwtPayload, payload: TChangePassword) => Promise<{
        accessToken: string;
    }>;
    refreshToken: (token: string) => Promise<string>;
    forgetPassword: (email: string) => Promise<string>;
    resetPasswordIntoDB: (payload: {
        email: string;
        newPassword: string;
    }, token: string | undefined) => Promise<void>;
};
//# sourceMappingURL=auth.service.d.ts.map