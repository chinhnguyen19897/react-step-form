import styled from '@emotion/styled'


type CarProps = {
    isActive: boolean;
}
export const CardStyles = styled.section<CarProps>`
  padding: 16px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.isActive ? '#473dff' : '#d6d9e6'};
  border-radius: 0.5rem;
  align-items: start;
  flex: 1 1 auto;
  cursor: pointer;
  img {
    margin-bottom: 3rem;
    max-width: 50px;
    margin-right: 1.25rem;
  }
`