import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { loginUser, logoutUser } from '../firebase/services'
import { Button, Input, InputsC, Label } from '../styles/CommonStyles'

function Login() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  const [user, setUser] = useState({ email: '', password: '' })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser((prevState) => ({ ...prevState, [name]: value }))
  }

  const login = async (e) => {
    e.preventDefault()
    loginUser(user.email, user.password, navigate)
  }

  return (
    <Container>
      <h2>ADMIN</h2>
      {!currentUser && (
        <FormC onSubmit={login}>
          <ContainerIcons>
            <i className='uil uil-envelope-alt' />
            <InputsC>
              <Label htmlFor='email'>Correo electrónico</Label>
              <Input
                name='email'
                type='email'
                value={user.email}
                onChange={handleInputChange}
                placeholder='usuario@ejemplo.com'
              />
            </InputsC>
          </ContainerIcons>
          <ContainerIcons>
            <i className='uil uil-padlock' />
            <InputsC>
              <Label htmlFor='password'>Contraseña</Label>
              <Input
                name='password'
                type='password'
                value={user.password}
                onChange={handleInputChange}
                placeholder='contraseña'
              />
            </InputsC>
          </ContainerIcons>
          <Button type='submit'>Iniciar Sesión</Button>
        </FormC>
      )}
      {currentUser && <Button onClick={logoutUser}>Cerrar Sesión</Button>}
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
  button {
    width: auto;
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
  @media screen and (min-width: 768px) {
    width: 400px;
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
