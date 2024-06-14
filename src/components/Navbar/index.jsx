import React, { useState, useEffect, useContext } from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CiCirclePlus } from 'react-icons/ci'
import { IoLogOutOutline } from 'react-icons/io5'
import { AppContext } from '../../context/AppContext'

function Navbar() {
  const { userInfo, removeUser, handleLogout } = useContext(AppContext)
  return (
    <div>
      <nav
        aria-label='Main'
        data-orientation='horizontal'
        dir='ltr'
        className='relative z-10 flex max-w-max flex-1 items-center justify-center'
      >
        <div style={{ position: 'relative' }}>
          <ul className='flex gap-8 list-none items-center justify-center'>
            {removeUser && (
              <li>
                <Link to={'/products/create'}>
                  <CiCirclePlus size={23} color='white' />
                </Link>
              </li>
            )}

            {removeUser && (
              <li className='text-white'>{`Bienvenido, ${removeUser.sub}`}</li>
            )}

            {!removeUser ? (
              <li>
                <Link to={'/login'}>
                  <FaRegUserCircle size={23} color='white' />
                </Link>
              </li>
            ) : (
              <li>
                <IoLogOutOutline
                  size={23}
                  color='white'
                  cursor={'pointer'}
                  onClick={handleLogout}
                />
              </li>
            )}
          </ul>
        </div>
        <div className='absolute left-0 top-full flex justify-center'></div>
      </nav>
    </div>
  )
}

export default Navbar
