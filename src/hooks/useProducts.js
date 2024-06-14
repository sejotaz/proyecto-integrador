import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const useProducts =({id})=>{
  const navigate = useNavigate()

  const [filterProduct, setFilterProduct] = useState(null)

  const getProduct = async () => {
    const response = await fetch(`http://127.0.0.1:8000/products/query/${id}`)
    const dataProduct = await response.json()
    setFilterProduct(dataProduct)
  }

  useEffect(() => {
    id !=="create" && getProduct()
  }, [id])


  const initialValues = {
    id:"" ,
    img:"" ,
    price:0 ,
    name_product:"",
    quantity:"",
  }
  const [products, setProducts] = useState(initialValues)
  useEffect(() => {
    if (filterProduct) {
      setProducts({
        id: filterProduct.id || '',
        img: filterProduct.img || '',
        price: filterProduct.price || 0,
        name_product: filterProduct.name_product || '',
        quantity: filterProduct.quantity || 0,
      })
    }
  }, [filterProduct])


  const handleChange = (e) => {
    const { name, value } = e.target
    setProducts((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }))
  }

  const createProduct = async()=>{
    const dataProdut = JSON.stringify(products)

    try {
      const response = await fetch('http://127.0.0.1:8000/products/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: dataProdut,
      })

      const dataResponse = await response.json()
      navigate('/')
    } catch (e) {
      console.log('ERROR', e)
    }  
  }

const updateProduct = async()=>{
  const dataProdut = JSON.stringify(products)
  try {
    const response = await fetch(`http://127.0.0.1:8000/products/update/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: dataProdut,
    })
    const dataResponse = await response.json()
    navigate('/')
  } catch (e) {
    console.log('ERROR', e)
  } 
}

  const handleSubmitProduct = async (e) => {
    e.preventDefault()
    filterProduct?.id?updateProduct():createProduct()
  }

  return{
    products,
    handleChange,
    filterProduct,
    handleSubmitProduct
  }
}