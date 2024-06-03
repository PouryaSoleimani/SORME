"use client"
import { SHOPPINGCART } from '@/app/Recoil/atoms'
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }



const ShoppingCartSideBar = () => {
  const [BAG, setBAG] = useRecoilState(SHOPPINGCART)
  const [totalCheck, setTotalCheck] = useState(0)
  const prices = BAG.map((item: SingleProductType) => item.price)
  const counts = BAG.map((item: SingleProductType) => item.count)
  useEffect(() => { if (prices.length) { let sum = prices.reduce((a: number, b: number) => a + b); setTotalCheck(sum) } }, [BAG])
  const TOTAL = totalCheck * counts

  function emptyBagHandler() { setBAG([]) }

  return (
    <div className='w-2/5 h-screen bg-zinc-200 border-l-8 border-pink-300 px-10'>
      <h1 className='text-3xl font-bold text-center py-2 underline decoration-4 decoration-pink-300'>Your Cart Reviews :</h1>
      <span className='text-xl font-bold mt-16 mb-4'>Items Count : {BAG.length}</span>
      <p className='text-xl font-bold text-blue-700 my-4'>Total Item Prices : ${TOTAL}</p>
      <p className='text-xl font-bold my-4'>Tax : 10%</p>
      <p className='text-3xl font-bold text-emerald-700 my-4 bg-lime-300 px-4 py-2 rounded-xl'> Total Check : ${TOTAL * 110 / 100}</p>
      <div className='flex flex-col space-y-6 mt-10'>
        <button className='px-2 py-4 rounded-xl bg-pink-300 w-[20rem] font-bold text-xl hover:bg-pink-800 hover:text-white duration-200'>Go to CheckOut</button>
        <button onClick={emptyBagHandler} className='px-2 py-4 rounded-xl bg-red-500 w-[20rem] font-bold text-xl hover:bg-red-800 hover:text-white duration-200'>Empty ShoppingCart</button>
      </div>
    </div>
  )
}

export default ShoppingCartSideBar