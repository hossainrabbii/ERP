import type { Types } from "mongoose";
export type TDepartment = {
    companyId: Types.ObjectId;
    departmentName: string;
    shortCode?: string;
    description: string;
    parentDeptId?: Types.ObjectId;
    level: number;
    status: "active" | "inactive";
    isDeleted: boolean;
};
//# sourceMappingURL=department.type.d.ts.map