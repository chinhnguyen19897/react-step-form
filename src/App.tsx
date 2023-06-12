import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "./core/routes/router.tsx";
import {StepFormContext, useStepForm} from "./core/context/Context.tsx";


function App() {
    const stepForm = useStepForm(5)
    return (
        <StepFormContext.Provider value={stepForm}>
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
        </StepFormContext.Provider>
    )
}

export default App
