import { model, Schema } from "mongoose";
// creating schema of company, as instance of Schema
const companyShema = new Schema({
    companyName: {
        type: String,
        required: [true, "Company name required."],
        unique: [true, "Company name already registered, please chose another name."],
        minLength: [2, "Company name be at least 2 characters long."],
    },
    ownerMailId: {
        type: String,
        required: true,
    },
    industry: { required: true, type: String },
    ownerUserId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    isDeleted: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ["running", "paused"],
        default: "running",
    },
}, { timestamps: true });
export const Company = model("company", companyShema);
//# sourceMappingURL=company.model.js.map