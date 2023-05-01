import React from 'react'
import styled from 'styled-components'
import {
  Back,
  Button,
  Header,
  Input,
  InputsC,
  Label,
  MainC
} from '../styles/CommonStyles'

function NewProduct() {
  return (
    <MainC>
      <Header>
        <Back>
          <i className='uil uil-angle-left' />
        </Back>
        <h2>Datos nuevo producto</h2>
      </Header>
      <FormC>
        <section>
          <InputsC>
            <Label htmlFor='email'>Título</Label>
            <Input type='text' placeholder='Ingrese el título del producto' />
          </InputsC>
          <InputsC>
            <Label htmlFor='text'>Descripción</Label>
            <Input type='text' placeholder='Ingrese una descripción corta' />
          </InputsC>
          <InputsC>
            <Label htmlFor='text'>Categoría</Label>
            <Input type='text' placeholder='hogar, ropa, maquillaje, etc' />
          </InputsC>
          <InputsNumC>
            <InputsC>
              <Label htmlFor='text'>Precio</Label>
              <Input type='number' placeholder='0' />
            </InputsC>
            <InputsC>
              <Label htmlFor='text'>Precio</Label>
              <Input type='number' placeholder='0' />
            </InputsC>
          </InputsNumC>
        </section>
        <section>
          <InputsC>
            <Label>Detalles del producto</Label>
            <Textarea placeholder='Ingrese todos los detalles de producto' />
          </InputsC>
          <InputsC>
            <Label>Agregar imagenes</Label>
          </InputsC>
        </section>
        <div>
          <Button>Subir Producto</Button>
        </div>
      </FormC>
    </MainC>
  )
}

export default NewProduct

const FormC = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div {
    width: 100%;
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    padding: 2rem 4rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
    div {
      width: 100%;
      button {
        width: auto;
      }
    }
    section {
      flex: 1;
    }
  }
`
const InputsNumC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  input {
    width: 100%;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
  }
`
const Textarea = styled.textarea`
  background-color: ${(props) => props.theme.white};
  border-radius: 18px;
  border: none;
  padding: 0.5rem 1rem;
  color: ${(props) => props.theme.pink_400};
  min-height: 14rem;
  resize: none;
  font-size: ${(props) => props.theme.font_16};
  &::placeholder {
    color: ${(props) => props.theme.gray_400};
    font-weight: 400;
  }
  @media screen and (min-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: ${(props) => props.theme.font_18};
  }
`
