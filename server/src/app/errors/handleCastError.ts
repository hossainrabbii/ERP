import type mongoose from "mongoose";
import type { TErrorSource, TGenericErrorReturn } from "../interface/error.js";

export const handleCastError = (
  error: mongoose.Error.CastError
): TGenericErrorReturn => {
  const errorSources: TErrorSource = [
    {
      path: error.path,
      message: error.message,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Cast Error",
    errorSources,
  };
};
