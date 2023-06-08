import {FormPerson} from "../../pages/portfolio/FormPerson.tsx";
import {Home} from "../../pages/home/Home.tsx";

const routerData = [
    {
        path: "",
        element: <Home/>,
        title: "Home"
    },
    {
        path: "/step-form",
        element: <FormPerson/>,
        title: "Form Person"
    }
]


export default routerData;