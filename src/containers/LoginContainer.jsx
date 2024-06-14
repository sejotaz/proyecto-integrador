import React from 'react'
import LoginForm from '../components/LoginForm'

function LoginContainer() {
  return (
    <div className='flex w-screen    bg-opacity-50 h-[calc(100vh-72px)] '>
      <div className='flex w-1/2 items-center justify-center bg-[#171923] text-white'>
        <div className='space-y-8'>
          <div className='flex items-center justify-center'>
            <span className='ml-2 text-2xl font-bold'>ACEME STORE</span>
          </div>
          <h2 className='text-4xl font-bold'>Hello, ¡bienvenido!</h2>
          <div className='w-[500px]'>
            Una plataforma en línea dedicada exclusivamente a la compra de
            instrumentos musicales. Ofrece una amplia variedad de instrumentos,
            desde guitarras y pianos hasta baterías y violines, con opciones
            tanto para principiantes como para profesionales.
          </div>
        </div>
      </div>

      <LoginForm />
    </div>
  )
}

export default LoginContainer
