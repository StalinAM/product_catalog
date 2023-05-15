import React, { useContext } from 'react'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { UilPen, UilTrashAlt } from '@iconscout/react-unicons'
import { deleteProduct, editProduct } from '../firebase/services'
import { FetchProductsContext } from '../context/FetchProducts'
import { EditProductConext } from '../context/EditProduct'
import { useNavigate } from 'react-router-dom'

function Item({
  title,
  description,
  discountedPrice,
  normalPrice,
  image,
  productDetails,
  category,
  docId
}) {
  const { getProducts } = useContext(FetchProductsContext)
  const { currentUser } = useContext(AuthContext)
  const { setSubmitActive, setProduct, product } = useContext(EditProductConext)
  const navigate = useNavigate()

  const updateProduct = async () => {
    setProduct({
      title,
      description,
      category,
      discounted_price: discountedPrice,
      normal_price: normalPrice,
      product_details: productDetails,
      images_urls: image,
      docId
    })
    setSubmitActive(true)
    navigate('/new-product')
  }
  const removeProduct = async () => {
    await deleteProduct(docId)
    getProducts()
  }
  return (
    <Container>
      <picture>
        <img src={image[0]} alt='' />
      </picture>
      <Content>
        <Text>
          <h4>{title}</h4>
          <p>{description}</p>
        </Text>
        <PriceC>
          {currentUser && (
            <ButtonsC>
              <button onClick={updateProduct}>
                <UilPen size='24' />
              </button>
              <button onClick={removeProduct}>
                <UilTrashAlt size='24' />
              </button>
            </ButtonsC>
          )}
          <span>
            ${discountedPrice}
            <span>${normalPrice}</span>
          </span>
        </PriceC>
      </Content>
    </Container>
  )
}

export default Item

const Container = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  border-radius: 18px;
  overflow: hidden;
  height: 100%;
  picture {
    width: 100%;
    padding: 1rem;
    img {
      border-radius: 18px;
    }
  }
`
const Content = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem 1rem;
  border-radius: 18px;
  justify-content: space-between;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  h4 {
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
`
const PriceC = styled.div`
  width: 100%;
  display: flex;
  span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: auto;
    font-weight: bold;
    font-size: ${(props) => props.theme.font_18};
    color: ${(props) => props.theme.pink_400};
  }
  span > span {
    text-decoration: line-through;
    color: ${(props) => props.theme.gray_400};
    display: block;
    font-weight: 400;
    font-size: ${(props) => props.theme.font_14};
  }
`
const ButtonsC = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.125rem;
    height: 2.125rem;
    background-color: ${(props) => props.theme.gray_300};
    svg {
      fill: ${(props) => props.theme.pink_400};
    }
    &:hover {
      background-color: ${(props) => props.theme.pink_400};
    }
    &:hover svg {
      fill: ${(props) => props.theme.white};
    }
  }
`
