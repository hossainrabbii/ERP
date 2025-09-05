import type { TUser } from "./user.interface.js";
import { User } from "./user.model.js";
// import { userValidation } from "./user.validation.js";

const createUserIntoDB = async (userData: TUser) => {
  // userValidation.userValidationSchema.parse(userData);
  const newUser = await User.create(userData);
  return newUser;
};

export const userServices = {
  createUserIntoDB,
};
