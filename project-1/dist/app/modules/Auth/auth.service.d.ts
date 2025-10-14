import type { TLogin } from "./auth.interface.js";
export declare const authServices: {
    loginUser: (payload: TLogin) => Promise<{
        accessToken: string;
    } | undefined>;
};
//# sourceMappingURL=auth.service.d.ts.map