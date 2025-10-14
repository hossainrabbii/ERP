import catchAsync from "../utils/catchAsync.js";
import AppError from "../errors/AppError.js";
import status from "http-status";
import jwt, {} from "jsonwebtoken";
import config from "../config/index.js";
const auth = () => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
        }
        jwt.verify(token, config.jwt_access_secret, function (error, decode) {
            // error
            if (error) {
                throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
            }
            console.log(decode);
            req.authorizedUser = decode;
            next();
        });
    });
};
export default auth;
//# sourceMappingURL=auth.js.map