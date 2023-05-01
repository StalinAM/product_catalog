import React from 'react'
import styled from 'styled-components'
import { Back, Button, ButtonC, Header, MainC } from '../styles/CommonStyles'
import img1 from '../assets/1.webp'
import img2 from '../assets/2.webp'
import img3 from '../assets/3.webp'
import img4 from '../assets/4.webp'

function ProductDescription() {
  return (
    <MainC>
      <Header>
        <Back>
          <i className='uil uil-angle-left' />
        </Back>
        <h2>Información del producto</h2>
      </Header>
      <Content>
        <article>
          <SlideC>
            <img src={img1} alt='' />
            <img src={img2} alt='' />
            <img src={img3} alt='' />
            <img src={img4} alt='' />
          </SlideC>
          <h3>Camiseta calabera</h3>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <div>
            <NumberP>
              <ButtonC>
                <i className='uil uil-minus' />
              </ButtonC>
              <span>1</span>
              <ButtonC>
                <i className='uil uil-plus' />
              </ButtonC>
            </NumberP>
            <Price>
              $20 <span>$19.99</span>
            </Price>
          </div>
          <BtnC>
            <Button>Añadir al carro</Button>
          </BtnC>
        </article>
        <DetailsP>
          <header>
            <i className='uil uil-align-justify' />
            <h4>Detalles del producto</h4>
          </header>
          <p>
            ¡Destaca entre la multitud con esta camiseta negra con estampado de
            un cráneo de calavera! Esta prenda de alta calidad es perfecta para
            aquellos que buscan un estilo único y atrevido. <br />
            <br />
            El cráneo de calavera impreso en la camiseta es un diseño
            impresionante que sin duda llamará la atención. Además, la camiseta
            está hecha de materiales de alta calidad que garantizan una gran
            durabilidad y comodidad, lo que la convierte en una excelente opción
            para el uso diario. <br />
            <br />
            Ya sea para un concierto, una fiesta o simplemente para destacar en
            la calle, esta camiseta es la elección perfecta para aquellos que
            buscan algo diferente.
            <br />
            <br />
            ¡Haz una declaración de moda con esta camiseta negra con estampado
            de un cráneo de calavera hoy mismo!
          </p>
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
  gap: 0.5rem;
  background-color: ${(props) => props.theme.white};
  @media screen and (min-width: 768px) {
    gap: 0.75rem;
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
  color: ${(props) => props.theme.black};
  font-weight: bold;
  span {
    font-weight: 500;
    text-decoration: line-through;
    color: ${(props) => props.theme.gray_400};
    font-size: ${(props) => props.theme.font_16};
  }
  @media screen and (min-width: 768px) {
    font-size: ${(props) => props.theme.font_28} !important;
    span {
      font-size: ${(props) => props.theme.font_20};
    }
  }
`
