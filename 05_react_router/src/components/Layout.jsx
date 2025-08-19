import React from 'react'
import { Header } from "./"
import { Outlet } from 'react-router-dom'
import { Footer } from './'
const Layout = () => {
  return (
    <>
        <Header/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout