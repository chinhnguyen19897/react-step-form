import styled from "@emotion/styled";


export const StepFormStyled = styled.section`
  max-width: 36rem;
  height: 100%;
  margin: 0 auto;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;

  section {
    flex: 1 1 auto;
    flex-grow: 1;
  }
`

export const StepFormHeader = styled.header`
  margin-top: 1.5rem;
  letter-spacing: 0.25rem;
`
export const StepFormFooter = styled.header`
  padding: 0;
  margin-bottom: 0.5rem;
  position: relative;
  background-color: #fff;
  width: 100%;
  left: 0;
  bottom: 0;
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
