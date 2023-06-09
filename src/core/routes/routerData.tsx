import {FormPerson} from "@pages/form/FormPerson.tsx";
import {Home} from "@pages/home/Home.tsx";

const routerData = [
    {
        path: "/home",
        element: <Home/>,
        title: "Home"
    },
    {
        path: "/step-form",
        element: <FormPerson/>,
        title: "form Person"
    }
]


export default routerData;