import styled from 'styled-components'

export const InputsC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`
export const Input = styled.input`
  background-color: ${(props) => props.theme.white};
  border: none;
  border-radius: 18px;
  font-size: ${(props) => props.theme.font_16};
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.pink_400};
  font-weight: 500;
  &::placeholder {
    color: ${(props) => props.theme.gray_400};
    font-weight: 400;
  }
`
export const Label = styled.label`
  font-size: ${(props) => props.theme.font_14};
  font-weight: bold;
  color: ${(props) => props.theme.black};
  margin-left: 0.9rem;
`
export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 18px;
  width: 100%;
  background-color: ${(props) => props.theme.pink_400};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  &:hover {
    background-color: ${(props) => props.theme.pink_500};
  }
`
export const RadioBtn = styled.label`
  display: flex;
  cursor: pointer;
  font-weight: 400;
  position: relative;
  overflow: hidden;
  input {
    position: absolute;
    left: -9999px;
    &:checked + span {
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.pink_400} inset;
    }
  }
  span {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 18px;
    color: ${(props) => props.theme.pink_400};
    font-weight: bold;
    font-size: ${(props) => props.theme.font_16};
    background-color: ${(props) => props.theme.white};
    &:hover {
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.pink_400} inset;
    }
  }
`
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh-48px);
  backdrop-filter: brightness(0.7);
`
