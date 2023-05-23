import React, { useState } from 'react'
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

function PaymentTypeModal({ setActive }) {
  const [purcherData, setPurcherData] = useState({})
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setPurcherData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const sendOrder = () => {}
  return (
    <Backdrop>
      <Modal>
        <h4>Información adicional</h4>
        <FormC action=''>
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
            <Button>Enviar</Button>
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
