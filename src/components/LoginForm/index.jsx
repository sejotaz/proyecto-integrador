import React, { useState } from 'react'
import InputsForm from './Inputs' // Supongamos que este componente maneja los campos de entrada
import ActionsForm from './Actions' // Supongamos que este componente maneja los botones de acción
import { useNavigate } from 'react-router-dom'
 
function LoginForm() {

 
  const initialValues = {
    username: '',
    password: '',
  }
  const navigate = useNavigate()

  const [user, setUser] = useState(initialValues)
  const handleChange = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData()
    for (const key in user) {
      formData.append(key, user[key])
    }

    try {

      const response = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        body: formData,
      })

      const dataResponse = await response.json()
      if (response.ok) {
        const userInfo = dataResponse.access_token.split('.')[1]
        const infoToken = atob(userInfo)
        sessionStorage.setItem('user', infoToken)

        navigate("/")

      } else {
        console.log('error', dataResponse.detail)
        
      }
    } catch (e) {
      console.log('ERROR', e)
    }
  }

  return (
    <div className='flex w-1/2 items-center justify-center bg-white p-12'>
      <form className='w-full max-w-sm space-y-8' onSubmit={handleSubmit}>
        <InputsForm user={user} handleChange={handleChange} />
        <ActionsForm />
      </form>
    </div>
  )
}

export default LoginForm
