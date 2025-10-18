import type { Types } from "mongoose";
export type TEmployee = {
    userEmailId: string;
    companyId: Types.ObjectId;
    invitationId: Types.ObjectId;
    actAs: "employee";
    role?: string;
    isDeleted: boolean;
};
//# sourceMappingURL=employee.type.d.ts.map