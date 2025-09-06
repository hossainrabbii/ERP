import { Types } from "mongoose";
export type TCompany = {
    companyName: string;
    ownerMailId: string;
    industry: string;
    ownerUserId?: Types.ObjectId;
    isDeleted?: boolean;
    status?: "running" | "paused";
};
//# sourceMappingURL=company.interface.d.ts.map