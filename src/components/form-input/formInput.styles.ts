import styled from "@emotion/styled";


type InputProps = {
    required: boolean
}

export const FormInputWrapper = styled.section`
  
`

export const FormInputLabel = styled.section`
  display: flex;
  justify-content: space-between;
  label { 
    font-size: 14px;
    line-height: 1.25rem;
  }
  .error-massage {
    color: #ED3548;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.25rem;
  }
`

export const Input = styled.input<InputProps>`
    outline: 2px solid transparent;
    outline-offset: 2px;
    padding: 8px 12px;
    border: 1px solid ${(props) => props.required ? '#ED3548' : '#D6D9E6'};
    border-radius: 8px;
    width: 100%;
    margin-top: 8px;
  
`