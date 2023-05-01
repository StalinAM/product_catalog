import React from 'react'
import styled from 'styled-components'
import img1 from '../assets/1.webp'
import img2 from '../assets/product.jpg'

function Item() {
  return (
    <Container>
      <picture>
        <img src={img1} alt='' />
      </picture>
      <Content>
        <h4>Camiseta calabera</h4>
        <p>Camiseta de algodon negra con estampado de craneo </p>
        <PriceC>
          <button>
            <i className='uil uil-pen' />
          </button>
          <span>
            $30.99<span>$19.99</span>
          </span>
        </PriceC>
      </Content>
    </Container>
  )
}

export default Item

const Container = styled.article`
  position: relative;
  height: 370px;
  display: flex;
  justify-content: center;
  padding: 0 0.5rem;
  picture {
    width: 70%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 18px;
    overflow: hidden;
    border: 4px solid ${(props) => props.theme.gray_300};
  }
  @media screen and (min-width: 375px) {
    height: 400px;
    padding: 0;
  }
  @media screen and (min-width: 768px) {
    height: 440px;
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
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${(props) => props.theme.gray_300};
    i {
      font-size: 1.7rem;
      color: ${(props) => props.theme.pink_400};
      &:hover {
        color: ${(props) => props.theme.pink_500};
      }
    }
  }
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
