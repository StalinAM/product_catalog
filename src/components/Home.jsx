import React from 'react'
import styled from 'styled-components'
import { Button } from '../styles/CommonStyles'
import homeImg from '../assets/home.svg'

function Home() {
  return (
    <Container>
      <Content>
        <img src={homeImg} alt='' />
        <div>
          <h2>Danik's</h2>
          <p>
            ¡Bienvenidos a nuestra tienda en línea! Encuentra todo para tu hogar
            y cuidado personal: cocina, baño, maquillaje y más!
          </p>
          <Button>Catálogo</Button>
        </div>
      </Content>
    </Container>
  )
}

export default Home

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 1rem 4rem 1rem;
  min-height: 100vh;
  @media screen and (min-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem 4rem;
    min-height: calc(100vh - 120px);
  }
  @media screen and (min-width: 1080px) {
    padding: 1.5rem 8rem;
  }
`
const Content = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      width: fit-content;
    }
  }
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    img,
    div {
      width: calc(50% - 1rem);
      font-size: ${(props) => props.theme.font_20};
      p {
        max-width: 45ch;
      }
    }
  }
`
