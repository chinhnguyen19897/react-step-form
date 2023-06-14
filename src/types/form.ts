import { FieldErrors, UseFormRegister } from "react-hook-form"

export interface ICurrentStepInfo {
  id: number
  title: string
  heading: string
  subheading: string
  isFirst?: boolean
  isLast?: boolean
}

export enum EPriceUnit {
  YEARLY = "YEARLY",
  MONTHLY = "MONTHLY",
}

export type StepFormContextType = {
  step: number
  nextStep: () => void
  prevStep: () => void
  goToStep: (num: number) => void
  isLast: () => boolean
  isFirst: () => boolean
  getCurrentStepInfo: () => ICurrentStepInfo
  getAllStepInfo: () => ICurrentStepInfo[]
  getSubmitHandler: () => void
  personalInfo: {
    formRegister: UseFormRegister<PersonalInfo>
    personalInfoErrors: FieldErrors<PersonalInfo>
    personalData: PersonalInfo
  }
  planInfo: {
    isPlanActive: (id: number) => boolean
    getAllPlans: () => PlanInfo
    setPlanAsActive: (id: number) => void
    pricingUnit: EPriceUnit
    togglePricingUnit: () => void
  }
  addOnInfo: {
    getAllAddons: () => AddonInfo
    isActiveAddon: (id: number) => boolean
    addOrRemoveAddon: (id: number, remove: boolean) => void
  }
  getFormSummary: () => FormSummaryInfo
} | null

export type PersonalInfo = {
  name: string
  email: string
  phone: string
}

export type PlanInfo = {
  id: number
  icon: string
  title: string
  monthlyCost: string
  yearlyCost: string
}[]

export type AddonInfo = {
  id: number
  title: string
  subtitle: string
  monthlyCost: string
  yearlyCost: string
}[]

export type FormSummaryInfo = {
  plan?: string
  unit: EPriceUnit
  planPrice?: string
  addOns: {
    name: string
    price: string
  }[]
  total: string
}

export type SummaryInfo = {
  plan?: string
  total?: string
}
