import type { TCompany } from "./company.interface.js";
export declare const companyServices: {
    createCompanyIntoDB: (payload: TCompany) => Promise<import("mongoose").Document<unknown, {}, TCompany, {}, {}> & TCompany & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=company.service.d.ts.map