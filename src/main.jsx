import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Auth from './context/Auth'
import FetchProducts from './context/FetchProducts'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth>
      <FetchProducts>
        <App />
      </FetchProducts>
    </Auth>
  </BrowserRouter>
)
