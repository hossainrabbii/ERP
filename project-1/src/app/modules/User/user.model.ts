import { model, Schema } from "mongoose";
import type { TUser } from "./user.interface.js";

const userSchema = new Schema<TUser>(
  {
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
  },
  { autoCreate: false, timestamps: true }
);

export const User = model<TUser>("User", userSchema);
