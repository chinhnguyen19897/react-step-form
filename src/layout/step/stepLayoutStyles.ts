import styled from "@emotion/styled"

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
    color: #02295a;
    margin: 0;
  }
  h2 {
    margin-top: 8px;
    color: #9699ab;
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
  display: flex;
  .button-prev {
    background-color: transparent;
    color: #9699ab;
  }
  .button-next {
    margin-left: auto;
  }
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
