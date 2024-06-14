import { useContext, useEffect, useState } from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { GoPencil } from 'react-icons/go'
import { Link } from 'react-router-dom'
import imgae from '/public/undraw_to_the_moon_re_q21i.svg'
import { AppContext } from '../../context/AppContext'
import { useCardproducts } from '../../hooks/useCardproducts'
function Cardproducts() {

 const  {
  userInfo,
  getProduct,
  deleteProdutct
}=useCardproducts()

  return (
    <div>
      {getProduct.length === 0 ? (
        <div>
          <div className='text-white text-center font-bold text-2xl p-4'>No hay productos</div>
          <div className='flex w-full p-4 font-bold text-xl text-white justify-center'>
          <img src={imgae} />
        </div>
        </div>
      ) : (
        <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
          {getProduct.map((product, key) => {
            return (
                <div key={key} className='bg-white  dark:bg-[#1A202C]  rounded-lg shadow-lg overflow-hidden'>
                  {userInfo&&(
                    <div className='relative flex '>
                    <div className='absolute   right-3 p-2 flex gap-4'>
                      <Link to={`/products/${product?.id}`}>
                        <div className='w-[30px] flex justify-center items-center h-[30px] bg-[#EEEEEE] border rounded-md'>
                          <GoPencil size={20} color='1B80BA' />
                        </div>
                      </Link>

                      <div
                        className='w-[30px] flex justify-center items-center h-[30px] bg-red-200 border rounded-md'
                        onClick={() => deleteProdutct(product.id)}
                      >
                        <FaRegTrashAlt
                          cursor='pointer'
                          size={17}
                          color='B20202'
                        />
                      </div>
                    </div>
                  </div>
                  )
                    

                  }
                  <img
                    src={`${product?.img}`}
                    alt='Cozy Sweater'
                    width='400'
                    height='400'
                    className='w-full h-48 object-cover'
                    style={{
                      aspectRatio: '400/400',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                  <div className='p-6'>
                    <h3 className='font-bold text-white text-lg'>
                      {product?.name_product}
                    </h3>
                    <p className='text-gray-500 dark:text-gray-400'>{`$${product?.price}`}</p>
                  </div>
                  <div className='border-2 w-[150px] text-lg rounded-md flex mx-auto  justify-center'>
                    <Link key={key} to={`/product-detail/${product.id}`}>
                      Ver mas
                    </Link>
                  </div>
                </div>
             
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Cardproducts
