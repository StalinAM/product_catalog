import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Menu() {
  const DATA = [
    { id: 1, link: '/', title: 'Inicio', icon: 'uil uil-estate' },
    {
      id: 2,
      link: '/catalog',
      title: 'Catálogo',
      icon: 'uil uil-diary'
    },
    {
      id: 3,
      link: '/shopping-cart',
      title: 'Carro',
      icon: 'uil uil-shopping-bag'
    },
    { id: 4, link: '/login', title: 'Admin', icon: 'uil uil-user' }
  ]
  return (
    <Container>
      <Content>
        <h1>DS</h1>
        <ul>
          {DATA.map((item) => (
            <Item key={item.id}>
              <Link to={item.link}>
                <Text>{item.title}</Text>
                {item.id === 3 && <NumProduct>5</NumProduct>}
                <Icon className={`uil uil-${item.icon}`} />
              </Link>
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
    height: auto;
    padding: 1.5rem 4rem;
    position: relative;
    h1 {
      font-size: 3rem;
      display: block;
    }
  }
  @media screen and (min-width: 1080px) {
    padding: 1.5rem 8rem;
  }
`
const Content = styled.nav`
  display: flex;
  width: 100%;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
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
  @media screen and (min-width: 768px) {
    &::before {
      height: 4px;
      bottom: -2px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      i {
        display: none;
      }
    }
    &:nth-child(3),
    &:nth-child(4) {
      p {
        display: none;
      }
    }
  }
`
const Text = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    font-size: ${(props) => props.theme.font_18};
    font-weight: 500;
    color: ${(props) => props.theme.black};
  }
`
const Icon = styled.i`
  font-size: 1.75rem;
  color: ${(props) => props.theme.gray_500};
  @media screen and (min-width: 768px) {
    color: ${(props) => props.theme.black};
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
