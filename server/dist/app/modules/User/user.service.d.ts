import type { TUser } from "./user.interface.js";
export declare const userServices: {
    createUserIntoDB: (userData: TUser) => Promise<import("mongoose").Document<unknown, {}, TUser, {}, {}> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllUserFromDB: (query: Record<string, unknown>) => Promise<(import("mongoose").Document<unknown, {}, TUser, {}, {}> & TUser & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
};
//# sourceMappingURL=user.service.d.ts.map