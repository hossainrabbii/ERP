export type TUser = {
  email: string;
  password: string;
  role: "admin" | "employee";
  status: "joined" | "block";
  isDeleted: boolean;
};
