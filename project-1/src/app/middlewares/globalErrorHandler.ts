import type {
  ErrorRequestHandler,
  NextFunction,
  Request,
  Response,
} from "express";
import { ZodError } from "zod";
import type { TErrorSource } from "../interface/error.js";
import config from "../config/index.js";
import handleZodErr from "../errors/handleZodError.js";
import { handleValidationError } from "../errors/handleValidationError.js";
import { handleCastError } from "../errors/handleCastError.js";
import { handleDuplicateError } from "../errors/handleDuplicateError.js";
import AppError from "../errors/AppError.js";

// we can do both
// const globaErrorHandler = (
//   error: any,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {

const globaErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = error.statusCode || 500;
  let message = error.message || "Something went wrong";
  let errorSources: TErrorSource = [
    {
      path: "",
      message: "Something",
    },
  ];

  // if zod error
  if (error instanceof ZodError) {
    const simplifiedError = handleZodErr(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }
  // if mongoose error/validation error
  else if (error?.name === "ValidationError") {
    const validationError = handleValidationError(error);
    statusCode = validationError.statusCode;
    message = validationError.message;
    errorSources = validationError.errorSources;
  }
  // if casterror
  else if (error?.name === "CastError") {
    const getCastError = handleCastError(error);
    statusCode = getCastError.statusCode;
    message = getCastError.message;
    errorSources = getCastError.errorSources;
  }

  // if duplicate
  else if (error?.code === 11000) {
    const getCastError = handleDuplicateError(error);
    statusCode = getCastError.statusCode;
    message = getCastError.message;
    errorSources = getCastError.errorSources;
  } // if apperror
  else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSources = [
      {
        path: "",
        message: error?.message,
      },
    ];
  } // if error
  else if (error instanceof Error) {
    message = error?.message;
    errorSources = [
      {
        path: "",
        message: error?.message,
      },
    ];
  }

  return res.status(statusCode).json({
    success: false,
    message: error.message || "Something went wrong!",
    errorSources,
    error,
    stack: config.NODE_ENV==="development" ? error?.stack : null,
  });
};
export default globaErrorHandler;
