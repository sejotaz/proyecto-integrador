import React, { useContext, useEffect, useState } from 'react'
import { Router, useLocation, useNavigate, useParams, useRoutes, useSearchParams } from 'react-router-dom'
import { useProducts } from '../hooks/useProducts'
import { AppContext } from '../context/AppContext'

function Products() {
  const { id } = useParams()
  const { userInfo } = useContext(AppContext)
 
  const navigate = useNavigate()
 
  const { products, handleChange, filterProduct, handleSubmitProduct } =useProducts({ id })
useEffect(() => {
 if (!userInfo) {
    navigate('/')
  }
}, [userInfo]);

  return (
    <div className='flex justify-center items-center     flex-col h-[calc(100vh-72px)]  w-screen'>
      <div className='flex w-11/12 md:w-1/2 lg:w-1/3 items-center justify-center border border-gray-300 rounded-xl bg-white p-8 shadow-lg'>
        <form className='w-full space-y-6' onSubmit={handleSubmitProduct}>
          <h1 className='text-3xl text-gray-800 font-bold mb-6 text-center'>
            Crear Producto
          </h1>

          <div className='flex flex-col space-y-2'>
            <label htmlFor='img' className='text-md text-gray-700 font-medium'>
              Imagen del producto
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-gray-300 text-black bg-gray-50 px-3 py-2 text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
              type='text'
              name='img'
              value={products.img}
              onChange={handleChange}
              placeholder='URL de la imagen'
            />
          </div>

          <div className='flex flex-col space-y-2'>
            <label
              htmlFor='name_product'
              className='text-md text-gray-700 font-medium'
            >
              Nombre del producto
            </label>
            <input
              className='flex h-10 w-full rounded-md border border-gray-300 text-black bg-gray-50 px-3 py-2 text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
              type='text'
              name='name_product'
              value={products.name_product}
              onChange={handleChange}
              placeholder='Trompeta'
            />
          </div>

          <div className='flex justify-between gap-4'>
            <div className='flex w-full flex-col space-y-2'>
              <label className='text-md font-medium text-gray-700'>
                Precio del producto
              </label>
              <input
                className='flex h-10 w-full rounded-md border border-gray-300 text-black bg-gray-50 px-3 py-2 text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
                type='text'
                name='price'
                value={products.price}
                onChange={handleChange}
                placeholder='12000'
              />
            </div>
            <div className='flex flex-col space-y-2'>
              <label className='text-md font-medium text-gray-700'>
                Cantidad
              </label>
              <input
                className='w-20 rounded-md border border-gray-300 bg-gray-50 text-black px-3 py-2 text-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
                type='number'
                name='quantity'
                min='1'
                value={products.quantity}
                onChange={handleChange}
                placeholder='2'
              />
            </div>
          </div>
          <div className='flex items-center space-x-4'>
         
           
            <button
              type='submit'
              className='inline-flex items-center bg-black justify-center  whitespace-nowrap rounded-md  text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2  h-10 px-4 py-2'
            >
              {filterProduct?.id ? 'Actualizar producto' : 'Agregar producto'}
            </button>

            <button
            type='reset'
              onClick={()=>navigate("/")}
              className='  items-center border justify-center  whitespace-nowrap rounded-md   text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2  h-10 px-4 py-2'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Products
