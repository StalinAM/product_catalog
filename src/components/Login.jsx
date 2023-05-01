import React from 'react'
import styled from 'styled-components'
import { Button, Input, InputsC, Label } from '../styles/CommonStyles'

function Login() {
  return (
    <Container>
      <h2>ADMIN</h2>
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
  h2 {
    font-size: 2rem;
    color: ${(props) => props.theme.pink_400};
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    height: calc(100vh - 120px);
    h2 {
      font-size: 2.5rem;
    }
  }
`
const FormC = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  button {
    margin-top: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    width: 500px;
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
  @media screen and (min-width: 768px) {
    gap: 1rem;
    i {
      font-size: 3.125rem;
    }
  }
`
