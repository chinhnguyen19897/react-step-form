import {Header} from "./Header.tsx";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <>
            <main>
                <Header/>
                <Outlet/>
            </main>
        </>
    );
};

export default Main;
