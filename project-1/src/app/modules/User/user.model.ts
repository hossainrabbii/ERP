import { model, Schema } from "mongoose";
import type { TUser, UserModel } from "./user.interface.js";
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
      select: 0,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["user", "admin", "employee"],
      default: "user",
    },
    status: {
      type: String,
      enum: ["active", "block"],
      default: "active",
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
// if user exist
userSchema.statics.isUserExistsByEmailId = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

// is password change time is greater than issues time
userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number
) {
  if (!passwordChangedTimestamp || !jwtIssuedTimestamp) {
    // No change detected or invalid timestamps — token is valid
    return false;
  }
  // make UTC to second
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>("User", userSchema);
