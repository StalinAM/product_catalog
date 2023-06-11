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

function FilterModal({ setActive, setCategory, listProductsOrigin }) {
  const [seelectedCategory, setSeelectedCategory] = useState('')
  const [listCategory, setlistCategory] = useState([])
  useEffect(() => {
    const category = [
      ...new Set(listProductsOrigin.map((item) => item.category))
    ]
    setlistCategory([...category, 'todos'])
  }, [])

  const handleInputChange = (e) => {
    setSeelectedCategory(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setCategory(seelectedCategory)
    setActive(false)
  }
  return (
    <Backdrop>
      <FormC onSubmit={handleSubmit}>
        <h4>Categorías</h4>
        <InputsC>
          <Label>Seleccione una categoría</Label>
          <RadioBtnsC>
            {listCategory.map((item) => (
              <RadioBtn key={item}>
                <input
                  type='radio'
                  name='category'
                  value={item}
                  onChange={handleInputChange}
                />
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
  width: 300px;
  border-radius: 18px;
  padding: 1rem;
  background-color: ${(props) => props.theme.gray_200};
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
