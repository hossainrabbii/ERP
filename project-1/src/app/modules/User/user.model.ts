import { model, Schema } from "mongoose";
import type { TUser } from "./user.interface.js";
import bcrypt from "bcrypt";
import config from "../../config/index.js";

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
      minLength: [6, "Password must be at least 6 characters long!"],
    },
    role: {
      type: String,
      enum: ["admin", "employee"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["joined", "block"],
    },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// before save into DB
userSchema.pre("save", async function (next) {
  const user = this;
  user.password = bcrypt.hashSync(user.password, Number(config.bcrypt_salting));
  next();
});

userSchema.post("save", function (userData, next) {
  userData.password = "";
  next();
});

export const User = model<TUser>("User", userSchema);
