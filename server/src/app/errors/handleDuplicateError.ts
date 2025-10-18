import type mongoose from "mongoose";
import type { TErrorSource, TGenericErrorReturn } from "../interface/error.js";

export const handleDuplicateError = (error: any): TGenericErrorReturn => {
  const match = error.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];
  const errorSources: TErrorSource = [
    {
      path: "",
      message: `${extractedMessage} is already exist.`,
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: "Duplication error.",
    errorSources,
  };
};
