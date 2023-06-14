import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface CurrentStepInfo {
  id: number;
  title: string;
  heading: string;
  subheading: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export enum EPriceUnit {
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
}

export type StepFormContextType = {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (num: number) => void;
  isLast: () => boolean;
  isFirst: () => boolean;
  getCurrentStepInfo: () => CurrentStepInfo;
  getAllStepInfo: () => CurrentStepInfo[];
  getSubmitHandler: () => void;
  personalInfo: {
    formRegister: UseFormRegister<PersonalInfo>;
    personalInfoErrors: FieldErrors<PersonalInfo>;
    personalData: PersonalInfo;
  };
  planInfo: {
    isPlanActive: (id: string) => boolean;
    getAllPlans: () => PlanItem;
    setPlanAsActive: (id: string) => void;
    pricingType: EPriceUnit;
    togglePricingType: () => void;
  };
  addOnInfo: {
    getAllAddOns: () => AddOnItem;
    isActiveAddon: (id: string) => boolean;
    addOrRemoveAddon: (id: string, remove: boolean) => void;
  };
  getFormSummary: () => FormSummaryItem;
} | null;

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
};

export type PlanItem = {
  id: string;
  icon: string;
  title: string;
  monthlyCost: string;
  yearlyCost: string;
}[];

export type AddOnItem = {
  id: string;
  title: string;
  subtitle: string;
  monthlyCost: string;
  yearlyCost: string;
}[];

export type FormSummaryItem = {
  plan?: string;
  unit: EPriceUnit;
  planPrice?: string;
  addOns: {
    name: string;
    price: string;
  }[];
  total: string;
};

export type SummaryItem = {
  plan?: string;
  total?: string;
};
