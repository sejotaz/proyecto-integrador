import React from "react";
import LoginForm from "../components/LoginForm";

function LoginContainer() {
  return (
    <div className='flex w-screen h-screen  bg-opacity-50'>

      <div className='flex w-1/2 items-center justify-center bg-[#0f3443] text-white'>
        <div className='space-y-8'>
          <div className='flex items-center justify-center'>
            <p>LOGO</p>
            <span className='ml-2 text-2xl font-bold'>YOUR LOGO</span>
          </div>
          <h2 className='text-4xl font-bold'>Hello, welcome!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            nisi risus.
          </p>
        </div>
      </div>

     <LoginForm/>
    </div>
  )
}

export default LoginContainer;
