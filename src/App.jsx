import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Menu from './components/Menu'
import { light } from './styles/Theme'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Login from './routes/Login'
import NewProduct from './routes/NewProduct'
import ProductDescription from './routes/ProductDescription'
import ShoppingCart from './routes/ShoppingCart'
import Products from './routes/Products'
import { useState } from 'react'

function App() {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    category: '',
    discounted_price: 0,
    normal_price: 0,
    product_details: '',
    images_urls: ''
  })
  return (
    <>
      <GlobalStyles theme={light} />
      <ThemeProvider theme={light}>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route
            path='new-product'
            element={<NewProduct product={product} setProduct={setProduct} />}
          />
          <Route path='shopping-cart' element={<ShoppingCart />} />
          <Route
            path='catalog'
            element={<Products product={product} setProduct={product} />}
          />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
