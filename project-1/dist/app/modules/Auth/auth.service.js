import bcrypt from "bcrypt";
import jwt, {} from "jsonwebtoken";
import { User } from "../User/user.model.js";
import AppError from "../../errors/AppError.js";
import status from "http-status";
import config from "../../config/index.js";
import { createJWTToken } from "./auth.utils.js";
// login user
const loginUser = async (payload) => {
    //  checking if user exits
    const isExists = await User.findOne({ email: payload?.email }).select("+password");
    if (!isExists) {
        throw new Error("User is not found.");
    }
    // checking if user deleted
    if (isExists?.isDeleted) {
        throw new AppError(status.NOT_FOUND, "User is removed.");
    }
    // if blocked
    if (isExists?.status === "block") {
        throw new AppError(status.NOT_FOUND, "User is blocked.");
    }
    // checking if the password is correct
    const isPasswordMatch = await bcrypt.compare(payload?.password, isExists?.password);
    if (isPasswordMatch) {
        //login
        const jwtPayload = {
            email: isExists?.email,
            role: isExists?.role,
        };
        const accessToken = createJWTToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expiredin);
        const refreshToken = createJWTToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expiredin);
        return {
            accessToken,
            refreshToken,
        };
    }
    else {
        throw new AppError(status.NOT_ACCEPTABLE, "Password does not match");
    }
};
// change password
const changePassword = async (authorizedUser, payload) => {
    console.log(authorizedUser, payload);
    //  checking if user exits
    const isExists = await User.findOne({ email: authorizedUser?.email }).select("+password");
    if (!isExists) {
        throw new Error("User is not found.");
    }
    // checking if user deleted
    const isDeleted = isExists?.isDeleted;
    if (isDeleted) {
        throw new AppError(status.NOT_FOUND, "User is removed.");
    }
    // if blocked
    if (isExists?.status === "block") {
        throw new AppError(status.NOT_FOUND, "User is blocked.");
    }
    // checking if the password is correct
    const isPasswordMatch = await bcrypt.compare(payload?.currentPassword, isExists?.password);
    console.log(isPasswordMatch);
    if (isPasswordMatch) {
        //login
        const jwtPayload = {
            email: isExists?.email,
            role: isExists?.role,
        };
        const accessToken = createJWTToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expiredin);
        const refreshToken = createJWTToken(jwtPayload, config.jwt_refresh_secret, config.jwt_refresh_expiredin);
        const newHashedPassword = await bcrypt.hash(payload?.newPassword, Number(config.bcrypt_salting));
        await User.findOneAndUpdate({
            email: isExists?.email,
            role: isExists?.role,
        }, {
            password: newHashedPassword,
            passwordChangedAt: new Date(),
        });
        return {
            accessToken,
        };
    }
    else {
        throw new AppError(status.NOT_ACCEPTABLE, "Current password does not match");
    }
};
// refresh token
const refreshToken = async (token) => {
    if (!token) {
        console.log("no token.");
        throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
    }
    const decode = jwt.verify(token, config.jwt_refresh_secret);
    const { email, iat } = decode;
    // is User exists
    const user = await User.isUserExistsByEmailId(email);
    // if user not exists
    if (!user) {
        throw new AppError(status.UNAUTHORIZED, "User does not exists.");
    }
    // if JWT Issued Before Password Changed
    if (user.passwordChangedAt &&
        User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat)) {
        throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
    }
    const jwtPayload = {
        email: user?.email,
        role: user?.role,
    };
    const accessToken = createJWTToken(jwtPayload, config.jwt_access_secret, config.jwt_access_expiredin);
    return accessToken;
};
export const authServices = {
    loginUser,
    changePassword,
    refreshToken,
};
//# sourceMappingURL=auth.service.js.map