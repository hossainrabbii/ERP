import { Types } from "mongoose";

export type TCompany = {
  companyName: string;
  ownerMailId: string;
  industry: string;
  ownerUserId?: Types.ObjectId;
  isDeleted?: boolean;
  status: "active" | "block";
};
