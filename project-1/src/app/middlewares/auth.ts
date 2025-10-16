import type { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync.js";
import AppError from "../errors/AppError.js";
import status from "http-status";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config/index.js";
import type { TUserRole } from "../modules/User/user.interface.js";
import { User } from "../modules/User/user.model.js";

const auth = (...requireRoles: TUserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
      console.log("no token.");
      throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
    }

    const decode = jwt.verify(
      token,
      config.jwt_access_secret as string
    ) as JwtPayload;

    const { role, email, iat } = decode;

    // is User exists
    const user = await User.isUserExistsByEmailId(email);

    // if user not exists
    if (!user) {
      throw new AppError(status.UNAUTHORIZED, "User does not exists.");
    }

    // if JWT Issued Before Password Changed
    if (
      user.passwordChangedAt &&
      User.isJWTIssuedBeforePasswordChanged(
        user.passwordChangedAt,
        iat as number
      )
    ) {
      throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
    }

    // const role = decode?.role;
    if (requireRoles && !requireRoles.includes(role)) {
      throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
    }

    req.authorizedUser = decode as JwtPayload;
    next();
  });
};

export default auth;
