import React from 'react'
import styled from 'styled-components'

function Menu() {
  const DATA = [
    { id: 1, link: '#', title: 'Inicio', icon: 'uil uil-estate' },
    {
      id: 2,
      link: '#about',
      title: 'Catálogo',
      icon: 'uil uil-clipboard-notes'
    },
    { id: 3, link: '#skills', title: 'Carro', icon: 'uil uil-shopping-bag' },
    { id: 4, link: '#portfolio', title: 'Admin', icon: 'uil uil-user' }
  ]
  return (
    <Container>
      <h1>DS</h1>
      <Content>
        <ul>
          {DATA.map((item) => (
            <Item key={item.id}>
              {item.id === 3 && <NumProduct>5</NumProduct>}
              <Icon className={`uil uil-${item.icon}`} />
            </Item>
          ))}
        </ul>
      </Content>
    </Container>
  )
}

export default Menu

const Container = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-radius: 18px 18px 0 0;
  background-color: ${(props) => props.theme.white};
  padding: 0 2rem;
  z-index: 10;
  h1 {
    display: none;
  }
  @media screen and (min-width: 768px) {
    padding: 3rem 4rem;
    position: relative;
    justify-content: space-between;
    h1 {
      font-size: 3rem;
      display: block;
    }
  }
`
const Content = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    width: auto;
    ul {
      justify-content: flex-end;
      gap: 2rem;
    }
  }
`
const Item = styled.li`
  width: auto;
  position: relative;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    height: 3px;
    background-color: ${(props) => props.theme.pink_400};
    bottom: 2px;
    transition: 0.3s;
    border-radius: 2px;
    width: 0%;
  }
  &:hover::before {
    width: 100%;
  }
`
const Icon = styled.i`
  font-size: 1.75rem;
  color: ${(props) => props.theme.gray_500};
  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme.black}
  }
`
const NumProduct = styled.span`
  position: absolute;
  right: -6px;
  top: 3px;
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${(props) => props.theme.pink_500};
  border-radius: 50%;
  font-weight: bold;
  font-size: 14px;
  color: ${(props) => props.theme.white};
  text-align: center;
`
