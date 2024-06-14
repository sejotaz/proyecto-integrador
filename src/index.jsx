import { Route, Router, Routes } from 'react-router-dom'
import { MainContainer } from './containers/MainContainer'
import Products from './products'
import ProductDetail from './product-detail'
import Login from './login'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import { AppProvider } from './context/AppContext'

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainContainer />} />
          <Route path='/products/:id' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/product-detail/:idProduct'
            element={<ProductDetail />}
          />
        </Route>
      </Routes>
    </AppProvider>
  )
}

export default App
