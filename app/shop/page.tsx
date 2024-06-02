//^ SHOP PAGE =================================================================================================================================================
import React from 'react'
import Header from '../Components/Header/Header'
import BreadCrumb from '../Components/BreadCrumb/BreadCrumb'
import ProductsOrder from '../Components/ProductsOrder/ProductsOrder'
import ProductItem from '../Components/ProductItem/ProductItem'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'
import 'animate.css';
import Head from 'next/head'

type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, quantity: number }

const Shop: React.FC = async () => {

  const request = await fetch('http://localhost:3000/products', { cache: "no-store" })
  const response = await request.json()

  return (
    <div className='oveflow-hidden'>
      <Header />
      <BreadCrumb />
      <ProductsOrder />

      <div id="Products" className='px-20 animate__animated animate__pulse grid grid-cols-3 gap-1 pt-4 mb-16 flex-wrap '>
        {response.map((product: SingleProductType) => <Link href={`/singleproduct/${product.id}`} key={product.id}><ProductItem {...product} /></Link>)}
      </div>

      <Footer />
    </div>
  )
}

export default Shop
