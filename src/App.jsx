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

function App() {
  return (
    <>
      <GlobalStyles theme={light} />
      <ThemeProvider theme={light}>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='new-product' element={<NewProduct />} />
          <Route path='shopping-cart' element={<ShoppingCart />} />
          <Route path='catalog' element={<Products />} />
          <Route path='/catalog/:id' element={<ProductDescription />} />
        </Routes>
      </ThemeProvider>
    </>
  )
}

export default App
