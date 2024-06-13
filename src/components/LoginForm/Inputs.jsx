import React, { useState } from 'react'

function InputsForm(props){
const {
  user,
  handleChange
}=props

  return (
    <>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='email' className='text-md text-black font-medium'>
          Username
        </label>
        <input
          className='flex h-10 w-full rounded-md border text-black  text-md border-gray-300  bg-gray-50 px-3 py-2 text-sm   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
          type='text'
          name='username'
          value={user.username}
          placeholder='user1528'
          onChange={handleChange}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <label htmlFor='password' className='text-md font-medium text-black'>
          Password
        </label>
        <input
          className='flex h-10 w-full rounded-md border text-black text-md border-gray-300 bg-gray-50 px-3 py-2 text-sm   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2'
          type='password'
           name='password'
           value={user.password}
          onChange={handleChange}
          placeholder='Password'
        />
      </div>
    </>
  )
}

export default InputsForm
