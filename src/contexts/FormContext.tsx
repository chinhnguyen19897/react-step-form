import React, { useState } from "react"
import { PersonalInfo, EPriceUnit, StepFormContextType } from "types/form.ts"
import { useForm } from "react-hook-form"
import { AddOns, PLANS, STEP_INFO } from "@utils/step.ts"

const personInfo: PersonalInfo = {
  name: "",
  phone: "",
  email: "",
}

export const StepFormContext = React.createContext<StepFormContextType>(null)

export const useStepForm = (maxSteps: number) => {
  const [stepNumber, setStepNumber] = useState(1)
  const [personalInfoData, setPersonalInfoData] =
    useState<PersonalInfo>(personInfo)
  const [selectPlan, setSelectPlan] = useState(1)
  const [pricingUnit, setPricingUnit] = useState<EPriceUnit>(EPriceUnit.MONTHLY)
  const [activeAddons, setActiveAddons] = useState<number[]>([])

  const {
    register,
    handleSubmit: handlePersonalInfoSubmit,
    formState,
  } = useForm<PersonalInfo>()

  const nextStep = () => {
    setStepNumber((currentStep) => {
      if (currentStep >= maxSteps) return currentStep
      return currentStep + 1
    })
  }

  const prevStep = () => {
    setStepNumber((currentStep) => {
      if (currentStep <= 1) return currentStep
      return currentStep - 1
    })
  }

  const goToStep = (num: number) => {
    if (num <= 0 || num > maxSteps) return
    setStepNumber(num)
  }

  const isLast = () => {
    return stepNumber === maxSteps
  }
  const isFirst = () => {
    return stepNumber === 1
  }

  const getCurrentStepInfo = () => {
    return {
      ...STEP_INFO[stepNumber - 1],
      isFirst: isFirst(),
      isLast: isLast(),
    }
  }

  const getAllStepInfo = () => {
    return STEP_INFO
  }

  const getAllPlans = () => {
    return PLANS
  }

  const getAllAddons = () => {
    return AddOns
  }

  const isActiveAddon = (id: number) => {
    return activeAddons.includes(id)
  }

  const addOrRemoveAddon = (id: number, remove: boolean) => {
    if (remove) {
      setActiveAddons((oldAddons) => {
        return oldAddons.filter((addOnId) => id != addOnId)
      })
    } else {
      setActiveAddons((oldAddons) => {
        return [...oldAddons, id]
      })
    }
  }
  const isPlanActive = (id: number) => {
    return selectPlan === id
  }

  const setPlanAsActive = (id: number) => {
    return setSelectPlan(id)
  }

  const togglePricingUnit = () => {
    if (pricingUnit === EPriceUnit.MONTHLY) {
      setPricingUnit(EPriceUnit.YEARLY)
    } else {
      setPricingUnit(EPriceUnit.MONTHLY)
    }
  }

  const getSubmitHandler = () => {
    if (stepNumber === 1) {
      const validHandler = (data: PersonalInfo) => {
        setPersonalInfoData(data)
        nextStep()
      }
      const invalidHandler = (data: unknown) => {
        console.log("Invalid Personal Info: ", data)
      }
      return handlePersonalInfoSubmit(validHandler, invalidHandler)()
    } else {
      return nextStep()
    }
  }

  const getFormSummary = () => {
    const chosenPlan = PLANS.find((plan) => plan.id === selectPlan)
    const chosenAddons = AddOns.filter((addOn) =>
      activeAddons.includes(addOn.id)
    ).map((addOn) => ({
      name: addOn.title,
      price:
        pricingUnit === EPriceUnit.MONTHLY
          ? addOn.monthlyCost
          : addOn.yearlyCost,
    }))
    const state = {
      plan: chosenPlan?.title,
      unit: pricingUnit,
      planPrice:
        pricingUnit === EPriceUnit.MONTHLY
          ? chosenPlan?.monthlyCost
          : chosenPlan?.yearlyCost,
      addOns: chosenAddons,
      total: "",
    }
    const total =
      Number(state.planPrice) +
      state.addOns.reduce((prev, addOn) => prev + Number(addOn.price), 0)
    state.total = "" + total
    return state
  }

  return {
    step: stepNumber,
    nextStep,
    prevStep,
    goToStep,
    isLast,
    isFirst,
    getCurrentStepInfo,
    getAllStepInfo,
    getAllAddons,
    isActiveAddon,
    addOrRemoveAddon,
    personalInfoData,
    personalInfo: {
      formRegister: register,
      personalInfoErrors: formState.errors,
      personalData: personalInfoData,
    },
    planInfo: {
      getAllPlans,
      isPlanActive,
      setPlanAsActive,
      pricingUnit,
      togglePricingUnit,
    },
    addOnInfo: {
      getAllAddons,
      isActiveAddon,
      addOrRemoveAddon,
    },
    getSubmitHandler,
    getFormSummary,
  }
}
