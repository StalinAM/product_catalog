import styled from 'styled-components'

export const MainC = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1rem 4rem 1rem;
  min-height: 100vh;
  h2 {
    margin: 0.5rem 0;
    font-size: ${(props) => props.theme.font_18};
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    h2 {
      font-size: ${(props) => props.theme.font_20};
    }
    gap: 1.5rem;
    padding: 1.5rem 4rem;
    min-height: calc(100vh - 120px);
  }
  @media screen and (min-width: 1080px) {
    padding: 1.5rem 8rem;
  }
`
export const InputsC = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    gap: 1rem;
  }
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
  &::file-selector-button {
    cursor: pointer;
    border: none;
    border-radius: 16px;
    padding: 0.5rem 1rem;
    font-size: ${(props) => props.theme.font_16};
    font-weight: 500;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.pink_400};
  }
  &::file-selector-button:hover {
    background-color: ${(props) => props.theme.pink_500};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.font_18};
    padding: 0.75rem 1.5rem;
    &::file-selector-button {
      padding: 0.75rem 1rem;
      font-size: ${(props) => props.theme.font_18};
    }
  }
`
export const Label = styled.label`
  font-size: ${(props) => props.theme.font_14};
  font-weight: bold;
  color: ${(props) => props.theme.black};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.font_18};
  }
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
  @media screen and (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: ${(props) => props.theme.font_18};
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
    text-transform: capitalize;
    &:hover {
      box-shadow: 0px 0px 0px 3px ${(props) => props.theme.pink_400} inset;
    }
  }
  @media screen and (min-width: 768px) {
    span {
      font-size: ${(props) => props.theme.font_18};
      padding: 0.75rem 1.5rem;
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
  @media screen and (min-width: 768px) {
    top: auto;
    bottom: 0;
    height: calc(100vh - 120px);
  }
`
export const Back = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 50%;
  cursor: pointer;
  svg {
    fill: ${(props) => props.theme.black};
  }
  &:hover {
    background-color: ${(props) => props.theme.pink_400};
  }
  &:hover svg {
    fill: ${(props) => props.theme.white};
  }
`

export const Line = styled.span`
  width: 100%;
  height: 2px;
  border-radius: 1px;
  background-color: ${(props) => props.theme.pink_400};
  @media screen and (min-width: 768px) {
    height: 3px;
  }
`
export const ButtonC = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  svg {
    fill: ${(props) => props.theme.pink_400};
  }
  &:hover {
    background-color: ${(props) => props.theme.pink_400};
  }
  &:hover svg {
    fill: ${(props) => props.theme.white};
  }
  @media screen and (min-width: 768px) {
    width: 34px;
    height: 34px;
    svg {
      width: 24px;
      height: 24px;
    }
  }
`
