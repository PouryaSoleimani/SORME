//^ CUSTOMER-PANEL - DASHBOARD PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomerPanelDashboardPage = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      {/* MAIN DIV */}

      <main id='dashboard_main' className='ml-48 mt-32 -z-20 text-black  grid grid-cols-2 place-items-center justify-items-center gap-x-16 gap-y-32 w-[80%] h-[80%] py-16 pl-44'>
        {/* BOXES */}

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Orders.png" className='absolute -top-10 -left-12 -rotate-[25deg] w-28 h-28' />
          <p>20 Orders</p>
          <p className='mt-3'>Active Orders</p>
        </div>

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Wallet.png" className='absolute -top-10 -left-12 -rotate-[25deg] w-24 h-24' />
          <p>20 Transactions</p>
          <p className='mt-3'>Bank Transactions</p>
        </div>

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Heart.png" className='absolute -top-10 -left-12 -rotate-[25deg] w-24 h-26' />
          <p>20 Favourites</p>
          <p className='mt-3'>Favourites to Order</p>
        </div>

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Support.png" className='absolute -top-10 -left-8 -rotate-[25deg] w-28 h-28' />
          <p>20 Active</p>
          <p className='mt-3'>Support Tickets</p>
        </div>

      </main>

    </section>

  )
}

export default CustomerPanelDashboardPage
