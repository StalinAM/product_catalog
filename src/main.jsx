import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Auth from './context/Auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth>
      <App />
    </Auth>
  </BrowserRouter>
)
