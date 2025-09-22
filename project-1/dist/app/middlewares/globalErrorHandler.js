const globaErrorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    return res.status(statusCode).json({
        success: false,
        message: error.message || "Something went wrong!",
        error,
    });
};
export default globaErrorHandler;
//# sourceMappingURL=globalErrorHandler.js.map