import React, { useContext } from 'react'
import styled from 'styled-components'
import { FetchProductsContext } from '../context/FetchProducts'
import Item from './Item'

function ListProducts() {
  const { listProducts } = useContext(FetchProductsContext)
  return (
    <Container>
      {listProducts &&
        listProducts.map((item) => (
          <li key={item.images_urls[0]}>
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
  @media screen and (min-width: 768px) {
    gap: 2rem;
  }
`
