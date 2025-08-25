import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });
// dotenv.config() = “load .env file into process.env”.
export default {
  port: process.env.PORT,
  mongodbUrl: process.env.MONGODB_URL,
};

// process.env.PORT = “get the variable (from .env or system env) in a consistent way”.
