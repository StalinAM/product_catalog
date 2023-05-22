import React, { createContext, useEffect, useState } from 'react'

export const ShoppingCartItemsContext = createContext()

function ShoppingCartItems({ children }) {
  const [shoppingCartItems, setShoppingCartItems] = useState([])
  const [numItem, setNumItem] = useState(0)
  useEffect(() => {
    setNumItem(0)
    shoppingCartItems.map((item) =>
      setNumItem((prevState) => prevState + item.quantity)
    )
  }, [shoppingCartItems])

  return (
    <ShoppingCartItemsContext.Provider
      value={{ shoppingCartItems, setShoppingCartItems, numItem }}
    >
      {children}
    </ShoppingCartItemsContext.Provider>
  )
}

export default ShoppingCartItems
