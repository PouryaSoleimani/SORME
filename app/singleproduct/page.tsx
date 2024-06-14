//^ SINGLE PRODUCT PAGE MAIN =======================================================================================================================================
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import Footer from '../Components/Footer/Footer'
import SingleProduct from '../Components/SingleProduct/SingleProduct'

type ParamsType = { params: { id: string } }

const SingleProductPage = async (params: ParamsType) => {

  const productID = params.params.id


  const request = await fetch(`http://localhost:3000/products/${productID}`, { cache: 'force-cache' })
  const response = await request.json()

  return (
    <section suppressHydrationWarning className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProduct suppressHydrationWarning {...response} />
      <Footer />
    </section>
  )
}

export default SingleProductPage