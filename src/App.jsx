import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Menu from './components/Menu'
import { light } from './styles/Theme'
import Login from './components/Login'
import NewProduct from './components/NewProduct'
import ShoppingCart from './components/ShoppingCart'
import ProductDescription from './components/ProductDescription'

function App() {
  return (
    <>
      <GlobalStyles theme={light} />
      <ThemeProvider theme={light}>
        <Menu />
        <ProductDescription />
      </ThemeProvider>
    </>
  )
}

export default App
