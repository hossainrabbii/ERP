import type { Model } from "mongoose";
import type { USER_ROLE } from "./user.constant.js";

export type TUser = {
  email: string;
  password: string;
  role: "user" | "admin" | "employee";
  status: "active" | "block";
  passwordChangedAt?: Date;
  isDeleted: boolean;
};

export interface UserModel extends Model<TUser> {
  // instance method for checking if the user is exists
  isUserExistsByEmailId(email: string): Promise<TUser>;

  // instance methods for checking if password matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;

  // instance method for isJWTIssuedBeforePasswordChanged

  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number
  ): boolean;
}
export type TUserRole = keyof typeof USER_ROLE;
