import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, ButtonC, Line, MainC } from '../styles/CommonStyles'
import product from '../assets/product.jpg'
import product2 from '../assets/product2.webp'
import PaymentTypeModal from '../components/PaymentTypeModal'
import { UilPlus, UilMinus, UilTrashAlt } from '@iconscout/react-unicons'

function ShoppingCart() {
  const [active, setActive] = useState(false)
  return (
    <MainC>
      <h2>Carro de compras</h2>
      <Content>
        <ListProducts>
          <li>
            <Product>
              <picture>
                <img src={product} alt='' />
              </picture>
              <section>
                <h3>Esponjas de belleza</h3>
                <p>
                  Esponja de maquillaje para complexión, (4 paquetes de 8, 32
                  unidades en total).
                </p>
                <span>$10.14</span>
                <EditProduct>
                  <NumberP>
                    <ButtonC>
                      <UilMinus size='20' />
                    </ButtonC>
                    <span>1</span>
                    <ButtonC>
                      <UilPlus size='20' />
                    </ButtonC>
                  </NumberP>
                  <ButtonC>
                    <UilTrashAlt size='22' />
                  </ButtonC>
                </EditProduct>
              </section>
            </Product>
          </li>
          <li>
            <Product>
              <picture>
                <img src={product2} alt='' />
              </picture>
              <section>
                <h3>Zapatillas de deporte de verano</h3>
                <p>
                  chanclas de plataforma de fondo grueso, sandalias deportivas
                  unisex con agujeros de Eva suave.
                </p>
                <span>$18.99</span>
                <EditProduct>
                  <NumberP>
                    <ButtonC>
                      <UilMinus size='20' />
                    </ButtonC>
                    <span>1</span>
                    <ButtonC>
                      <UilPlus size='20' />
                    </ButtonC>
                  </NumberP>
                  <ButtonC>
                    <UilTrashAlt size='22' />
                  </ButtonC>
                </EditProduct>
              </section>
            </Product>
          </li>
        </ListProducts>
        <Line />
        <Total>
          <p>Total a pagar:</p>
          <span>$29.13</span>
        </Total>
        <BtnC>
          {active && <PaymentTypeModal setActive={setActive} />}
          <Button onClick={() => setActive(true)}>Continuar</Button>
        </BtnC>
      </Content>
    </MainC>
  )
}

export default ShoppingCart

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 480px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 85%;
  }
  @media screen and (min-width: 1280px) {
    width: 75%;
  }
`

const NumberP = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-radius: 18px;
  height: 28px;
  gap: 0.75rem;
  @media screen and (min-width: 768px) {
    gap: 1rem;
    height: 34px;
  }
`
const Product = styled.article`
  display: grid;
  grid-template-columns: minmax(130px, 200px) minmax(160px, 1fr);
  align-items: center;
  gap: 1rem;
  picture {
    border-radius: 18px;
    overflow: hidden;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    color: ${(props) => props.theme.black};
    overflow-x: hidden;
    h3 {
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: normal;
      font-size: ${(props) => props.theme.font_16};
    }
    p {
      font-weight: 400;
      color: ${(props) => props.theme.gray_400};
      font-size: ${(props) => props.theme.font_14};
    }
    span {
      margin-left: auto;
      font-weight: bold;
      font-size: ${(props) => props.theme.font_18};
    }
  }
  @media screen and (min-width: 768px) {
    section {
      gap: 0.75rem;
      font-size: ${(props) => props.theme.font_14};
      h3 {
        font-size: ${(props) => props.theme.font_18};
      }
      p {
        font-size: ${(props) => props.theme.font_16};
      }
      span {
        font-size: ${(props) => props.theme.font_20};
      }
    }
  }
`
const ListProducts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 0.5rem;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: ${(props) => props.theme.font_16};
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.font_20};
  }
`
const EditProduct = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
const BtnC = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  @media screen and (min-width: 768px) {
    button {
      width: auto;
    }
  }
`
