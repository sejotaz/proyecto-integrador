import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from '.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './login'
import Products from './products'

 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        {/*<Route path='/product-details/:idProduct' element={<Auth/>} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
