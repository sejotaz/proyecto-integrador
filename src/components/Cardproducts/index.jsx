import { useEffect, useState } from 'react'

function Cardproducts() {
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

  return (
    <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {getProduct.map((products, key) => {
        return (
          <div
            key={key}
            className='bg-white  dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'
          >
            <a href='#'>
              <img
                src={`${products?.img}`}
                alt='Cozy Sweater'
                width='400'
                height='400'
                className='w-full h-48 object-cover'
                style={{ aspectRatio: '400/400', objectFit: 'cover', objectPosition:'center' }}
              />
              <div className='p-6'>
                <h3 className='font-bold text-lg'>{products.name_product}</h3>
                <p className='text-gray-500 dark:text-gray-400'>{`$${products.price}`}</p>
              </div>
            </a>
           
          </div>
        )
      })}
    </div>
  )
}

export default Cardproducts
