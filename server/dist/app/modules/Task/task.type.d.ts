import type { Types } from "mongoose";
export type TTask = {
    title: string;
    details: string;
    givenBy: Types.ObjectId;
    taskFor: Types.ObjectId;
    deadline: string;
    companyId: Types.ObjectId;
    status: "completed" | "in-progress" | "in-review";
    isDeleted: boolean;
};
//# sourceMappingURL=task.type.d.ts.map