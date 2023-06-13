import './App.css'
import {BrowserRouter} from "react-router-dom";
import Router from "@core/routes/Router.tsx";

function App() {
    return (
            <BrowserRouter>
                <Router/>
            </BrowserRouter>
    )
}

export default App
