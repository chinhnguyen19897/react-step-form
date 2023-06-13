import styled from "@emotion/styled";

type isChecked = {
  isChecked: boolean;
};
export const WrapCheckBox = styled.section<isChecked>`
  &:hover {
    border-color: rgb(71 61 255 / 1);
  }
  padding: 0.75rem;
  background-color: ${(props) =>
    props.isChecked ? " rgb(240 246 255 / 1)" : "#FFF"};
  border-color: ${(props) =>
    props.isChecked ? " #d6d9e6" : "rgb(214 217 230 / 1)"};
  display: flex;
  border-width: 1px;
  align-items: center;
  border-style: solid;
  border-radius: 10px;
  cursor: pointer;
`;

export const CheckBox = styled.div`
  margin-left: 0.75rem;
  margin-right: 1rem;
  input {
    -moz-appearance: none;
    appearance: none;
    padding: 0;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    flex-shrink: 0;
    height: 1rem;
    width: 1rem;
    color: #2563eb;
    background-color: #fff;
    border-color: #6b7280;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    &:checked {
      background-image: url("/images/icon-checked.svg");
      background-color: rgb(71 61 255 / 1);
    }
  }
`;

export const WrapText = styled.div`
  letter-spacing: 0.5rem;
  flex-grow: 1;
  h3 {
    &:first-of-type {
      color: rgb(2 41 90 / 1);
      font-weight: 500;
      letter-spacing: 0.025em;
    }
    &:last-child {
      color: rgb(150 153 171 /1);
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 400;
    }
  }
`;

export const WrapPrice = styled.div`
  color: rgb(71 61 255 / 1);
  margin-right: 0.75rem;
`;
