//^ CUSTOMER-PANEL-ORDERS
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomerPanelOrderPage: React.FC = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-x-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      {/* MAIN DIV */}
      <main id='orders_main' className='ml-8 mt-24 -z-20 text-black grid place-items-center justify-items-center w-full h-fit'>


        <div className='flex items-center justify-center w-[70%]'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-12 bg-[#FFF1F3] mt-24 pt-4 pb-6">
            <table className="w-full text-left rtl:text-right text-black font-bold text-3xl bg-[#FFF1F3] dark:text-gray-400">

              <thead className='px-10'>
                <tr className='border-b-2 border-black'>
                  <th scope="col" className="px-6 py-3">Order</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Condition</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                </tr>
              </thead>

              <tbody >
                <tr className='border-b-2 border-black '>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#2546</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">Awaiting Review</td>
                  <td className="px-6 py-4">$60</td>
                </tr>

                <tr className='border-b-2 border-black px-10'>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#2546</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">Awaiting Review</td>
                  <td className="px-6 py-4">$60</td>
                </tr>

              </tbody>

            </table>
          </div>
        </div>
      </main>

    </section >

  )
}

export default CustomerPanelOrderPage

