import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FetchProductsContext } from '../context/FetchProducts'
import Item from './Item'

function ListProducts() {
  const { listProducts } = useContext(FetchProductsContext)
  const navigate = useNavigate()
  function handleClick(id) {
    navigate(`/catalog/${id}`)
  }
  return (
    <Container>
      {listProducts &&
        listProducts.map((item) => (
          <li
            key={item.docId}
            onClick={() => handleClick(item.docId)}
          >
            <Item
              title={item.title}
              description={item.description}
              discountedPrice={item.discounted_price}
              normalPrice={item.normal_price}
              image={item.images_urls}
              docId={item.docId}
              productDetails={item.product_details}
              category={item.category}
            />
          </li>
        ))}
    </Container>
  )
}

export default ListProducts

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 275px));
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1.5rem;
  li:hover {
    box-shadow: 0px 0px 0px 4px ${(props) => props.theme.pink_400};
    border-radius: 18px;
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
