import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Menu from './components/Menu'
import { light } from './styles/Theme'
import Login from './components/Login'
import NewProduct from './components/NewProduct'
import ShoppingCart from './components/ShoppingCart'
import ProductDescription from './components/ProductDescription'
import FilterModal from './components/FilterModal'
import PaymentTypeModal from './components/PaymentTypeModal'
import Products from './components/Products'
import Home from './components/Home'

function App() {
  return (
    <>
      <GlobalStyles theme={light} />
      <ThemeProvider theme={light}>
        <Menu />
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
