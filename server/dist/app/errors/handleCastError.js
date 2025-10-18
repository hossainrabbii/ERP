export const handleCastError = (error) => {
    const errorSources = [
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
//# sourceMappingURL=handleCastError.js.map