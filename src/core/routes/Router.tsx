import routerData from "./RouterData.tsx";
import {routerType} from "./router.types.ts";
import {Route, Routes} from "react-router-dom";
import Main from "@layout/Main.tsx";

const Router = () => {
    const pageRoutes = routerData.map(({path, title, element}: routerType) => {
        return <Route key={title} path={`/${path}`} element={element}/>
    })
    return <Routes>
        <Route element={<Main/>}>
            {pageRoutes}
        </Route>
    </Routes>
};

export default Router;
