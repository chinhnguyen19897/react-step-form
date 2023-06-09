import {Link} from 'react-router-dom'
import {NavbarStyled} from "../components/ui/header/Header.tsx";

export const Header = () => {
    return (
        <NavbarStyled>
            <ul>
                <Link to="/home">
                    <li>Home</li>
                </Link>
                <Link to="/step-form">
                    <li>Form</li>
                </Link>
            </ul>
        </NavbarStyled>
    );
};

