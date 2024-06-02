//^ ADMIN-PANEL - DASHBOARD PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import AdminPanelsSideBar from '@/app/Components/PanelsSideBar/AdminPanelSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const AdminPanelDashboardPage = () => {
  const path = usePathname()
  const pathName = path.slice(13).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-hidden'>
      <PanelsHeader />
      <AdminPanelsSideBar pathname={pathName} />
      {/* MAIN DIV */}

      <main id='dashboard_main' className='ml-48 mt-32 -z-20 text-black  grid grid-cols-2 place-items-center justify-items-center gap-x-16 gap-y-32 w-[80%] h-[80%] py-16 pl-44'>
        {/* BOXES */}

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/User_Admin.png" className='absolute -top-12 -left-10 -rotate-[25deg] w-28 h-28' />
          <p>20 Users</p>
          <p className='mt-3'>Users</p>
        </div>

        <div id="active_orders" className='text-2xl font-bold text-right px-8 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Seller_Admin.png" className='absolute -top-10 -left-12 -rotate-[25deg] w-24 h-24' />
          <p>20 Sellers</p>
          <p className='mt-3'>Sellers</p>
        </div>

        <div id="active_orders" className='text-2xl font-bold text-right px-7 pt-3 pb-6 border-2 border-[#F29AA7] shadow-lg shadow-[#F29AA7] rounded-xl w-[18rem] relative cursor-pointer hover:scale-110 duration-500'>
          <img src="/images/panels_icons/Heart.png" className='absolute -top-10 -left-12 -rotate-[25deg] w-24 h-26' />
          <p>20 Transactions</p>
          <p className='mt-3 tracking-tighter'>Financial Transactions</p>
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

export default AdminPanelDashboardPage
