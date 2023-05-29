import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'
import {
  Backdrop,
  Button,
  InputsC,
  Label,
  RadioBtn
} from '../styles/CommonStyles'

function FilterModal({ setActive, listProducts }) {
  const [listCategory, setlistCategory] = useState([])
  useEffect(() => {
    const category = [...new Set(listProducts.map((item) => item.category))]
    setlistCategory(category)
  }, [])
  console.log(listCategory)
  return (
    <Backdrop>
      <FormC>
        <h4>Categorías</h4>
        <InputsC>
          <Label>Seleccione una categoría</Label>
          <RadioBtnsC>
            {listCategory.map((item) => (
              <RadioBtn key={item}>
                <input type='radio' name={item} />
                <span>{item}</span>
              </RadioBtn>
            ))}
          </RadioBtnsC>
        </InputsC>
        <ButtonsC>
          <Button>Aplicar</Button>
          <Button onClick={() => setActive(false)}>Cancelar</Button>
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
  @media screen and (min-width: 768px) {
    padding: 2rem;
    width: 400px;
    h4 {
      font-size: ${(props) => props.theme.font_20};
    }
  }
`
const RadioBtnsC = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
const ButtonsC = styled.div`
  display: flex;
  gap: 1rem;
  button {
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
