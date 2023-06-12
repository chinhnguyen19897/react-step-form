import {ReactNode} from 'react';
import {SideBarWrapper} from "@assets/styles/sidebar/sideBarStyles.ts";


type Props = {
    children: ReactNode
}
export const SideBar = ({children}: Props) => {
    return (
        <SideBarWrapper>
            {children}
        </SideBarWrapper>
    );
};