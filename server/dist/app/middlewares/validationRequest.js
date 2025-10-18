import catchAsync from "../utils/catchAsync.js";
const validationRequest = (schema) => {
    return catchAsync(async (req, res, next) => {
        console.log("From validation Request: ", req.body);
        await schema.parseAsync({
            body: req.body,
            cookies: req.cookies,
        });
        next();
    });
};
export default validationRequest;
//# sourceMappingURL=validationRequest.js.map