const validationRequest = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            next(error);
        }
    };
};
export default validationRequest;
//# sourceMappingURL=validationRequest.js.map