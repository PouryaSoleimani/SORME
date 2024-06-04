//^ SINGLE PRODUCT PAGE 2 =================================================================================================================================================
'use client'
import BreadCrumb from '@/app/Components/BreadCrumb/BreadCrumb'
import Footer from '@/app/Components/Footer/Footer'
import Header from '@/app/Components/Header/Header'
import SingleProduct from '@/app/Components/SingleProduct/SingleProduct'
import { headers } from 'next/headers'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

type ParamsType = { params: { id: string } }


const SingleProductPage2 = (params: ParamsType) => {
  const [mainProduct, setMainProduct] = useState<ParamsType>()
  const productID = params.params.id
  // const request = await fetch(`http://localhost:3000/products/${productID}`)
  // const response = await request.json()

  const PATH = usePathname()
  const MainProductId = PATH.slice(15)

  const getData = (productID: string | number) => { fetch(`http://localhost:3000/products/${MainProductId}`).then(response => response.json()).then(data => setMainProduct(data)) }

  useEffect(() => { getData(MainProductId) }, [])


  return (
    <div className='overflow-hidden'>
      <Header />
      <BreadCrumb />
      <SingleProduct {...mainProduct} />
      <Footer />
    </div>

  )
}

export default SingleProductPage2
// {...response}