import styled from "@emotion/styled"

export const SelectPlanFormWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`

export const SelectPlanFormSwitch = styled.div`
  padding: 12px;
  background-color: #f0f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  margin-top: 24px;
  label {
    font-weight: 700;
  }
  .label-monthly {
    margin-right: 32px;
  }
  .label-yearly {
    margin-left: 32px;
  }
  .switch-button {
    background-color: #02295a;
    border-radius: 30px;
    align-items: center;
    display: inline-flex;
    height: 24px;
    width: 44px;
    position: relative;
    cursor: pointer;
    span {
      background-color: #ffffff;
      width: 16px;
      height: 16px;
      display: inline-block;
      border-radius: 50%;
      transition: all 200ms;
    }
  }
  .translate-x-1 span {
    transform: translate(-3px, 0%);
  }
  .translate-x-6 span {
    transform: translate(14px, 0%);
  }
`
