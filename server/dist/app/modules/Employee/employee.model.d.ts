import { Schema, Types } from "mongoose";
import type { TEmployee } from "./employee.type.js";
export declare const Employee: import("mongoose").Model<TEmployee, {}, {}, {}, import("mongoose").Document<unknown, {}, TEmployee, {}, import("mongoose").DefaultSchemaOptions> & TEmployee & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, Schema<TEmployee, import("mongoose").Model<TEmployee, any, any, any, import("mongoose").Document<unknown, any, TEmployee, any, {}> & TEmployee & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TEmployee, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<TEmployee>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<TEmployee> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=employee.model.d.ts.map