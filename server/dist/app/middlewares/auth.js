import catchAsync from "../utils/catchAsync.js";
import AppError from "../errors/AppError.js";
import status from "http-status";
import jwt, {} from "jsonwebtoken";
import config from "../config/index.js";
import { User } from "../modules/User/user.model.js";
const auth = (...requireRoles) => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization;
        if (!token) {
            console.log("no token.");
            throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
        }
        const decode = jwt.verify(token, config.jwt_access_secret);
        const { role, email, iat } = decode;
        // is User exists
        const user = await User.isUserExistsByEmailId(email);
        // if user not exists
        if (!user) {
            throw new AppError(status.UNAUTHORIZED, "User does not exists.");
        }
        // if JWT Issued Before Password Changed
        if (user.passwordChangedAt &&
            User.isJWTIssuedBeforePasswordChanged(user.passwordChangedAt, iat)) {
            throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
        }
        // const role = decode?.role;
        if (requireRoles && !requireRoles.includes(role)) {
            throw new AppError(status.UNAUTHORIZED, "Unauthorized user.");
        }
        req.authorizedUser = decode;
        next();
    });
};
export default auth;
//# sourceMappingURL=auth.js.map