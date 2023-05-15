import React, { createContext, useState } from 'react'

export const ShoppingCartItemsContext = createContext()

function ShoppingCartItems({ children }) {
  const [shoppingCartItems, setShoppingCartItems] = useState([])
  return (
    <ShoppingCartItemsContext.Provider
      value={{ shoppingCartItems, setShoppingCartItems }}
    >
      {children}
    </ShoppingCartItemsContext.Provider>
  )
}

export default ShoppingCartItems
