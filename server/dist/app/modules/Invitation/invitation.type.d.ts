import type { Types } from "mongoose";
export type TInvitaition = {
    companyId: Types.ObjectId;
    invitedBy: Types.ObjectId;
    email: string;
    role?: string;
    title: string;
    message?: string;
    isDeleted: boolean;
    expiresAt: string;
    status: "pending" | "accepted" | "declined";
};
//# sourceMappingURL=invitation.type.d.ts.map