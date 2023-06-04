import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import {
  Button,
  Input,
  InputsC,
  Label,
  RadioBtn,
  Backdrop
} from '../styles/CommonStyles'
import { UilInfoCircle } from '@iconscout/react-unicons'
import { ShoppingCartItemsContext } from '../context/ShoppingCartItems'

function PaymentTypeModal({ setActive, setActiveThanks }) {
  const [purcherData, setPurcherData] = useState({})
  const { shoppingCartItems } = useContext(ShoppingCartItemsContext)
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPurcherData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, contract } = purcherData
    const cartItems = shoppingCartItems.map((item) => ({
      title: item.title,
      quantity: item.quantity,
      totalPrice: item.quantity * item.price
    }))
    const itemsMessage = cartItems
      .map((item) => `- ${item.title}: ${item.quantity}`)
      .join('\n')
    const totalPrice = cartItems
      .map((item) => item.totalPrice)
      .reduce((total, current) => total + current, 0)
    const message = `¡Hola! Quiero realizar una compra. Mi nombre es ${name} y quiero pagar mediante ${contract}. Los productos:\n${itemsMessage}\n Total: ${totalPrice.toFixed(
      2
    )}$`
    const encodedMessage = encodeURIComponent(message)
    const whatsappLink = `https://wa.me/593978657839?text=${encodedMessage}`

    window.open(whatsappLink, '_blank')
    setTimeout(() => {
      setActiveThanks(true)
      setActive(false)
    }, 5000)
  }
  return (
    <Backdrop>
      <Modal>
        <h4>Información extra</h4>
        <FormC onSubmit={handleSubmit}>
          <InputsC>
            <Label htmlFor='name'>Nombre</Label>
            <Input
              name='name'
              type='text'
              placeholder='Ingrese su nombre'
              onChange={handleInputChange}
            />
          </InputsC>
          <InputsC>
            <Label>Tipo de pago</Label>
            <RadioBtnsC>
              <RadioBtn>
                <input
                  type='radio'
                  name='contract'
                  value={'transferencia'}
                  onChange={handleInputChange}
                />
                <span>Transferencia</span>
              </RadioBtn>
              <RadioBtn>
                <input
                  type='radio'
                  name='contract'
                  value={'efectivo'}
                  onChange={handleInputChange}
                />
                <span>Efectivo</span>
              </RadioBtn>
            </RadioBtnsC>
          </InputsC>
          <Information>
            <div>
              <UilInfoCircle size='30' />
            </div>
            <span>
              Al hacer clic en el botón enviar, será redirigido automáticamente
              a WhatsApp con todos los detalles de su compra.
            </span>
          </Information>
          <ButtonsC>
            <Button type='submit'>Enviar</Button>
            <Button onClick={() => setActive(false)}>Cancelar</Button>
          </ButtonsC>
        </FormC>
      </Modal>
    </Backdrop>
  )
}

export default PaymentTypeModal

const Modal = styled.div`
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
    text-align: right;
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    padding: 2rem;
    width: 510px;
    h4 {
      font-size: ${(props) => props.theme.font_20};
    }
  }
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  button {
    margin-top: 1.5rem;
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
const Information = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  svg {
    fill: ${(props) => props.theme.pink_500};
  }
  span {
    color: ${(props) => props.theme.gray_400};
    font-size: ${(props) => props.theme.font_12};
  }
  @media screen and (min-width: 768px) {
    svg {
      width: 38px;
      height: 38px;
    }
    span {
      font-size: ${(props) => props.theme.font_14};
    }
  }
`
const ButtonsC = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  button {
    width: 100% !important;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
