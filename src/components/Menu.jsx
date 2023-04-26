import React from 'react'
import styled from 'styled-components'

function Menu() {
  const DATA = [
    { id: 1, link: '#', title: 'Home', icon: 'uil uil-estate' },
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
      <Content>
        <ul>
          {DATA.map((item) => (
            <Item key={item.id}>
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
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  border-radius: 18px 18px 0 0;
  background-color: ${(props) => props.theme.white};
  padding: 0 2rem;
  z-index: 10;
`
const Content = styled.nav`
  width: 100%;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1rem;
  }
`
const Item = styled.li`
  width: auto;
  position: relative;
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
`
