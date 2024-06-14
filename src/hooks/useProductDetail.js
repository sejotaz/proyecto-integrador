import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const useProductDetail = ()=>{

  const { idProduct } = useParams()
  const navigation = useNavigate()
  const [filterProduct, setFilterProduct] = useState(null)
  const getProduct = async () => {
    const response = await fetch(
      `http://127.0.0.1:8000/products/query/${idProduct}`
    )
    const dataProduct = await response.json()
    setFilterProduct(dataProduct)
  }


  useEffect(() => {
    idProduct !== 'create' && getProduct()
  }, [idProduct])

  return{
    filterProduct,
    navigation
  }
}