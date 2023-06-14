import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export const SideBar = ({ children }: Props) => {
  return <nav className="sidebar-wrapper">{children}</nav>;
};
