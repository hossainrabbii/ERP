import { model, Schema } from "mongoose";
import type { TTask } from "./task.type.js";

const taskShema = new Schema<TTask>(
  {
    title: {
      type: String,
      required: [true, "Title is required."],
    },
    details: {
      type: String,
      required: [true, "Description is required"],
    },
    givenBy: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: [true, "This fill si required."],
    },
    taskFor: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      required: [true, "This fill si required."],
    },
    deadline: {
      type: String,
      required: [true, "This fill si required."],
    },
    companyId: {
      type: Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "This fill si required."],
    },
    status: {
      type: String,
      enum: ["completed", "in-progress", "in-review"],
      required: [true, "Status is required"],
      default: "in-progress",
    },
    isDeleted: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = model<TTask>("task", taskShema);
