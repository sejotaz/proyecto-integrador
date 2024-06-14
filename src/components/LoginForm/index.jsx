import React from 'react'
import InputsForm from './Inputs' // Supongamos que este componente maneja los campos de entrada
import ActionsForm from './Actions' // Supongamos que este componente maneja los botones de acción
 
import { useLoginForm } from '../../hooks/useLoginForm'
 
function LoginForm() {

  const {
    user,
    handleChange,
    handleSubmit
  }=useLoginForm()

  return (
    <div className='flex w-1/2 items-center justify-center bg-white p-12'>
      <form className='w-full max-w-sm space-y-8' onSubmit={handleSubmit}>
        <h1 className='font-bold text-[30px]  '>LOGIN</h1>
        <InputsForm user={user} handleChange={handleChange} />
        <ActionsForm />
      </form>
    </div>
  )
}

export default LoginForm
