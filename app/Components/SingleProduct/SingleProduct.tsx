//^ SINGLE PRODUCT COMPONENT
"use client"
import NextImage from 'next/image'
import { Image } from '@nextui-org/react'
import toast, { Toaster } from 'react-hot-toast';
import { FaRegStar, FaStar } from 'react-icons/fa'
import 'aos/dist/aos.css';
import { useRecoilState } from 'recoil';
import { SHOPPINGCART } from '@/app/Recoil/atoms';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

type DataType = { id: number, title: string, price: number, img: string, rating: number, views: number, offPercent: number, quantity: number }

//COMPONENT
const props = (props: DataType) => {
  const notify = () => toast.success('Product Added to Cart', { style: { border: '3px solid #F29AA7', padding: '10px', color: 'black', fontWeight: 'bold', fontSize: '10px', borderRadius: "10px" } })

  const [shoppingCart, setShoppingCart] = useRecoilState(SHOPPINGCART)

  function addToCartHandler() {
    const copy = [...shoppingCart]
    copy.push(props)
    setShoppingCart(copy)
    console.log(shoppingCart)
    notify()
  }

  return (

    <div id="main" className='w-screen h-fit px-20 pt-6 mb-[5rem] flex flex-col flex-wrap flex-shrink ' suppressHydrationWarning  >
      <Toaster position="top-right" reverseOrder={true} />
      {/* TOP SECTION */}
      <span id="top" data-aos="fade-up" data-aos-duration="700" className='w-full h-fit py-4  flex items-center justify-start space-x-14'>

        <span id="top_left" className=' w-fit flex items-center justify-between space-x-6'>
          <span className='flex flex-col items-center justify-center space-y-5'>
            <img src="/images/single-product/Heart_Icon.png" className='w-16 h-16 cursor-pointer box-border hover:border-2 border-pink-500 rounded-xl hover:shadow-xl shadow-black ' />
            <img src="/images/single-product/Share_Icon.png" className='w-16 h-16 cursor-pointer hover:border-2 border-pink-500 rounded-xl hover:shadow-xl shadow-black' />
          </span>
          <Image as={NextImage} isZoomed width={700} height={500} alt="Product #1" src={props.img} priority className='cursor-pointer w-[29rem] h-[29rem]' />
        </span>

        <span id="top_right" className='w-fit px-3 flex items-center justify-start' >
          <span id="product_details" className='bg-[#F29AA7]/10 border border-pink-300 rounded-3xl flex flex-col px-6 pt-5 pb-10 text-black text-2xl w-[43rem]'>

            <span id="productTitle_Container" className='flex flex-col items-start justify-center space-y-1'>
              <h1 id='product_title' className='font-semibold'>{props.title}</h1>
              <h2 id='Product_ID' className='text-zinc-400/70 tracking-tight'>Product ID : 654659</h2>
            </span>

            <span id='product_description' className='leading-[2.8rem] tracking-wide mt-2 text-[1.4rem] text-justify text-wrap'>
              <p>Floral pancake, which is made of natural materials, is soft, very light on the skin and does not feel heavy on the skin in any way. Also, this pancake does not dry the skin, does not rub on the skin, has a high durability and a velvety and natural look. gives to the face</p>
            </span>

            <span id="product_rating" className='flex items-center justify-start space-x-6 mt-2'>
              <h3 className='font-semibold'>Product Rating</h3>

              <span id='ratingStart' className='px-4 h-fit flex items-center justify-center'>
                {Array(props.rating).fill(0).map(rate => (<FaStar className='text-yellow-300 w-10 h-12' key={uuidv4()} />))}{Array(5 - props.rating).fill(0).map(rate => (<FaRegStar key={uuidv4()} className='text-yellow-300 w-10 h-12' />))}
              </span>
              <p className='text-xl'>{props.views} People</p>
            </span>
          </span>
        </span>

      </span>

      {/* BOTTOM SECTION */}
      <span id="buttom" className='flex items-center justify-start space-x-10 mt-6 px-16' >
        <span id="buttom_left" data-aos="fade-right" data-aos-duration="700" className='bg-[#F29AA7]/10 border px-8 py-12 text-[#F29AA7] border-pink-300 rounded-3xl w-[29rem] text-[3.8rem] leading-4 font-bold flex flex-col items-center justify-center space-y-16'>

          <span id='buttom_left_top' className='flex items-center justify-center space-x-10'>
            <p id="before_price" className='text-[#F29AA7]/40 line-through decoration-[#F29AA7]'>{props.price}$</p>
            <p id="off_percentage" className='bg-[#F29AA7] text-zinc-100 py-1 px-2 rounded-3xl text-xl'>{props.offPercent}%</p>
            <p id="after_price">{props.price - (props.price * (props.offPercent / 100))}$</p>
          </span>
          <span id='buttom_left_buttom'>
            <button onClick={addToCartHandler} className='bg-[#F29AA7] font-semibold hover:bg-pink-400 hover:scale-105 duration-300 text-zinc-100 py-2 px-3 rounded-3xl text-2xl'>Add to Cart</button>
          </span>
        </span>

        <span id="buttom_right" data-aos="fade-left" data-aos-duration="700" className='bg-[#F29AA7]/10 border py-12 text-[#F29AA7] border-pink-300 rounded-3xl w-[43.5rem]  font-semibold flex items-center justify-center space-x-2'>
          <span id="buttom_right_left" className='flex flex-col items-center justify-center space-y-4 w-1/2 border-r-4 py-1 border-pink-400'>
            <span className='flex items-center justify-start space-x-2 text-black text-3xl'>
              <img src="/images/single-product/Shop_Icon.png" className='w-16 h-16 cursor-pointer box-border  border-pink-500 rounded-xl' />
              <p>Seller : Sorme</p>
            </span>
            <span className='flex items-center justify-start space-x-2 text-black text-3xl'>
              <img src="/images/single-product/Brand_Icon.png" className='w-16 h-16 cursor-pointer box-border  border-pink-500 rounded-xl' />
              <p>Brand : Follero</p>
            </span>
          </span>

          <span id="buttom_right_right" className='flex items-center py-1 justify-center w-1/2 pl-4'>
            <span className='flex items-center justify-start space-x-2 text-black text-3xl text-wrap pr-8'>
              <img src="/images/single-product/Delivery_Icon.png" className='w-16 h-16 cursor-pointer box-border rounded-xl' />
              <p className='text-wrap'>Free Shipping to New York</p>
            </span>
          </span>

        </span>
      </span>

    </div>
  )
}

export default props