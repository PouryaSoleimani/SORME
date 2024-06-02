//^ SHOPPING CART PAGE
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart'
import Footer from '../Components/Footer/Footer'
import ShoppingCartSideBar from '../Components/ShoppingCartSideBar/ShoppingCartSideBar'



//COMPONENT
const ShoppingCartPage = ({ }) => {

  return (
    <>
      <Header />
      <BreadCrumb />
      <div className='flex items-start'>
        <ShoppingCart />
        <ShoppingCartSideBar />
      </div>
      <Footer />
    </>
  )
}

export default ShoppingCartPage