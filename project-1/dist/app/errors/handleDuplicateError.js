export const handleDuplicateError = (error) => {
    const match = error.message.match(/"([^"]*)"/);
    const extractedMessage = match && match[1];
    const errorSources = [
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
//# sourceMappingURL=handleDuplicateError.js.map