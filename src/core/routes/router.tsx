import routerData from "./routerData.tsx";
import {routerType} from "./router.types.ts";
import {Route, Routes} from "react-router-dom";

const Router = () => {
    const pageRoutes = routerData.map(({path, title, element}: routerType) => {
        return <Route key={title} path={`/${path}`} element={element}/>
    })
    return <Routes>{pageRoutes}</Routes>
};

export default Router;