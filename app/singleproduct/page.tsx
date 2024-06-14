//^ SINGLE PRODUCT PAGE MAIN =======================================================================================================================================
import React from 'react'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import SingleProductComponent from '../Components/SingleProduct/SingleProductComponent'
import 'aos/dist/aos.css';

type ParamsType = { params: { id: string } }

const SingleProductPage = async (params: ParamsType) => {

  const productID = params.params.id
  const request = await fetch(`http://localhost:5000/products/${productID}`, { cache: 'no-store' })
  const response = await request.json()

  return (
    <section suppressHydrationWarning className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProductComponent {...response} />
      <Footer />
    </section>
  )
}

export default SingleProductPage