"use client"
//^ TEST PAGE ===============================================================================================================================
import { Image } from '@nextui-org/react'
import React from 'react'
import { FaStar } from "react-icons/fa";
import { SHOPPINGCART } from '../Recoil/atoms';
import { useRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number }
type RecoilStateItemType = { id: number, title: string }

const TestPage = () => {

  const [products, setProducts] = useRecoilState(SHOPPINGCART)



  // const request = await fetch('http://localhost:3000/products', { cache: "no-store" })
  // const response = await request.json()

  function addToCartHandler() {
    const copy = [...products]
    const item = { title: 'NEW RECOIL ADDED ITEM' }
    copy.push(item)
    setProducts(copy)
    console.log('ADDED TO CART')
  }

  function clearCartHandler() { setProducts([]) }

  return (
    <>
      {/* <div className='p-10 w-screen flex items-start justify-center space-x-6 pb-10 border-b-8 border-black h-fit'>
        {response.map((item: SingleProductType) => (
          <div key={item.id} className='p-3 border-2 border-black w-[20rem] border-b-8'>
            <p>{item.title} - {item.price}</p>
            <Image isZoomed width={300} height={200} alt="Product #1" src={item.img} className='cursor-pointer w-[12rem] h-[14rem]' />
            <span className='flex space-x-1'>{Array(item.rating).fill(0).map(item => (<FaStar key={item.id} />))}</span>
          </div>
        ))}
      </div> */}

      <div>
        {products.map((item: RecoilStateItemType) => <p key={uuidv4()} className='text-4xl font-bold px-4'>+{item.title}</p>)}
      </div>

      <button onClick={addToCartHandler} className='text-xl bg-black text-white px-6 py-3 rounded-xl'>ADD TO CART</button>
      <button onClick={clearCartHandler} className='text-xl bg-black text-white px-6 py-3 rounded-xl'>CLEAR CART</button>

    </>
  )
}

export default TestPage