//^ PANELS HEADER
// "use client"
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { PiPackageLight } from "react-icons/pi";
import 'animate.css';

const PanelsHeader: React.FC = () => {
  return (
    <section className='w-screen h-fit px-20 py-2 flex items-center justify-between overflow-hidden animate__animated z-30 shadow-lg shadow-zinc-300 bg-zinc-50 absolute top-0 left-0'>

      {/* LEFT */}
      <div id="left" className='flex items-center justify-center space-x-16'>
        <Link href='/'>
          <Image src='/images/header/SORMELOGO.png' width={500} height={100} alt='Sorme Logo' className='w-[135px] h-[35px] hover:scale-110 duration-500 cursor-pointer' />
        </Link>
      </div>

      {/* RIGHT */}
      <div id="right" className='flex items-center justify-center before:h-fit divide-x divide-black'>

        <Link href='/register' className='px-4'>
          <span id='SignUpButton' className='border border-black rounded-md flex p-1 space-x-1 items-center justify-center hover:bg-[#F29AA7]  duration-300'>
            <p>Sign In / SignUp</p>
            <img src="/images/icons/HeaderUser.png" className='w-5 h-5' />
          </span>
        </Link>

        <Link href='/shoppingcart' className='px-4'>
          <span id='ShoppingCartButton' className='bg-zinc-200/70 rounded-lg'>
            <img src="/images/icons/HeaderShoppingCart.png" className='w-[35px] h-[35px] p-2 relative hover:scale-125 duration-300' />
            <p className='absolute bg-[#F29AA7] text-white px-1 -translate-x-2 -translate-y-10 text-sm rounded-[100%]'>0</p>
          </span>
        </Link>

      </div>

    </section>
  )
}

export default PanelsHeader


