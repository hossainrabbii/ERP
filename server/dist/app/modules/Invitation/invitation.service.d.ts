import type { TInvitaition } from "./invitation.type.js";
export declare const invitationServices: {
    createInvitationIntoDB: (payload: TInvitaition) => Promise<import("mongoose").Document<unknown, {}, TInvitaition, {}, {}> & TInvitaition & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllInvitationFromDB: () => Promise<(import("mongoose").Document<unknown, {}, TInvitaition, {}, {}> & TInvitaition & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    acceptInvitationIntoDB: (payload: string | undefined) => Promise<(import("mongoose").Document<unknown, {}, TInvitaition, {}, {}> & TInvitaition & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=invitation.service.d.ts.map