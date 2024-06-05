//^ PANELS SIDEBAR COMPONENT - CUSTOMER PANEL SIDEBAR
"use client"
import React, { useEffect, useState } from 'react'
import { Skeleton } from "@nextui-org/skeleton";
import Link from 'next/link';
import 'animate.css';
import { useRecoilState } from 'recoil';
import { USERINFOS } from '@/app/Recoil/atoms';


const CustomerPanelsSideBar: React.FC<{ pathname: string }> = ({ pathname }) => {

  const [selected, setSelected] = useState(pathname)
  const [userInfos, setUserInfos] = useRecoilState(USERINFOS)

  useEffect(() => { console.log(selected) }, [selected])

  return (
    <div suppressHydrationWarning className='overflow-x-hidden w-1/5 h-screen fixed left-0 top-0 pt-20 shadow-xl shadow-zinc-400 flex flex-col items-center justify-start space-y-6 z-10 animate__animated '>
      {/* TOP SIDEBAR */}
      <div id="top_sideBar" className="max-w-[300px] w-full flex flex-col justify-center items-center gap-2">
        <Skeleton className="flex rounded-full w-24 h-24" />
        <h1 className='font-semibold'>{userInfos.username}</h1>
        <p className='text-zinc-500 -translate-y-2 tracking-tight'>{userInfos.email}</p>
      </div>
      {/* SIDEBAR LINKS */}
      <div className='flex flex-col items-start justify-end space-y-8 text-xl font-bold'>
        <Link passHref href='/customer-panel/dashboard' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'DASHBOARD' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Dashboard.png" alt="Dashboard" className='w-12 h-12' />Dashboard</Link>
        <Link passHref href='/customer-panel/orders' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'ORDERS' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Orders.png" alt="Orders" className='w-12 h-12' />Orders</Link>
        <Link passHref href='/customer-panel/favourites' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'FAVOURITES' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Heart.png" alt="Heart" className='w-12 h-12' />Favourites</Link>
        <Link passHref href='/customer-panel/wallet' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'WALLET' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Wallet.png" alt="Wallet" className='w-12 h-12' />Wallet</Link>
        <Link passHref href='/customer-panel/support' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'SUPPORT' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Support.png" alt="Support" className='w-12 h-12' />Support</Link>
        <Link passHref href='/customer-panel/settings' className='flex items-center justify-start gap-x-4 hover:text-pink-300 duration-300'><img src="/images/panels_icons/Selected_Icon.png" className={`${selected === 'SETTINGS' ? 'w-6 h-14 absolute left-0' : 'hidden'}`} /><img src="/images/panels_icons/Settings.png" alt="Settings" className='w-12 h-12' />Settings</Link>
      </div>
    </div>
  )
}

export default CustomerPanelsSideBar

