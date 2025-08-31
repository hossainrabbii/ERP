import { model, Schema } from "mongoose";
const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
    },
    status: {
        type: String,
        enum: ["joined", "block"],
    },
    isDeleted: { type: Boolean, default: false },
}, { autoCreate: false, timestamps: true });
export const User = model("User", userSchema);
//# sourceMappingURL=user.model.js.map