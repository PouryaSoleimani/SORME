//^ SELLER-PANEL - DASHBOARD PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import SellerPanelSideBar from '@/app/Components/PanelsSideBar/SellerPanelSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const SellerPanelDashboardPage = () => {
  const path = usePathname()
  const pathName = path.slice(14).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-hidden'>
      <PanelsHeader />
      <SellerPanelSideBar pathname={pathName} />
      {/* MAIN DIV */}

      <main id='dashboard_main' className='ml-48 mt-32 -z-20 text-black  grid grid-cols-2 place-items-center justify-items-center gap-x-16 gap-y-32 w-[80%] h-[80%] py-16 pl-44'>
        {/* BOXES */}

        <div id="active_orders" className='text-2xl font-bold text-left  pl-20 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Seller_Admin.png" className='absolute -top-10 -left-8 -rotate-[25deg] w-24 h-24' />
          <p>20 Seller</p>
          <p className='mt-3'>Sellers</p>
        </div>

      </main>

    </section>

  )
}

export default SellerPanelDashboardPage
