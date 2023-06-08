import {Header} from "./Header.tsx";
import {Outlet} from "react-router-dom";

const Main = () => {
    return (
        <>
            <main>
                <Header/>
                <section>
                    <Outlet/>
                </section>
            </main>
        </>
    );
};

export default Main;
