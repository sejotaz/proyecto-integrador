import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetail } from '../hooks/useProductDetail'

function ProductDetail() {
  const { filterProduct, navigation } = useProductDetail()

  const [validateGif, setValidateGif] = useState(false)
  const [textValidate, setTextValidate] = useState(false)
  const addBuy = () => {
    setValidateGif(true)
    setTextValidate(true)
    setTimeout(() => {
      setValidateGif(false)
    }, 2900)
 
  }

  return (
    <div className='text-white   h-[calc(100vh-72px)]'>
      {validateGif ? (
        <div className='absolute right-[400px]  top-[100px]'>
          <iframe
            style={{ pointerEvents: 'none' }}
            src='https://giphy.com/embed/NQ23lFzPwx6VuztnZN'
            width={700}
            height={600}
          ></iframe>
        </div>
      ) : (
        <>
          <div className='  font-bold  text-center p-4'> PRODUCT DETAIL</div>
          <div className='   flex w-full justify-center'>
            <div className='border w-[750px]  bg-[#1A202C]  shadow-2xl rounded-lg   items-center    grid md:grid-cols-2  gap-6 bg- lg:gap-12    px-4   py-6'>
              <div className='grid gap-4 md:gap-10 '>
                <img
                  width='350'
                  height='200'
                  src={filterProduct?.img}
                  alt='Product Image'
                  className=' rounded-lg  overflow-hidden  '
                />
              </div>
              <div className='grid gap-4 md:gap-10 items-start'>
                <div className='grid gap-4'>
                  <h1 className='font-bold text-3xl lg:text-4xl'>
                    {filterProduct?.name_product}
                  </h1>
                  <h1 className='text-xl lg:text-1xl'>
                    {`$${filterProduct?.price}`}{' '}
                  </h1>
                  <div className='flex gap-4'>
                    <button onClick={addBuy} className='bg-black ronded rounded-lg  h-[40px] w-[100px]'>
                    {textValidate?"BUYED":"BUY" }
                    </button>
                    <button
                      className='border ronded rounded-lg  h-[40px] w-[100px]'
                      onClick={() => navigation('/')}
                    >
                       
                 Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductDetail
