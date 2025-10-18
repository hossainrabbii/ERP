import bcrypt from "bcrypt";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { User } from "../User/user.model.js";
import type { TChangePassword, TLogin } from "./auth.interface.js";
import AppError from "../../errors/AppError.js";
import status from "http-status";
import config from "../../config/index.js";
import { createJWTToken } from "./auth.utils.js";
import { sendMail } from "../../utils/sendMail.js";

// login user
const loginUser = async (payload: TLogin) => {
  //  checking if user exits
  const isExists = await User.findOne({ email: payload?.email }).select(
    "+password"
  );
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
  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    isExists?.password
  );

  if (isPasswordMatch) {
    //login
    const jwtPayload = {
      email: isExists?.email,
      role: isExists?.role,
    };
    const accessToken = createJWTToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expiredin as string
    );
    const refreshToken = createJWTToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expiredin as string
    );

    return {
      accessToken,
      refreshToken,
    };
  } else {
    throw new AppError(status.NOT_ACCEPTABLE, "Password does not match");
  }
};

// change password
const changePassword = async (
  authorizedUser: JwtPayload,
  payload: TChangePassword
) => {
  console.log(authorizedUser, payload);
  //  checking if user exits
  const isExists = await User.findOne({ email: authorizedUser?.email }).select(
    "+password"
  );

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
  const isPasswordMatch = await bcrypt.compare(
    payload?.currentPassword,
    isExists?.password
  );

  if (isPasswordMatch) {
    //login

    const jwtPayload = {
      email: isExists?.email,
      role: isExists?.role,
    };
    const accessToken = createJWTToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expiredin as string
    );
    const refreshToken = createJWTToken(
      jwtPayload,
      config.jwt_refresh_secret as string,
      config.jwt_refresh_expiredin as string
    );

    const newHashedPassword = await bcrypt.hash(
      payload?.newPassword,
      Number(config.bcrypt_salting)
    );

    await User.findOneAndUpdate(
      {
        email: isExists?.email,
        role: isExists?.role,
      },
      {
        password: newHashedPassword,
        passwordChangedAt: new Date(),
      }
    );

    return {
      accessToken,
    };
  } else {
    throw new AppError(
      status.NOT_ACCEPTABLE,
      "Current password does not match"
    );
  }
};

// refresh token
const refreshToken = async (token: string) => {
  if (!token) {
    console.log("no token.");
    throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
  }

  const decode = jwt.verify(
    token,
    config.jwt_refresh_secret as string
  ) as JwtPayload;

  const { email, iat } = decode;

  // is User exists
  const user = await User.isUserExistsByEmailId(email);

  // if user not exists
  if (!user) {
    throw new AppError(status.UNAUTHORIZED, "User does not exists.");
  }

  // if JWT Issued Before Password Changed
  if (
    user.passwordChangedAt &&
    User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat as number)
  ) {
    throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
  }

  const jwtPayload = {
    email: user?.email,
    role: user?.role,
  };
  const accessToken = createJWTToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expiredin as string
  );
  return accessToken;
};

// forget password

const forgetPassword = async (email: string) => {
  //  checking if user exits
  const isExists = await User.findOne({ email: email }).select("+password");
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
  const jwtPayload = {
    email: isExists?.email,
    role: isExists?.role,
  };
  const resetToken = createJWTToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_reset_token_expiredin
  );

  const resetLink = `${config.reset_password_ui_link}?email=${isExists?.email}&token=${resetToken}`;

  try {
    await sendMail(isExists?.email, resetLink);
    console.log("Reset mail sent successfully");
  } catch (error) {
    console.error("Error sending reset email:", error);
  }

  return resetLink;
};

const resetPasswordIntoDB = async (
  newPassword: string,
  token: string | undefined
) => {
  if (!token) {
    console.log("no token.");
    throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
  }

  const decode = jwt.verify(
    token,
    config.jwt_access_secret as string
  ) as JwtPayload;

  const { email, role, iat } = decode;

  // is User exists
  const user = await User.isUserExistsByEmailId(email);

  // if user not exists
  if (!user) {
    throw new AppError(status.UNAUTHORIZED, "User does not exists.");
  }

  // checking if user deleted
  if (user?.isDeleted) {
    throw new AppError(status.NOT_FOUND, "User is removed.");
  }

  // if blocked
  if (user?.status === "block") {
    throw new AppError(status.NOT_FOUND, "User is blocked.");
  }
  const newHashedPassword = await bcrypt.hash(
    newPassword,
    Number(config.bcrypt_salting)
  );

  await User.findOneAndUpdate(
    {
      email: user?.email,
      role: user?.role,
    },
    {
      password: newHashedPassword,
      passwordChangedAt: new Date(),
    }
  );
};
export const authServices = {
  loginUser,
  changePassword,
  refreshToken,
  forgetPassword,
  resetPasswordIntoDB,
};
