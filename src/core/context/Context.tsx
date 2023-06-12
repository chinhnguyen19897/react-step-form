import React, {useState} from "react";
import {FormSummaryInfo, PersonalInfo, PriceUnit, StepFormContextType} from "types/form.ts"
import {personInfo, planInfo} from "@pages/form/dataForm.ts";
import {useForm} from "react-hook-form";
import {AddOns, PLANS, STEP_INFO} from "@utils/stepUtils.ts";


export const StepFormContext = React.createContext<StepFormContextType>(null)

// eslint-disable-next-line react-refresh/only-export-components
export const useStepForm = (maxSteps: number) => {

    const [stepNumber, setStepNumber] = useState(1);
    const [personalInfoData, setPersonalInfoData] = useState<PersonalInfo>(personInfo)
    const [stateSummary, setStateSummary] = useState<FormSummaryInfo>(planInfo)
    const [activePlan, setActivePlan] = useState("1");
    const [pricingType, setPricingType] = useState<PriceUnit>(PriceUnit.MONTHLY)
    const [activeAddons, setActiveAddons] = useState<string[]>([]);

    const {register, handleSubmit: handlePersonalInfoSubmit, formState} = useForm<PersonalInfo>()

    const nextStep = () => {
        setStepNumber(currentStep => {
            if (currentStep >= maxSteps) return currentStep;
            return currentStep + 1
        })
    }

    const prevStep = () => {
        setStepNumber(currentStep => {
            if (currentStep <= 1) return currentStep;
            return currentStep - 1;
        })
    }

    const goToStep = (num: number) => {
        if (num <= 0 || num > maxSteps) return;
        setStepNumber(num)
    }

    const isLast = () => {
        return stepNumber === maxSteps;
    }
    const isFirst = () => {
        return stepNumber === 1;
    }

    const getCurrentStepInfo = () => {
        return {
            ...STEP_INFO[stepNumber - 1],
            isFirst: isFirst(),
            isLast: isLast(),
        }
    }

    const getAllSteps = () => {
        return STEP_INFO;
    }

    const getAllPlans = () => {
        return PLANS;
    }

    const getAllAddons = () => {
        return AddOns;
    }

    const isActiveAddon = (id: string) => {
        return activeAddons.includes(id)
    }

    const addOrRemoveAddon = (id: string, remove: boolean) => {
        if (remove) {
            setActiveAddons(oldAddons => {
                return oldAddons.filter((addOnId) => id != addOnId)
            })
        } else {
            setActiveAddons(oldAddons => {
                return [...oldAddons, id]
            })
        }
    }
    const isPlanActive = (id: string) => {
        return activePlan === id;
    }

    const setPlanAsActive = (id: string) => {
        return setActivePlan(id);
    }

    const togglePricingType = () => {
        if (pricingType === PriceUnit.MONTHLY) {
            setPricingType(PriceUnit.YEARLY);
        } else {
            setPricingType(PriceUnit.MONTHLY);
        }
    }

    const getSubmitHandler = () => {
        if (stepNumber === 1) {

            const validHandler = (data: PersonalInfo) => {
                setPersonalInfoData(data);
                nextStep()
            }
            const invalidHandler = (data: unknown) => {
                console.log("Invalid Personal Info: ", data);
            }
            return handlePersonalInfoSubmit(validHandler, invalidHandler)()
        } else {
            return nextStep()
        }
    }

     const getFormSummary = () => {
        const chosenPlan = PLANS.find(plan => plan.id === activePlan);
        const chosenAddons = AddOns.filter(addOn => activeAddons.includes(addOn.id))
            .map(addOn => ({ name: addOn.title, price: pricingType === PriceUnit.MONTHLY ? addOn.monthlyCost : addOn.yearlyCost }))
        const state = {
            plan: chosenPlan?.title,
            unit: pricingType,
            planPrice: pricingType === PriceUnit.MONTHLY ? chosenPlan?.monthlyCost : chosenPlan?.yearlyCost,
            addOns: chosenAddons,
            total: ""
        }
        const total = Number(state.planPrice) + state.addOns.reduce((prev, addOn) => prev + Number(addOn.price), 0);
        state.total = "" + total;
        return state;
    }


    return {
        step: stepNumber,
        nextStep,
        prevStep,
        goToStep,
        isLast,
        isFirst,
        getCurrentStepInfo,
        getAllSteps,
        getAllAddons,
        isActiveAddon,
        addOrRemoveAddon,
        stateSummary,
        personalInfo: {
            formRegister: register,
            personalInfoErrors: formState.errors
        },
        planInfo: {
            getAllPlans,
            isPlanActive,
            setPlanAsActive,
            pricingType,
            togglePricingType
        },
        addOnInfo: {
            getAllAddons,
            isActiveAddon,
            addOrRemoveAddon
        },
        getSubmitHandler,
        getFormSummary
    }
}