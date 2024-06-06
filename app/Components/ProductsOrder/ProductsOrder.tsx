// ^ PRODUCT ORDER
"use client"
import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import './ProductsOrder.css'
import 'animate.css';
import { useRecoilState } from 'recoil';
import { ALLPRODUCTS } from '@/app/Recoil/atoms';
import __ from 'lodash'

type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }


const ProductsOrder = () => {
  const [sort, setSort] = useState('')
  const [BAG, setBAG] = useRecoilState(ALLPRODUCTS)

  const sortAscending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const copy = [...BAG]
    const sorted = copy.sort((a, b) => { return a.price - b.price })
    setSort('Cheapest')
    setBAG(sorted)
  }
  const sortDescending = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const copy = [...BAG]
    const sorted = copy.sort((a, b) => { return a.price - b.price }).reverse()
    setSort("Most Expensive")
    setBAG(sorted)
  }

  const AlphabeticalOrder = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const copy = [...BAG]
    const sorted = __.sortBy(copy, 'title')
    setSort('A to Z')
    setBAG(sorted)
  }

  const AlphabeticalOrderReverse = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const copy = [...BAG]
    const sorted = __.sortBy(copy, 'title').reverse()
    setSort('Z to A')
    setBAG(sorted)
  }


  //^ RETURN ============================================================================================================================================================================
  return (
    <div suppressHydrationWarning className='px-20 mt-4 py-4 text-zinc-500  '>
      <div className='bg-zinc-200/50 rounded-md py-4 flex items-center justify-start space-x-6 animate__animated animate__fadeInUp'>

        <h1 className='text-lg tracking-tighter pl-2'>Order By :</h1>

        <div id="buttonGroup" suppressHydrationWarning className='flex items-center justify-start space-x-2'>
          <Button onClick={() => setSort('Best Selling')} className={`${sort === "Best Selling" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Best Selling</Button>
          <Button onClick={sortDescending} className={`${sort === "Most Expensive" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`} > Most Expensive</Button>
          <Button onClick={sortAscending} className={`${sort === "Cheapest" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`} > Cheapest</Button>
          <Button onClick={AlphabeticalOrder} className={`${sort === "A to Z" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Name : A to Z</Button>
          <Button onClick={AlphabeticalOrderReverse} className={`${sort === "Z to A" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Name : Z to A</Button>
        </div>

      </div>
    </div>
  )
}

export default ProductsOrder
