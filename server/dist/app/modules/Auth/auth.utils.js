import jwt from "jsonwebtoken";
export const createJWTToken = (jwtPayload, secret, expiresIn) => {
    return jwt.sign(jwtPayload, secret, {
        expiresIn,
    });
};
//# sourceMappingURL=auth.utils.js.map