//^ PANELS SIDEBAR COMPONENT - SELLER PANEL SIDEBAR
"use client"
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@nextui-org/skeleton";
import Link from 'next/link';
import 'animate.css';


const SellerPanelSideBar: React.FC<{ pathname: string }> = ({ pathname }) => {

  const [selected, setSelected] = useState(pathname)

  useEffect(() => { console.log(selected) }, [selected])

  return (
    <div className='overflow-x-hidden w-1/5 h-screen fixed left-0 top-0 pt-20 shadow-xl shadow-zinc-400 flex flex-col items-center justify-start space-y-6 z-10 animate__animated '>
      {/* TOP SIDEBAR */}
      <div id="top_sideBar" className="max-w-[300px] w-full flex flex-col justify-center items-center gap-2">
        <Skeleton className="flex rounded-full w-24 h-24" />
        <h1 className='font-semibold'>Hardy Oppenheimer</h1>
        <p className='text-zinc-500 -translate-y-2 tracking-tight'>Hardy.Oppenh@gmail.com</p>
      </div>
      {/* SIDEBAR LINKS */}
      <div className='flex flex-col items-start justify-end space-y-8 text-xl font-bold'>
        <Link passHref href='/seller-panel/dashboard' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'DASHBOARD' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Dashboard.png" alt="Dashboard" className='w-12 h-12' />Dashboard</Link>
        <Link passHref href='/seller-panel/product' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'PRODUCT' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Seller_Admin.png" alt="Orders" className='w-12 h-12' />Product</Link>
        <Link passHref href='/seller-panel/settings' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'SETTINGS' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Settings.png" alt="Settings" className='w-12 h-12' />Settings</Link>
      </div>
    </div>
  )
}

export default SellerPanelSideBar

