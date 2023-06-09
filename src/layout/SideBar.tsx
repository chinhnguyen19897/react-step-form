import React, {ReactNode} from 'react';
import {SideBarStyled} from "@components/ui/sidebar/SideBarStyled.tsx";


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