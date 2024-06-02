//^ SINGLE PRODUCT PAGE 
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import Footer from '../Components/Footer/Footer'
import SingleProduct from '../Components/SingleProduct/SingleProduct'



const SingleProductPage: React.FC = ({ }) => {
  return (

    <div className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProduct />
      <Footer />
    </div>

  )
}

export default SingleProductPage