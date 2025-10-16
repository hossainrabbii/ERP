import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
// dotenv.config() = “load .env file into process.env”.
export default {
    NODE_ENV: process.env.NODE_ENV,
    port: process.env.PORT,
    mongodbUrl: process.env.MONGODB_URL,
    bcrypt_salting: process.env.BCRYPT_SALTING,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_access_expiredin: process.env.JWT_ACCESS_EXPIREDIN,
    jwt_refresh_expiredin: process.env.JWT_REFRESH_EXPIREDIN,
};
// process.env.PORT = “get the variable (from .env or system env) in a consistent way”.
//# sourceMappingURL=index.js.map