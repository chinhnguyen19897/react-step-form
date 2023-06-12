import styled from "@emotion/styled";

type StepIndicatorNumberProps = {
    isActive: boolean,
}

export const StepIndicatorWrapper = styled.section`
  display: flex;
  align-items: center;
`

export const StepIndicatorNumber = styled.section<StepIndicatorNumberProps>`
  border: 1px solid ${(props) => props.isActive ? '#BFE2FD' : "#FFFF"}; 
  background-color: ${(props) => props.isActive ? '#BFE2FD' : 'transparent'};
  color: ${(props) => props.isActive ? '#000000' : "#FFFFFF"};
  border-radius: 100%;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  text-align: center;
  line-height: 40px;
`



export const StepIndicatorTitle = styled.article`
  margin-left: 20px;
  .step-title {
      text-transform: uppercase;
      font-size: 12px;
      line-height: 1rem;
      color: #D6D9E6;
  }
  .step-subtitle {
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      font-size: 16px;
  }
`