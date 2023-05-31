import React, { useContext, useEffect, useState } from 'react'
import { MainC, Input } from '../styles/CommonStyles'
import styled from 'styled-components'
import { AuthContext } from '../context/Auth'
import { useNavigate } from 'react-router-dom'
import FilterModal from '../components/FilterModal'
import {
  UilFilePlus,
  UilFilter,
  UilRocket,
  UilBookOpen
} from '@iconscout/react-unicons'
import ListProducts from '../components/ListProducts'
import { EditProductConext } from '../context/EditProduct'
import { FetchProductsContext } from '../context/FetchProducts'

function Products() {
  const navigate = useNavigate()
  const { currentUser } = useContext(AuthContext)
  const { setSubmitActive, setProduct } = useContext(EditProductConext)
  const [active, setActive] = useState(false)
  const { listProducts } = useContext(FetchProductsContext)
  const createProduct = async () => {
    setProduct({
      title: '',
      description: '',
      category: '',
      discounted_price: 0,
      normal_price: 0,
      product_details: '',
      images_urls: ''
    })
    setSubmitActive(false)
    navigate('/new-product')
  }
  const [wordFilter, setWordFilter] = useState('')
  const [listFilter, setListFilter] = useState([])

  useEffect(() => {
    const filteredList = listProducts.filter((item) =>
      item.title.toLowerCase().includes(wordFilter.toLowerCase())
    )

    setListFilter(filteredList)
  }, [wordFilter, listProducts])
  const handleChange = (event) => {
    setWordFilter(event.target.value)
  }
  return (
    <MainC>
      <h2>Catálogo de productos</h2>
      <Content>
        <FilterC>
          <InputC>
            <i className='uil uil-search' />
            <Input placeholder='Buscar por nombre' onChange={handleChange} />
          </InputC>
          {currentUser ? (
            <FilterBtn onClick={createProduct}>
              <UilFilePlus size='28' />
            </FilterBtn>
          ) : (
            <FilterBtn onClick={() => setActive(true)}>
              <UilFilter size='24' />
            </FilterBtn>
          )}
        </FilterC>
        <section>
          <Title>
            <UilRocket size='28' />
            Mas Recientes
          </Title>
          <ListProducts
            listProducts={wordFilter != '' ? listFilter : listProducts}
          />
        </section>
        <section>
          <Title>
            <UilBookOpen size='28' />
            Todos los productos
          </Title>
          <ListProducts listProducts={listFilter} />
        </section>
      </Content>
      {active && (
        <FilterModal listProducts={listProducts} setActive={setActive} />
      )}
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
      gap: 1.5rem;
    }
  }
`

const FilterC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
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
  svg {
    fill: ${(props) => props.theme.pink_400};
  }
  &:hover {
    background-color: ${(props) => props.theme.pink_400};
  }
  &:hover svg {
    fill: ${(props) => props.theme.white};
  }
  @media screen and (min-width: 768px) {
    width: 2.75rem;
    height: 2.75rem;
    svg {
      width: 30px;
      height: 30px;
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
const Title = styled.h3`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => props.theme.font_18};
  color: ${(props) => props.theme.black};
  svg {
    fill: ${(props) => props.theme.pink_400};
  }
  @media screen and (min-width: 768px) {
    gap: 0.75rem;
    font-size: ${(props) => props.theme.font_20};
    svg {
      width: 30px;
      height: 30px;
    }
  }
`
