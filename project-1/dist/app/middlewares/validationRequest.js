import catchAsync from "../utils/catchAsync.js";
const validationRequest = (schema) => {
    return catchAsync(async (req, res, next) => {
        console.log("From validation Request: ", req.body);
        await schema.parseAsync(req.body);
        next();
    });
};
export default validationRequest;
//# sourceMappingURL=validationRequest.js.map