import { Schema, model, Types } from "mongoose";
import type { TEmployee } from "./employee.type.js";

const employeeSchema = new Schema<TEmployee>(
  {
    userEmailId: { type: String, ref: "User", required: true },
    companyId: { type: Schema.Types.ObjectId, ref: "Company", required: true },
    invitationId: {
      type: Schema.Types.ObjectId,
      ref: "Invitation",
      required: true,
    },
    role: { type: String, required: true },
    actAs: { type: String, default: "employee" },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Employee = model("Employee", employeeSchema);
