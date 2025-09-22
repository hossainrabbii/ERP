import type { TUser } from "./user.interface.js";
import { User } from "./user.model.js";
// import { userValidation } from "./user.validation.js";

const createUserIntoDB = async (userData: TUser) => {
  // userValidation.userValidationSchema.parse(userData);
  const newUser = await User.create(userData);
  return newUser;
};

// get all use
const getAllUserFromDB = async () => {
  const allUser = await User.find({ isDeleted: false });
  // console.log("Services", allUser);

  return allUser;
};
export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
};
