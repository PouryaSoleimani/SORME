//^ SHOPPING CART PAGE ===================================================================================================================================
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart'
import Footer from '../Components/Footer/Footer'
import ShoppingCartSideBar from '../Components/ShoppingCartSideBar/ShoppingCartSideBar'



//COMPONENT
const ShoppingCartPage = ({ }) => {

  return (
    <section className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <div className='flex items-start py-2'>
        <ShoppingCart />
        <ShoppingCartSideBar />
      </div>
      <Footer />
    </section>
  )
}

export default ShoppingCartPage