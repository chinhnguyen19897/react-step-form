import {HomeStyled} from "./HomeStyled.tsx";
import {Link} from "react-router-dom";

export const Home = () => {
    return (
        <>
            <HomeStyled>
                <section>
                    <h2>Welcome to the party</h2>
                    <Link to="/step-form">Get started</Link>
                </section>
            </HomeStyled>
        </>
    );
};

