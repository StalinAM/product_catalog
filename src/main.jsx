import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Auth from './context/Auth'
import EditProduct from './context/EditProduct'
import FetchProducts from './context/FetchProducts'
import ShoppingCartItems from './context/ShoppingCartItems'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth>
      <FetchProducts>
        <EditProduct>
          <ShoppingCartItems>
            <App />
          </ShoppingCartItems>
        </EditProduct>
      </FetchProducts>
    </Auth>
  </BrowserRouter>
)
