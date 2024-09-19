import React from 'react'
import { Header , Footer } from "./compunents/index"
import { Outlet } from 'react-router-dom'

function Laout() {
  return (
    <>
   <Header />
   <Outlet />
   <Footer />
    
    </>
  )
}

export default Laout