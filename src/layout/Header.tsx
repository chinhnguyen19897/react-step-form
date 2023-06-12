import {Link} from 'react-router-dom'
import {NavbarStyled} from "@assets/styles/header/headerStyles.ts";

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

