import {FormSummaryInfo} from "@types/form.ts";

export interface IIPersonInfo {
    name: string;
    phone: string;
    email: string;
}

export const personInfo: IIPersonInfo = {
    name: "",
    phone: "",
    email: "",
}

export const planInfo: FormSummaryInfo = {
    plan: "",
    unit: "",
    planPrice: "",
    addOns: {
        name: "",
        price: "",
    },
    total: ""
}