import type { TEmployee } from "./employee.type.js";
export declare const employeeServices: {
    createEmployeeIntoDB: (payload: TEmployee) => Promise<import("mongoose").Document<unknown, {}, TEmployee, {}, import("mongoose").DefaultSchemaOptions> & TEmployee & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=employee.service.d.ts.map