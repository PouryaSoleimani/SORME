//^ SHOP PAGE =================================================================================================================================================
"use client"
import React, { useEffect, useState } from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ProductsOrder from '../Components/ProductsOrder/ProductsOrder'
import ProductItem from '../Components/ProductItem/ProductItem'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'
import 'animate.css';
import { useRecoilState } from 'recoil'
import { ALLPRODUCTS } from '../Recoil/atoms'
import './../Components/ProductsOrder/ProductsOrder.css'
import { Button } from "@nextui-org/react";


type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }

const Shop = () => {
  // STATES
  const [isClient, setIsClient] = useState(false)
  const [BAG, setBAG] = useRecoilState(ALLPRODUCTS)
  const [sort, setSort] = useState('')

  // REQUEST
  const request = () => fetch('http://localhost:3000/products', { cache: "no-store" }).then(response => { return response.json() }).then(data => setBAG(data))
  useEffect(() => { request() }, [])
  useEffect(() => { setIsClient(true) }, [])

  // FUNCTIONS


  return (
    <section suppressHydrationWarning className='oveflow-hidden'>
      <Header />
      <BreadCrumb />
      <ProductsOrder />

      {/* PRODUCTS */}
      <div id="Products" className='px-10 animate__animated animate__pulse flex items-center justify-center gap-1 pt-4 mb-16 flex-wrap '>
        {BAG.map((product: SingleProductType) => (
          <Link href={`/singleproduct/${product.id}`} key={product.id}>
            <ProductItem {...product} />
          </Link>))}
      </div>

      <Footer />
    </section>
  )
}

export default Shop


// 
