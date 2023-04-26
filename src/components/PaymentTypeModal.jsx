import React from 'react'
import styled from 'styled-components'
import {
  Button,
  Input,
  InputsC,
  Label,
  RadioBtn,
  Backdrop
} from '../styles/CommonStyles'

function PaymentTypeModal() {
  return (
    <Backdrop>
      <Modal>
        <h4>Información adicional</h4>
        <FormC action=''>
          <InputsC>
            <Label htmlFor='name'>Nombre</Label>
            <Input type='text' placeholder='Ingrese su nombre' />
          </InputsC>
          <InputsC>
            <Label>Tipo de pago</Label>
            <RadioBtnsC>
              <RadioBtn>
                <input type='radio' name='contract' />
                <span>Transferencia</span>
              </RadioBtn>
              <RadioBtn>
                <input type='radio' name='contract' />
                <span>Efectivo</span>
              </RadioBtn>
            </RadioBtnsC>
          </InputsC>
          <Information>
            <i className='uil uil-info-circle' />
            <span>
              Al hacer clic en el botón enviar, será redirigido automáticamente
              a WhatsApp con todos los detalles de su compra.
            </span>
          </Information>
          <ButtonsC>
            <Button>Enviar</Button>
            <Button>Cancelar</Button>
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
`
const FormC = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  button {
    margin-top: 1.5rem;
  }
`
const RadioBtnsC = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
const Information = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  i {
    font-size: 2rem;
    color: ${(props) => props.theme.pink_500};
  }
  span {
    color: ${(props) => props.theme.gray_400};
    font-size: ${(props) => props.theme.font_12};
  }
`
const ButtonsC = styled.div`
  display: flex;
  gap: 1rem;
  button {
    margin-top: 0;
  }
`
