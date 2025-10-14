import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../User/user.model.js";
import type { TLogin } from "./auth.interface.js";
import AppError from "../../errors/AppError.js";
import status from "http-status";
import config from "../../config/index.js";

const loginUser = async (payload: TLogin) => {
  //  checking if user exits
  const isExists = await User.findOne({ email: payload?.email });
  if (!isExists) {
    throw new Error("User is not found.");
  }

  // checking if user deleted
  const isDeleted = isExists?.isDeleted;

  if (isDeleted) {
    throw new AppError(status.NOT_FOUND, "User is removed.");
  }

  // checking if the password is correct
  const isPasswordMatch = await bcrypt.compare(
    payload?.password,
    isExists?.password
  );

  if (isPasswordMatch) {
    //login

    const JwtPayload = {
      email: isExists?.email,
    };
    const accessToken = jwt.sign(
      JwtPayload,
      config.jwt_access_secret as string,
      {
        expiresIn: "3d",
      }
    );

    return {
      accessToken,
    };
  } else {
    console.log("Un-success");
  }
};

export const authServices = {
  loginUser,
};
