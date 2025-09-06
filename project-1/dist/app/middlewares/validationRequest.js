const validationRequest = (schema) => {
    return async (req, res, next) => {
        try {
            console.log(req.body);
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    };
};
export default validationRequest;
//# sourceMappingURL=validationRequest.js.map