import React from 'react'
import Header from './Components/Header/Header.jsx'
import Footer from './Components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
 /// ye humare web page ka layout h ki har page par footer or header to hona hi chahiye or beech me jo outlet h us  me home about contact jo apko chahiye wo aa jaye ga isko smjhne ke liye main.jsx me jaiye
const Layout = ({children}) => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default Layout
