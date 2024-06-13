import React from 'react'
import Navbar from '../components/Navbar'
import Cardproducts from '../components/Cardproducts'

export const MainContainer = () => {
  return (
    <div className='flex flex-col min-h-screen w-screen'>
      <header className='bg-gray-100 dark:bg-gray-800 py-4 px-6 flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <a className='flex items-center gap-2' href='#'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-6 w-6'
            >
              <path d='M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z'></path>
              <path d='m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9'></path>
              <path d='M12 3v6'></path>
            </svg>
            <span className='font-semibold text-lg'>Acme Store</span>
          </a>
          <form className='relative w-full max-w-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400'
            >
              <circle cx='11' cy='11' r='8'></circle>
              <path d='m21 21-4.3-4.3'></path>
            </svg>
            <input
              className='flex h-10 border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 rounded-md bg-white dark:bg-gray-950 w-full'
              type='search'
              placeholder='Search products...'
            />
          </form>
        </div>
        <Navbar />
      </header>
      <Cardproducts />
    </div>
  )
}
