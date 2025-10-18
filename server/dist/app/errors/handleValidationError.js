import mongoose from "mongoose";
export const handleValidationError = (error) => {
    const errorSources = Object.values(error.errors).map((val) => ({
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
//# sourceMappingURL=handleValidationError.js.map