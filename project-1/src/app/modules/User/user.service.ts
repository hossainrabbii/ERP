import type { TUser } from "./user.interface.js";
import { User } from "./user.model.js";
// import { userValidation } from "./user.validation.js";

const createUserIntoDB = async (userData: TUser) => {
  const newUser = await User.create(userData);
  return newUser;
};

// get all use
const getAllUserFromDB = async (query: Record<string, unknown>) => {
  const allUser = await User.find({ isDeleted: false });
  return allUser;
};
export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
};
