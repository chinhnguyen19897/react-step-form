import styled from "@emotion/styled";


export const StepFormStyled = styled.section`
  max-width: 36rem;
  height: 90%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  section {
    flex: 1 1 auto;
    flex-grow: 1;
  }
  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
    color: #02295A;
    margin: 0;
  }
  h2 {
    margin-top: 8px;
    color: #9699AB;
    font-size: 16px;
    font-weight: 300;
  }
`

export const StepFormHeader = styled.header`
  margin-top: 1.5rem;
  letter-spacing: 0.25rem;
`
export const StepFormFooter = styled.footer`
  padding: 0;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: #fff;
  width: 100%;
  left: 0;
  bottom: 0;
  text-align: end;
`

export const StepFormWrapper = styled.section`
  flex: 1 1 auto;
  flex-grow: 1;

  > section {
    display: flex;
    flex-direction: column;
    margin-top: 1.5rem;
    gap: 1.5rem;
  }
`
