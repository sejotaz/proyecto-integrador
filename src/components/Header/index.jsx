import React, { useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";

function Header() {

const [nameProduct,setNameProduct]= useState('')

const  onHandleChange=(e)=>{
  setNameProduct(e.target.value)
}

  return (
    <header className=' bg-gray-100 dark:bg-[#1A202C] py-[22px] px-8 flex items-center justify-between'>
    <div className='flex items-center gap-4'>
       <Link to={"/"}>
       <p className='w-[100px] font-semibold text-lg'>Acme Store</p>
       </Link>
    </div>
    <Navbar/>
  </header>
  )
}

export default Header;
