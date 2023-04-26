import React from 'react'
import styled from 'styled-components'
import {
  Backdrop,
  Button,
  InputsC,
  Label,
  RadioBtn
} from '../styles/CommonStyles'

function FilterModal() {
  return (
    <Backdrop>
      <FormC>
        <h4>Categorías</h4>
        <InputsC>
          <Label>Seleccione una categoría</Label>
          <RadioBtnsC>
            <RadioBtn>
              <input type='radio' name='contract' />
              <span>Hogar</span>
            </RadioBtn>
            <RadioBtn>
              <input type='radio' name='contract' />
              <span>Maquillaje</span>
            </RadioBtn>
          </RadioBtnsC>
        </InputsC>
        <ButtonsC>
          <Button>Limpiar</Button>
          <Button>Aplicar</Button>
        </ButtonsC>
      </FormC>
    </Backdrop>
  )
}

export default FilterModal

const FormC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 300px;
  background-color: ${(props) => props.theme.white};
  border-radius: 18px;
  padding: 1rem;
  background-color: ${(props) => props.theme.gray_200};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  h4 {
    font-size: ${(props) => props.theme.font_16};
    text-align: left;
    font-weight: bold;
  }
  button {
    margin-top: 1.5rem;
  }
`
const RadioBtnsC = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
const ButtonsC = styled.div`
  display: flex;
  gap: 1rem;
  button {
    margin-top: 0;
  }
`
