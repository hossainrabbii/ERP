import { model, Schema } from "mongoose";
import type { TCompnay } from "./company.interface.js";

// creating schema of company, as instance of Schema
const companyShema = new Schema<TCompnay>(
  {
    name: {
      tyle: String,
      required: [true, "Company name required."],
      unique: true,
      minLength: [2, "Company name be at least 2 characters long."],
    },
  },
  { timestamps: true }
);

export const Company = model<TCompnay>("company", companyShema);
