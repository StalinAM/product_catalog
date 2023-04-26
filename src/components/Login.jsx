import React from 'react'
import styled from 'styled-components'
import { Button, Input, InputsC, Label } from '../styles/CommonStyles'

function Login() {
  return (
    <Container>
      <h1>ADMIN</h1>
      <FormC>
        <ContainerIcons>
          <i className='uil uil-envelope-alt' />
          <InputsC>
            <Label htmlFor='email'>Correo electrónico</Label>
            <Input type='email' placeholder='usuario@ejemplo.com' />
          </InputsC>
        </ContainerIcons>
        <ContainerIcons>
          <i className='uil uil-padlock' />
          <InputsC>
            <Label htmlFor='password'>Contraseña</Label>
            <Input type='password' placeholder='contraseña' />
          </InputsC>
        </ContainerIcons>
        <Button>Iniciar Sesión</Button>
      </FormC>
    </Container>
  )
}

export default Login

const Container = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 100%;
  height: calc(100vh - 48px);
  h1 {
    font-size: 2rem;
    color: ${(props) => props.theme.pink_400};
    font-weight: bold;
  }
`
const FormC = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    margin-top: 1.5rem;
  }
`
const ContainerIcons = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  i {
    font-size: 2.375rem;
    color: ${(props) => props.theme.pink_400};
  }
`
