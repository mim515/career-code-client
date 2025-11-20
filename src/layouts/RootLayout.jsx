import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../pages/Shared/NavBar'
import Footer from '../pages/Shared/Footer'

export default function RootLayout() {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
