import React from "react";
import Navbar from "../Navbar";
import Header from "../Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return(
    <>
    <Header/>
   <div className="bg-[#171923] ">
   <Outlet/>
   </div>
    </>
  )
}

export default Layout;
