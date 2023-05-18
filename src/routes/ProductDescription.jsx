import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, ButtonC, MainC } from '../styles/CommonStyles'
import { useContext } from 'react'
import { FetchProductsContext } from '../context/FetchProducts'
import { useParams } from 'react-router-dom'
import { UilPlus, UilMinus } from '@iconscout/react-unicons'
import { ShoppingCartItemsContext } from '../context/ShoppingCartItems'

function ProductDescription() {
  const { shoppingCartItems, setShoppingCartItems } = useContext(
    ShoppingCartItemsContext
  )
  const { id } = useParams()
  const { listProducts } = useContext(FetchProductsContext)
  const product = listProducts?.find((item) => item.docId === id)
  const [quantity, setQuantity] = useState(1)
  const add = () => {
    setQuantity((quantity) => quantity + 1)
  }
  const remove = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1)
    }
  }
  const addProduct = () => {
    const productFound = shoppingCartItems.find(
      (item) => item.docId === product.docId
    )
    const newItem = {}
    if (productFound) {
      productFound.quantity = quantity
    }
    shoppingCartItems.map((item) => {
      if (item.uid === product.docId) {
        item.quantity = quantity
      } else {
        console.log('hola')
        newItem = {
          title: product.title,
          description: product.description,
          image: product.images_urls[0],
          price: product.discounted_price,
          uid: product.docId,
          quantity
        }
        setShoppingCartItems((product) => [...product, newItem])
      }
    })
    console.log(shoppingCartItems)
  }
  return (
    <MainC>
      <h2>Información del producto</h2>
      <Content>
        <article>
          <SlideC>
            {product.images_urls?.map((image, index) => (
              <img key={index} src={image} alt='' />
            ))}
          </SlideC>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <div>
            <NumberP>
              <ButtonC onClick={remove}>
                <UilMinus size='20' />
              </ButtonC>
              <span>{quantity}</span>
              <ButtonC onClick={add}>
                <UilPlus size='20' />
              </ButtonC>
            </NumberP>
            <Price>
              {product.discounted_price} <span>{product.normal_price}</span>
            </Price>
          </div>
          <BtnC>
            <Button onClick={addProduct}>Añadir al carro</Button>
          </BtnC>
        </article>
        <DetailsP>
          <header>
            <i className='uil uil-align-justify' />
            <h4>Detalles del producto</h4>
          </header>
          <p>{product.product_details}</p>
        </DetailsP>
      </Content>
    </MainC>
  )
}

export default ProductDescription

const Content = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    h3 {
      width: 100%;
      font-size: ${(props) => props.theme.font_16};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      word-wrap: normal;
    }
    p {
      margin-right: auto;
      font-size: ${(props) => props.theme.font_14};
    }
    p + div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  @media screen and (min-width: 480px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    gap: 2rem;
    align-items: center;
    article {
      gap: 0.75rem;
      h3 {
        font-size: ${(props) => props.theme.font_18};
      }
      p {
        font-size: ${(props) => props.theme.font_16};
      }
    }
    article:first-child {
      width: 85%;
    }
    article:last-child {
      width: 100%;
    }
    width: 85%;
  }
  @media screen and (min-width: 1280px) {
    width: 75%;
    article:first-child {
      width: 80%;
    }
  }
`
const SlideC = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 250px;
  height: 300px;
  display: flex;
  border-radius: 18px;
  overflow: hidden;
  margin-bottom: 0.5rem;
  img {
    width: 0;
    flex-grow: 1;
    object-fit: cover;
    opacity: 0.8;
    transition: 0.5s ease;
    &:hover {
      cursor: pointer;
      width: 200px;
      opacity: 1;
      filter: contrast(110%);
    }
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
  span {
    font-size: ${(props) => props.theme.font_20};
    font-weight: bold;
  }
  @media screen and (min-width: 768px) {
    gap: 1rem;
    height: 34px;
  }
`
const DetailsP = styled.article`
  header {
    width: 100%;
    display: flex;
    gap: 1rem;
    align-items: center;
    color: ${(props) => props.theme.pink_400};
    i {
      font-size: ${(props) => props.theme.font_26};
    }
    h4 {
      font-size: ${(props) => props.theme.font_16};
    }
  }
  p {
    font-size: ${(props) => props.theme.font_14};
  }
  @media screen and (min-width: 768px) {
    header {
      i {
        font-size: ${(props) => props.theme.font_30};
      }
      h4 {
        font-size: ${(props) => props.theme.font_18};
      }
    }
    p {
      font-size: ${(props) => props.theme.font_16};
    }
  }
`
const BtnC = styled.div`
  width: 100%;
  display: flex;
  button {
    margin-top: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    button {
      width: auto;
    }
  }
`
const Price = styled.p`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.theme.font_24} !important;
  align-items: flex-end;
  color: ${(props) => props.theme.pink_400};
  margin-right: 0 !important;
  font-weight: bold;
  span {
    font-weight: 500;
    text-decoration: line-through;
    color: ${(props) => props.theme.gray_400};
    font-size: ${(props) => props.theme.font_16};
  }
  @media screen and (min-width: 768px) {
  }
`
