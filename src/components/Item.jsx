import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { UilPen, UilTrashAlt } from '@iconscout/react-unicons'

function Item({ title, description, discountedPrice, normalPrice, image }) {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  return (
    <Container>
      <picture>
        <img src={image} alt='' />
      </picture>
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
        <PriceC>
          {currentUser && (
            <ButtonsC>
              <button onClick={() => navigate('/new-product')}>
                <UilPen size='24' />
              </button>
              <button onClick={() => navigate('/new-product')}>
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
  position: relative;
  height: 450px;
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
  picture {
    width: 70%;
    position: absolute;
    bottom: 170px;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 18px;
    overflow: hidden;
    border: 4px solid ${(props) => props.theme.gray_300};
  }
  @media screen and (min-width: 768px) {
    picture {
      bottom: 160px;
    }
  }
`
const Content = styled.section`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 4rem 1rem 1rem;
  border-radius: 18px;
  background-color: ${(props) => props.theme.white};
  h4 {
    text-transform: capitalize;
    font-weight: 500;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-wrap: normal;
    font-size: ${(props) => props.theme.font_16};
  }
  p {
    text-transform: capitalize;
    font-weight: 400;
    color: ${(props) => props.theme.gray_400};
    font-size: ${(props) => props.theme.font_14};
  }

  @media screen and (min-width: 768px) {
    h4 {
      font-size: ${(props) => props.theme.font_18};
    }
    p {
      font-size: ${(props) => props.theme.font_16};
    }
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
  @media screen and (min-width: 768px) {
    span {
      font-size: ${(props) => props.theme.font_22};
    }
    span > span {
      font-size: ${(props) => props.theme.font_16};
    }
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
    width: 2.5rem;
    height: 2.5rem;
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
