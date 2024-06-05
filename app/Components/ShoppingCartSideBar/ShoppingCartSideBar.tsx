"use client"
import { SHOPPINGCART } from '@/app/Recoil/atoms'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }

// type TotalType = number | null

const ShoppingCartSideBar = () => {
  const [BAG, setBAG] = useRecoilState(SHOPPINGCART)
  const [totalCheck, setTotalCheck] = useState(0)

  function emptyBagHandler() { setBAG([]) }

  useEffect(() => {
    let prices = BAG.map((item: SingleProductType) => item.price * item.count)
    if (prices.length) {
      let priceSum = prices.reduce((a: number, b: number) => a + b)
      setTotalCheck(priceSum)
    } else { setTotalCheck(0) }
  }, [BAG])


  return (
    <div className='w-2/5 h-screen bg-zinc-200 border-l-8 border-pink-300 px-10'>
      <h1 className='text-3xl font-bold text-center py-2 underline decoration-4 decoration-pink-300'>Your Cart Reviews :</h1>
      <span className='text-2xl font-semibold mt-24 mb-4'>Items Count : <span className='font-extrabold '>{BAG.length && BAG?.reduce((item1: SingleProductType, item2: SingleProductType) => item1.count + item2.count)}</span> <span className='text-sm text-zinc-500'>Items in Bag</span> </span>
      <p className='text-2xl font-semibold text-blue-700 my-4'>Total Item Prices : <span className='font-extrabold text-3xl'>${totalCheck}</span></p>
      <p className='text-xl font-bold my-4 text-zinc-500'>Tax : 10%</p>
      <p className='text-2xl font-semibold text-emerald-700 my-4 bg-emerald-200 p-6 border-b-4 border-emerald-700 rounded-xl'> Total Check : <span className='font-extrabold text-4xl'> ${totalCheck * 110 / 100} </span> </p>
      <div className='flex flex-col items-center space-y-6 mt-10'>
        <button className='px-2 py-4 rounded-xl bg-blue-300 w-[20rem] font-bold text-xl hover:bg-blue-600 hover:text-white duration-300'>Go to CheckOut</button>
        <button onClick={emptyBagHandler} className='px-2 py-4 rounded-xl bg-red-300 w-[20rem] font-bold text-xl hover:bg-red-600 hover:text-white duration-300'>Empty ShoppingCart</button>
      </div>
    </div>
  )
}

export default ShoppingCartSideBar