import type { TTask } from "./task.type.js";
export declare const taskServices: {
    createTaskIntoDB: (payload: TTask) => Promise<import("mongoose").Document<unknown, {}, TTask, {}, {}> & TTask & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=task.service.d.ts.map