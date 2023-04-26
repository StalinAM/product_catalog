import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Menu from './components/Menu'
import { light } from './styles/Theme'
import Login from './components/Login'

function App() {
  return (
    <>
      <GlobalStyles theme={light} />
      <ThemeProvider theme={light}>
        <Menu />
        <Login />
      </ThemeProvider>
    </>
  )
}

export default App
