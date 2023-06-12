import styled from "@emotion/styled";


export const SideBarWrapper = styled.nav`
  background-image: url("/images/bg-sidebar-desktop.svg");
  width: fit-content;
  min-width: 247px;
  height: 60%;
  min-height: 568px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 0.75rem 0 0 0.75rem;
  border-width: 20px;
  border-color: #ffffff;
  border-right-width: 0;
  border-style: solid;
`

export const SideBarStep = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  align-items: flex-start;
  width: 100%;
  margin-left: 1.5rem;
  margin-top: 2.5rem;
  margin-right: auto;
`