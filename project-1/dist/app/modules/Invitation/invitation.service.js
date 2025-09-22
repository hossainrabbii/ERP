import { Invitation } from "./invitation.model.js";
const createInvitationIntoDB = async (payload) => {
    // check user exists =
    const newInvitation = await Invitation.create(payload);
    return newInvitation;
};
// get all invitation from DB
const getAllInvitationFromDB = async () => {
    const invitations = await Invitation.find({ isDeleted: false });
    return invitations;
};
// accept invitation
const acceptInvitationIntoDB = async (payload) => {
    const updatedInvitation = await Invitation.findOneAndUpdate({ _id: payload, status: { $eq: "pending" }, isDeleted: false }, { status: "accepted" }, { new: true });
    return updatedInvitation;
};
export const invitationServices = {
    createInvitationIntoDB,
    getAllInvitationFromDB,
    acceptInvitationIntoDB,
};
//# sourceMappingURL=invitation.service.js.map