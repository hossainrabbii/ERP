import { User } from "./user.model.js";
import { userValidation } from "./user.validation.js";
const createUserIntoDB = async (userData) => {
    // userValidation.userValidationSchema.parse(userData);
    const newUser = await User.create(userData);
    return newUser;
};
export const userServices = {
    createUserIntoDB,
};
//# sourceMappingURL=user.service.js.map