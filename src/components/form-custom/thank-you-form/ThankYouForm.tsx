import React, {useContext} from 'react';
import {StepFormContext} from "@core/context/Context.tsx";

export const ThankYouForm = () => {

    const formAPI = useContext(StepFormContext)
    
    if(formAPI?.step !== 5) return <></>

    return (
        <section>
            <img src="/images/icon-thank-you.svg" alt="thank-you"/>
            <h1>Thank You</h1>
            <p>
                Thanks for confirming your subscription! We hope you have fun using our
                platform. If you ever need support, please feel free to email us at
                support@loremgaming.com
            </p>
        </section>
    );
};
