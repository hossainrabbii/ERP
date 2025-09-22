import type { TDepartment } from "./department.type.js";
export declare const departMentServices: {
    createDepartMentIntoDB: (payload: TDepartment) => Promise<import("mongoose").Document<unknown, {}, TDepartment, {}, {}> & TDepartment & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=department.service.d.ts.map