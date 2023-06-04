import React from 'react'
import styled from 'styled-components'
import { Backdrop, Button } from '../styles/CommonStyles'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { useNavigate } from 'react-router-dom'

function Congratulations({ setShoppingCartItems }) {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/catalog')
    setShoppingCartItems([])
  }
  return (
    <Backdrop>
      <Modal>
        <UilCheckCircle size={60} />
        <h4>Gracias por su compra</h4>
        <p>En breve nos pondremos en contacto.</p>
        <Button onClick={handleClick}>Volver a la Tienda</Button>
      </Modal>
    </Backdrop>
  )
}

export default Congratulations
const Modal = styled.div`
  width: 300px;
  background-color: ${(props) => props.theme.white};
  border-radius: 18px;
  padding: 1rem;
  background-color: ${(props) => props.theme.gray_200};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  h4 {
    font-size: ${(props) => props.theme.font_20};
    font-weight: bold;
    color: ${(props) => props.theme.pink_400};
  }

  svg {
    fill: ${(props) => props.theme.pink_500};
  }
  @media screen and (min-width: 768px) {
    padding: 2rem;
    width: 480px;
    h4 {
      font-size: ${(props) => props.theme.font_24};
    }
    p {
      font-size: ${(props) => props.theme.font_18};
    }
  }
`
