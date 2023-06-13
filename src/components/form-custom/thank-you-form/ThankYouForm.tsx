import {useContext} from 'react';
import {StepFormContext} from "@core/context/FormContext.tsx";
import {FormWrapper} from "@components/form-custom/thank-you-form/thankYouFormStyles.ts";

export const ThankYouForm = () => {

    const formAPI = useContext(StepFormContext)

    const formSummary = formAPI?.getFormSummary();
    const personalData = formAPI?.personalInfo.personalData;
    console.log(personalData, formSummary)

    if(formAPI?.step !== 5) return <></>

    return (
        <>
            <FormWrapper>
                <img src="/images/icon-thank-you.svg" alt="thank-you"/>
                <h1>Thank You</h1>
                <p>
                    Thanks for confirming your subscription! We hope you have fun using our
                    platform. If you ever need support, please feel free to email us at
                    support@gaming.com
                </p>
            </FormWrapper>
        </>
    );
};
