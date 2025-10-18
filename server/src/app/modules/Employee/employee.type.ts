import type { Types } from "mongoose";

// History subdocument type
// export type TEmployeeHistory = {
//   role?: string;
//   department?: string;
//   actionType: "hire" | "promotion" | "demotion" | "transfer" | "other";
//   changedBy?: Types.ObjectId;
//   effectiveDate?: Date;
// };

export type TEmployee = {
  userEmailId: string;
  companyId: Types.ObjectId;
  invitationId: Types.ObjectId;
  actAs: "employee";
  role?: string;
  isDeleted: boolean;
};
