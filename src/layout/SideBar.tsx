import React, {ReactNode} from 'react';
import {SideBarStyled} from "@assets/styles/sidebar/sideBar.styles.ts";


type Props = {
    children: ReactNode
}
export const SideBar: React.FC<Props> = ({children}) => {
    return (
        <SideBarStyled>
            {children}
        </SideBarStyled>
    );
};