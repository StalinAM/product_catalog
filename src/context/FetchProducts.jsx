import React, { createContext, useEffect, useState } from 'react'
import { fetchProducts } from '../firebase/services'

export const FetchProductsContext = createContext()

function FetchProducts({ children }) {
  const [listProducts, setListProducts] = useState([])

  const getProducts = async () => {
    const asyncProducts = await fetchProducts()
    setListProducts([...asyncProducts])
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <FetchProductsContext.Provider value={{ listProducts }}>
      {children}
    </FetchProductsContext.Provider>
  )
}

export default FetchProducts
