import React from 'react'

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
        <nav
          aria-label='Main'
          data-orientation='horizontal'
          dir='ltr'
          className='relative z-10 flex max-w-max flex-1 items-center justify-center'
        >
          <div style={{ position: 'relative' }}>
            <ul
              data-orientation='horizontal'
              className='group flex flex-1 list-none items-center justify-center space-x-1'
              dir='ltr'
            >
              <li>
                <a href='#' data-radix-collection-item=''>
                  Home
                </a>
              </li>
              <li>
                <a href='#' data-radix-collection-item=''>
                  Shop
                </a>
              </li>
              <li>
                <a href='#' data-radix-collection-item=''>
                  About
                </a>
              </li>
              <li>
                <a href='#' data-radix-collection-item=''>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className='absolute left-0 top-full flex justify-center'></div>
        </nav>
      </header>
      <div className='flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Cozy Sweater'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Cozy Sweater</h3>
              <p className='text-gray-500 dark:text-gray-400'>$49.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Leather Backpack'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Leather Backpack</h3>
              <p className='text-gray-500 dark:text-gray-400'>$99.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Stylish Sunglasses'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Stylish Sunglasses</h3>
              <p className='text-gray-500 dark:text-gray-400'>$29.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Comfy Joggers'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Comfy Joggers</h3>
              <p className='text-gray-500 dark:text-gray-400'>$39.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Elegant Dress'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Elegant Dress</h3>
              <p className='text-gray-500 dark:text-gray-400'>$79.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='bg-white dark:bg-gray-950 rounded-lg shadow-lg overflow-hidden'>
          <a href='#'>
            <img
              src='/placeholder.svg'
              alt='Durable Sneakers'
              width='400'
              height='400'
              className='w-full h-48 object-cover'
              style={{ aspectRatio: '400/400', objectFit: 'cover' }}
            />
            <div className='p-4'>
              <h3 className='font-bold text-lg'>Durable Sneakers</h3>
              <p className='text-gray-500 dark:text-gray-400'>$59.99</p>
            </div>
          </a>
          <div className='p-4 border-t dark:border-gray-800'>
            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
