import mongoose from "mongoose";
import type { TErrorSource, TGenericErrorReturn } from "../interface/error.js";

export const handleValidationError = (
  error: mongoose.Error.ValidationError
): TGenericErrorReturn => {
  const errorSources: TErrorSource = Object.values(error.errors).map((val: any) => ({
    path: val.path,
    message: val.message,
  }));
  const statusCode = 400;
  return {
    statusCode,
    message: "Validation error",
    errorSources,
  };
};
