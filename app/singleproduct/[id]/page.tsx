//^ SINGLE PRODUCT PAGE 2 =================================================================================================================================================
import { useEffect } from 'react'
import axios from 'axios'
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Footer from './../../Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import SingleProductComponent from './../../Components/SingleProduct/SingleProductComponent'
import { useRecoilState } from 'recoil'
import { ALLPRODUCTS, SINGLEPRODUCT } from '@/app/Recoil/atoms'
import 'aos/dist/aos.css';
import Aos from 'aos'



type ParamsType = { params: { id: string } }
type DataType = { id: number, title: string, price: number, img: string, rating: number, views: number, offPercent: number, quantity: number, count: number }


const SingleProductPage2 = async (params: ParamsType) => {

  const productID = params.params.id
  const request = await fetch(`http://localhost:3000/products/${productID}`, { cache: 'no-store' })
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

export default SingleProductPage2

