//^ SHOPPING CART ITEM ==============================================================================================================================================================
"use client"
import React from 'react'
import { Image } from "@nextui-org/image";
import NextImage from "next/image";;
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';
import { TiHeartOutline } from "react-icons/ti";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRecoilState } from 'recoil';
import { SHOPPINGCART } from '@/app/Recoil/atoms';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


type SingleProductType = { id: number, title: string, img: string, rating: number, views: number, price: number, seller: string, brand: string, off: boolean, offPercent: number, count: number }

const ShoppingCartItem = ({ ...product }: SingleProductType) => {
  AOS.init();

  const [BAG, setBAG] = useRecoilState<SingleProductType[]>(SHOPPINGCART)

  function deleteHandler(product: SingleProductType) {
    const copy = [...BAG]
    const ID = product.id
    const filteredBAG: SingleProductType[] | [] = copy.filter((item: SingleProductType) => { return item.id !== ID })
    setBAG(filteredBAG)
  }


  return (
    <section className='flex'>
      <div id='ProductItemContainer' className='border-2 box-border border-zinc-300 rounded-xl pt-5 px-4 w-[26rem] h-[20rem] flex hover:scale-110 cursor-pointer duration-300 hover:border-black animate__animated animate__pulse'>
        <div id="left" className='flex flex-col items-center justify-start h-fit '>
          <Image as={NextImage} isZoomed width={300} height={200} alt="Product #1" src={product.img} className='cursor-pointer w-[12rem] h-[14rem]' />
          <h1 className='font-semibold text-lg'>{product.title}</h1>
        </div>

        <div id="center" className='w-[5rem] h-inherit flex flex-col items-center justify-start space-y-4 translate-x-6 translate-y-2'>
          <TiHeartOutline className='w-14 h-14 bg-zinc-200 p-2 rounded-xl text-pink-400 hover:border-2 border-pink-400 duration-150' />
          <RiDeleteBinLine className='w-14 h-14 bg-zinc-200 p-3 rounded-xl text-red-700 hover:border-2 border-red-700 duration-150' onClick={() => deleteHandler(product)} />
          <p className='w-14 h-14 bg-zinc-200 p-2 rounded-xl text-blue-700 flex flex-col items-center justify-center hover:border-2 border-blue-700 duration-150'> Count <span className='text-2xl font-bold'>{product.count.toString()}</span></p>
          <p id="productPrice" className='text-pink-400 font-extrabold text-3xl '>{product.price * product.count}$</p>
        </div>


        <div id="right" className='flex flex-col items-end justify-center py-0 h-[17rem] ml-12'>
          <p id="viewersquantity" className='font-semibold'>{product.views} People</p>
          <span id='ratingStart' className='px-4 h-fit flex flex-col items-center justify-center'>
            {Array(product.rating).fill(0).map((rate) => (<FaStar key={uuidv4()} className='text-yellow-300 w-10 h-12' />))}{Array(5 - product.rating).fill(0).map(rate => (<FaRegStar key={uuidv4()} className='text-yellow-300 w-10 h-12' />))}
          </span>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCartItem
