//^ SINGLE PRODUCT PAGE 
"use client"
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import Footer from '../Components/Footer/Footer'
import SingleProduct from '../Components/SingleProduct/SingleProduct'




const SingleProductPage = () => {



  return (

    <section suppressHydrationWarning className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      {/* <SingleProduct /> */}
      <Footer />
    </section>

  )
}

export default SingleProductPage