//^ SHOPPING CART PAGE
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ShoppingCart from '../Components/ShoppingCart/ShoppingCart'
import Footer from '../Components/Footer/Footer'



//COMPONENT
const ShoppingCartPage: React.FC = ({ }) => {

  return (
    <>
      <Header />
      <BreadCrumb />
      <ShoppingCart />
      <Footer />
    </>
  )
}

export default ShoppingCartPage