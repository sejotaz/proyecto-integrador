import React from 'react'

function ActionsForm() {

 

  return (
   <>
    <div className='flex items-center justify-between'>
    <div className='flex items-center space-x-2'>
      <input
        type='checkbox'
        id='remember'
        className='h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
      />
      <label htmlFor='remember' className='text-sm text-black'>
        Remember me
      </label>
    </div>
    <a className='text-sm' href='#'>
      Forgot password?
    </a>
  </div>
  <div className='flex items-center space-x-4'>
  <button type='submit' className='inline-flex items-center bg-black text-white justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2'>
    Ingresar
  </button>
 
</div>
   </>
  )
}

export default ActionsForm
