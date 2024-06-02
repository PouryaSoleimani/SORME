// ^ PRODUCT ORDER
"use client"
import React, { useState } from 'react'
import { Button } from "@nextui-org/react";
import './ProductsOrder.css'
import 'animate.css';


const ProductsOrder = () => {
  const [sort, setSort] = useState('')
  console.log(sort)

  return (
    <div className='px-20 mt-4 py-4 text-zinc-500  '>
      <div className='bg-zinc-200/50 rounded-md py-4 flex items-center justify-start space-x-6 animate__animated animate__fadeInUp'>

        <h1 className='text-lg tracking-tighter pl-2'>Order By :</h1>

        <div id="buttonGroup" className='flex items-center justify-start space-x-2'>
          <Button onClick={() => setSort('Best Selling')} className={`${sort === "Best Selling" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Best Selling</Button>
          <Button onClick={() => setSort('Most Expensive')} className={`${sort === "Most Expensive" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`} > Most Expensive</Button>
          <Button onClick={() => setSort('Cheapest')} className={`${sort === "Cheapest" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`} > Cheapest</Button>
          <Button onClick={() => setSort('A to Z')} className={`${sort === "A to Z" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Name : A to Z</Button>
          <Button onClick={() => setSort('Z to A')} className={`${sort === "Z to A" ? "active" : 'rounded-md hover:bg-pink-300 hover:text-white duration-200'}`}> Name : Z to A</Button>
        </div>

      </div>
    </div>
  )
}

export default ProductsOrder

