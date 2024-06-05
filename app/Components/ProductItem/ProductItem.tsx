//^ PRODUCT ITEM ===============================================================================================================================================================
"use client"
import React from 'react'
import { Image } from "@nextui-org/image";
import NextImage from "next/image";;
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';




const ProductItem = ({ ...product }) => {
  AOS.init();
  return (
    <div suppressHydrationWarning  id='ProductItemContainer' className='border-2 box-border border-zinc-300 rounded-xl pt-4 px-4 w-[29.8rem] h-[19rem] flex items-start justify-between space-x-6 hover:scale-110 cursor-pointer duration-300 hover:border-black animate__animated animate__pulse'>

      <div id="left" className='flex flex-col items-center justify-start pl-4 h-fit '>
        <Image as={NextImage} isZoomed width={300} height={200} alt="Product #1" src={product.img} className='cursor-pointer w-[12rem] h-[14rem]' />
        <h1 className='font-semibold text-lg'>{product.title}</h1>
      </div>

      <div id="right" className='flex flex-col items-end justify-center py-0 h-[17rem]'>
        <p id="viewersquantity">{product.views} People</p>

        <span id='ratingStart' className='px-4 h-fit flex flex-col items-center justify-center'>
          {Array(product.rating).fill(0).map((rate) => (<FaStar key={uuidv4()} className='text-yellow-300 w-10 h-12' />))}{Array(5 - product.rating).fill(0).map(rate => (<FaRegStar key={uuidv4()} className='text-yellow-300 w-10 h-12' />))}
        </span>

        <p id="productPrice" className='text-pink-300 font-extrabold text-3xl -translate-x-[4.5rem] -translate-y-[2.1rem]'>{product.price}$</p>
      </div>

    </div>
  )
}

export default ProductItem

