"use client"
import { SHOPPINGCART } from '@/app/Recoil/atoms'
import React from 'react'
import { useRecoilState } from 'recoil'

const ShoppingCartSideBar = () => {
  const [BAG, setBAG] = useRecoilState(SHOPPINGCART)
  return (
    <div className='w-1/3 h-screen bg-zinc-200 border-l-8 border-pink-400'>
      <h1>Your Cart Reviews :
        <span>Items Count : {BAG.length}</span>
        <span>Total Price : </span>
      </h1>
    </div>
  )
}

export default ShoppingCartSideBar