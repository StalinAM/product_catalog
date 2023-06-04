import React, { useContext, useState, useEffect } from 'react'
import styled from 'styled-components'
import { Button, ButtonC, Line, MainC } from '../styles/CommonStyles'
import PaymentTypeModal from '../components/PaymentTypeModal'
import { UilPlus, UilMinus, UilTrashAlt } from '@iconscout/react-unicons'
import { ShoppingCartItemsContext } from '../context/ShoppingCartItems'
import { Link } from 'react-router-dom'
import Congratulations from '../components/ThanksModal'

function ShoppingCart() {
  const [active, setActive] = useState(false)
  const [activeThanks, setActiveThanks] = useState(false)
  const [totalPayable, setTotalPayable] = useState(0)
  const { shoppingCartItems, setShoppingCartItems, numItem } = useContext(
    ShoppingCartItemsContext
  )
  useEffect(() => {
    setTotalPayable(
      shoppingCartItems.reduce(
        (acumulator, item) => acumulator + item.price * item.quantity,
        0
      )
    )
  }, [numItem])

  const removeItem = (index) => {
    const updateItems = [...shoppingCartItems]
    updateItems.splice(index, 1)
    setShoppingCartItems(updateItems)
  }
  const incrementNum = (index) => {
    const updateItems = [...shoppingCartItems]
    updateItems[index].quantity++
    setShoppingCartItems(updateItems)
  }
  const decrementNum = (index) => {
    const updateItems = [...shoppingCartItems]
    if (updateItems[index].quantity > 1) {
      updateItems[index].quantity--
      setShoppingCartItems(updateItems)
    }
  }
  return (
    <MainC>
      <h2>Carro de compras</h2>
      <Content>
        <ListProducts>
          {shoppingCartItems.length > 0 ? (
            shoppingCartItems.map((item, index) => (
              <li key={item.image}>
                <Product>
                  <picture>
                    <img src={item.image} alt='' />
                  </picture>
                  <section>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <EditProduct>
                      <NumberP>
                        <ButtonC onClick={() => decrementNum(index)}>
                          <UilMinus size='20' />
                        </ButtonC>
                        <span>{item.quantity}</span>
                        <ButtonC onClick={() => incrementNum(index)}>
                          <UilPlus size='20' />
                        </ButtonC>
                      </NumberP>
                      <ButtonC onClick={() => removeItem(index)}>
                        <UilTrashAlt size='22' />
                      </ButtonC>
                    </EditProduct>
                  </section>
                </Product>
              </li>
            ))
          ) : (
            <p>
              No hay productos en tu carrito.{' '}
              <Link to={'/catalog'}>Sigue explorando.</Link>
            </p>
          )}
        </ListProducts>
        <Line />
        <Total>
          <p>Total a pagar:</p>
          <span>${totalPayable.toFixed(2)}</span>
        </Total>
        <BtnC>
          {active && (
            <PaymentTypeModal
              setActive={setActive}
              setActiveThanks={setActiveThanks}
            />
          )}
          {shoppingCartItems.length > 0 ? (
            <Button onClick={() => setActive(true)}>Continuar</Button>
          ) : (
            <></>
          )}
          {activeThanks && (
            <Congratulations setShoppingCartItems={setShoppingCartItems} />
          )}
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
  & > p {
    font-size: ${(props) => props.theme.font_18};
  }
  p > a {
    color: ${(props) => props.theme.pink_500};
  }
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: ${(props) => props.theme.font_18};
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
