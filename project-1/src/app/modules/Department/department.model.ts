import { model, Schema } from "mongoose";
import type { TDepartment } from "./department.type.js";

const departMentSchema = new Schema<TDepartment>(
  {
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    departmentName: {
      type: String,
      required: true,
      minLength: [3, "Description must be at least 3 characters long"],
    },
    shortCode: {
      type: String,
    },
    description: {
      type: String,
      minLength: [20, "Description must be at least 20 characters long"],
    },
    parentDeptId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
    },
    level: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Department = model<TDepartment>("department", departMentSchema);
