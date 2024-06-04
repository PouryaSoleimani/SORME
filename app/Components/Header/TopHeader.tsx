//^ TOPHEADER COMPONENT
import Link from 'next/link'
import React from 'react'


const TopHeader = () => {
  return (
    <div className='bg-[url("/images/header/HeaderTopBackGround.png")] max-w-screen h-[38px] bg-cover bg-no-repeat flex items-center justify-between px-[22rem] overflow-hidden' >
      <h2 className='text-[#5C7855] text-lg font-bold leading-loose'>70 $ Off + Gift </h2>
      <Link href='/register' className='text-[#F4F4F2] bg-[#C6A86C] py-.5 px-3 hover:scale-105  duration-500 rounded-md text-lg font-bold'>Register Now</Link>
    </div>
  )
}

export default TopHeader