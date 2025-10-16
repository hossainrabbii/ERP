import jwt from "jsonwebtoken";

export const createJWTToken = (
  jwtPayload: { email: string; role: string },
  secret: string,
  expiresIn: any | number | string
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};
