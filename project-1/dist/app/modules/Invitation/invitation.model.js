import { model, Schema } from "mongoose";
const invitationSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: [true, "Company Id can not be empty"],
    },
    invitedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, "This field is required"],
    },
    email: { type: String, required: [true, "Email can not be empty"] },
    role: {
        type: String,
    },
    title: {
        type: String,
    },
    message: {
        type: String,
    },
    expiresAt: {
        type: String,
        required: [true, "Expired data can not be empty"],
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
    status: {
        type: String,
        enum: ["pending", "accepted", "declined"],
    },
}, {
    timestamps: true,
});
invitationSchema.pre("findOneAndUpdate", async function (next) {
    const query = this.getQuery();
    const isInvitationExist = await Invitation.findOne(query);
    if (!isInvitationExist) {
        throw new Error("This invitation does not exist.");
    }
    next();
});
// register the model
export const Invitation = model("invitation", invitationSchema);
//# sourceMappingURL=invitation.model.js.map