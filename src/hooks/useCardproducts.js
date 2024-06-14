import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

export const useCardproducts = () => {
  const { userInfo } = useContext(AppContext)
  const [getProduct, setGetProduct] = useState([])

  const getProducts = async () => {
    const endPointProdcut = 'http://127.0.0.1:8000/products/query'
    const fetchProdut = await fetch(endPointProdcut, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const resultFecthProduct = await fetchProdut.json()
    setGetProduct(resultFecthProduct)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const deleteProdutct = async (id) => {
    const endPointProdcut = `http://127.0.0.1:8000/products/delete/${id}`
    await fetch(endPointProdcut, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    getProducts()
  }
  return {
    userInfo,
    getProduct,
    setGetProduct,
    getProducts,
    deleteProdutct,
  }
}
