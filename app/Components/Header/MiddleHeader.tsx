//^ MIDDLE HEADER
"use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { PiPackageLight } from "react-icons/pi";
import 'animate.css';
import { useRecoilState } from 'recoil';
import { SHOPPINGCART } from '@/app/Recoil/atoms';

const MiddleHeader = () => {
  const [BAG, setBAG] = useRecoilState(SHOPPINGCART)

  return (
    <section className='w-screen h-fit px-20 py-2 flex items-center justify-between overflow-hidden animate__animated animate__fadeInUp'>

      {/* LEFT */}
      <div id="left" className='flex items-center justify-center space-x-16'>
        <Link href='/'>
          <Image src='/images/header/SORMELOGO.png' width={500} height={100} alt='Sorme Logo' className='w-[135px] h-[35px] hover:scale-110 duration-500 cursor-pointer' />
        </Link>
        <span className='flex translate-y-2'>
          <input type="search" name="HeaderSearchInput" className='bg-zinc-200/70 py-2 pl-12 text-md w-[14rem] placeholder:text-xs placeholder:text-zinc-700 outline-none border-none  text-zinc-800 -translate-y-2 rounded-md relative top-0 left-0' placeholder='Product search and...' />
          <img src="/images/icons/SearchInputIcon.png" className='w-10 h-10 p-2 bg-[#F29AA7] cursor-pointer -translate-y-2 hover:bg-pink-500 duration-500 rounded-md absolute ' />
        </span>
      </div>


      {/* RIGHT */}
      <div id="right" className='flex items-center justify-center before:h-fit divide-x divide-black'>

        <Link href='/seller-panel' className='px-4'>
          <span className='px-4'>
            <button id='SellerButton' className='border border-black rounded-md flex p-1 space-x-1 items-center justify-center hover:bg-[#F29AA7]  duration-300'>
              <p>Seller</p>
              <PiPackageLight className='text-black w-5 h-5' />
            </button>
          </span>
        </Link>

        <Link href='/register' className='px-4'>
          <span id='SignUpButton' className='border border-black rounded-md flex p-1 space-x-1 items-center justify-center hover:bg-[#F29AA7]  duration-300'>
            <p>Sign In / SignUp</p>
            <img src="/images/icons/HeaderUser.png" className='w-5 h-5' />
          </span>
        </Link>

        <Link href='/shoppingcart' className='px-4'>
          <span id='ShoppingCartButton' className='bg-zinc-200/70 rounded-lg'>
            <img src="/images/icons/HeaderShoppingCart.png" className='w-[35px] h-[35px] p-2 relative hover:scale-125 duration-300' />
            <p className='absolute bg-[#F29AA7] text-white px-1 top-7 font-bold text-sm rounded-[100%]'>{BAG.length}</p>
          </span>
        </Link>

      </div>

    </section >
  )
}

export default MiddleHeader


