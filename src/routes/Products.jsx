import React from 'react'
import { MainC, Input } from '../styles/CommonStyles'
import styled from 'styled-components'
import Item from '../components/Item'

function Products() {
  return (
    <MainC>
      <h2>Catálogo de productos</h2>
      <Content>
        <FilterC>
          <InputC>
            <i className='uil uil-search' />
            <Input placeholder='Buscar por nombre' />
          </InputC>
          <FilterBtn>
            <i className='uil uil-filter' />
          </FilterBtn>
        </FilterC>
        <section>
          <Title>
            <i className='uil uil-rocket' />
            Mas Recientes
          </Title>
          <ListProducts>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
          </ListProducts>
        </section>
        <section>
          <Title>
            <i className='uil uil-book-open' />
            Todos los productos
          </Title>
          <ListProducts>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
            <li>
              <Item />
            </li>
          </ListProducts>
        </section>
      </Content>
    </MainC>
  )
}

export default Products

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  & > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  @media screen and (min-width: 768px) {
    gap: 1.5rem;
    width: 90%;
    margin: 0 auto;
    & > section {
      gap: 2rem;
    }
  }
`

const FilterC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media screen and (min-width: 768px) {
  }
`
const FilterBtn = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  border-radius: 50%;
  cursor: pointer;
  i {
    font-size: 1.5rem;
    &:hover {
      color: ${(props) => props.theme.pink_500};
    }
  }
  @media screen and (min-width: 768px) {
    width: 2.75rem;
    height: 2.75rem;
    i {
      font-size: 1.6rem;
    }
  }
`
const InputC = styled.div`
  position: relative;
  width: 100%;
  i {
    top: 50%;
    left: 1rem;
    position: absolute;
    font-size: 1.125rem;
    transform: translate(0, -50%);
    color: ${(props) => props.theme.gray_400};
  }
  input {
    width: 100%;
    font-size: ${(props) => props.theme.font_16};
    padding: 0.5rem 1rem 0.5rem 2.5rem;
  }
  @media screen and (min-width: 480px) {
    width: 60%;
  }
  @media screen and (min-width: 768px) {
    i {
      left: 1.5rem;
      font-size: 1.3rem;
    }
    input {
      font-size: ${(props) => props.theme.font_18};
      padding: 0.75rem 1.5rem 0.75rem 3.125rem;
    }
  }
`
const ListProducts = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 400px));
  justify-content: center;
  gap: 1.5rem;
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.font_18};
  color: ${(props) => props.theme.black};
  i {
    font-size: 1.7rem;
    color: ${(props) => props.theme.pink_400};
  }
  @media screen and (min-width: 768px) {
    gap: 0.75rem;
    font-size: ${(props) => props.theme.font_20};
    i {
      font-size: 1.9rem;
    }
  }
`
