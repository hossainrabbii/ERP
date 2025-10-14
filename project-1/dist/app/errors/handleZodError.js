const handleZodErr = (error) => {
    const errorSources = error.issues.map((issue) => {
        return {
            path: issue.path[0] !== undefined ? String(issue.path[0]) : "",
            message: issue?.message,
        };
    });
    const statusCode = 400;
    return {
        statusCode,
        message: "Validation error",
        errorSources,
    };
};
export default handleZodErr;
//# sourceMappingURL=handleZodError.js.map