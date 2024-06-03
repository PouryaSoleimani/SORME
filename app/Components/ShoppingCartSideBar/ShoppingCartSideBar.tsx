"use client"
import { SHOPPINGCART } from '@/app/Recoil/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const ShoppingCartSideBar = () => {
  const [BAG, setBAG] = useRecoilState(SHOPPINGCART)
  return (
    <div className='w-1/2 h-screen bg-zinc-200 border-l-8 border-pink-400'>
      <h1>Your Cart Reviews :
        <h2>Items Count : {BAG.length}</h2>
        <h2>Total Price : </h2>
      </h1>
    </div>
  )
}

export default ShoppingCartSideBar