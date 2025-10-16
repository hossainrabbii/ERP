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
    isUserExistsByEmailId(email: string): Promise<TUser>;
    isPasswordMatched(plainTextPassword: string, hashedPassword: string): Promise<boolean>;
    isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp: Date, jwtIssuedTimestamp: number): boolean;
}
export type TUserRole = keyof typeof USER_ROLE;
//# sourceMappingURL=user.interface.d.ts.map