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
        <h1>Datos nuevo producto</h1>
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
        <Button>Subir Producto</Button>
      </FormC>
    </MainC>
  )
}

export default NewProduct

const FormC = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
const InputsNumC = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  input {
    width: 100%;
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
`
