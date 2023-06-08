import {routerType} from "./router.types.ts";
import Main from "../../layout/Main.tsx";

const routerData: routerType[] = [
    {
        path: "",
        element: <Main/>,
        title: "Home"
    }
]

export default routerData;