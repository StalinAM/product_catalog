import React, { createContext, useEffect, useMemo, useState } from 'react'
import { fetchProducts } from '../firebase/services'

export const FetchProductsContext = createContext()

function FetchProducts({ children }) {
  const [listProducts, setListProducts] = useState([])
  const [wordFilter, setWordFilter] = useState(null)
  const [category, setCategory] = useState(null)

  const getProducts = async () => {
    const asyncProducts = await fetchProducts()
    setListProducts([...asyncProducts])
  }

  useEffect(() => {
    getProducts()
    setCategory(null)
    setWordFilter(null)
  }, [])

  const filteredList = useMemo(() => {
    if (wordFilter) {
      return listProducts.filter((item) =>
        item.title.toLowerCase().includes(wordFilter.toLowerCase())
      )
    }
    if (category) {
      return category !== 'todos'
        ? listProducts.filter((item) =>
            item.category.toLowerCase().includes(category.toLowerCase())
          )
        : listProducts
    }
    return listProducts.map((item) => item)
  })
  return (
    <FetchProductsContext.Provider
      value={{
        listProductsOrigin: listProducts,
        listProducts: filteredList,
        getProducts,
        setCategory,
        setWordFilter
      }}
    >
      {children}
    </FetchProductsContext.Provider>
  )
}

export default FetchProducts
