import React from 'react'
import styled from 'styled-components'
import { Back, Button, Header, Line, MainC } from '../styles/CommonStyles'
import product from '../assets/product.jpg'
import product2 from '../assets/product2.webp'

function ShoppingCart() {
  return (
    <MainC>
      <Header>
        <Back>
          <i className='uil uil-angle-left' />
        </Back>
        <h1>Carro de compras</h1>
      </Header>
      <section>
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
                <NumberP>
                  <button>
                    <i className='uil uil-minus' />
                  </button>
                  <span>1</span>
                  <button>
                    <i className='uil uil-plus' />
                  </button>
                </NumberP>
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
                <NumberP>
                  <button>
                    <i className='uil uil-minus' />
                  </button>
                  <span>1</span>
                  <button>
                    <i className='uil uil-plus' />
                  </button>
                </NumberP>
              </section>
            </Product>
          </li>
        </ListProducts>
      </section>
      <Line />
      <Total>
        <p>Total a pagar:</p>
        <span>$29.13</span>
      </Total>
      <Button>Continuar</Button>
    </MainC>
  )
}

export default ShoppingCart

const NumberP = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 18px;
  background-color: ${(props) => props.theme.white};
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.pink_400};
    i {
      color: ${(props) => props.theme.white};
      font-size: ${(props) => props.theme.font_18};
    }
    &:hover {
      background-color: ${(props) => props.theme.pink_500};
    }
  }
  span {
    padding: 0 0.5rem;
    font-size: ${(props) => props.theme.font_18};
    font-weight: bold;
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
    font-size: ${(props) => props.theme.font_12};
    color: ${(props) => props.theme.black};
    overflow-x: hidden;
    h3 {
      font-weight: 500;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: normal;
    }
    p {
      font-weight: 400;
      color: ${(props) => props.theme.gray_400};
    }
    span {
      font-weight: bold;
      font-size: ${(props) => props.theme.font_16};
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
  span {
    font-size: ${(props) => props.theme.font_16};
  }
`
