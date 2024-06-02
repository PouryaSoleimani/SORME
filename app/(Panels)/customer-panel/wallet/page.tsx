//^ CUSTOMER-PANEL-WALLET
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomePanelWallet = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-x-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      <div className='ml-[25rem] mt-[10rem] -z-10 text-black bg-[#FFF0F3] rounded-2xl w-[50rem] h-[30rem] flex items-center justify-between space-x-4 pl-3 pr-4 py-6'>
        <div id="left" className='bg-white h-full w-1/3 rounded-xl flex flex-col items-start justify-center space-y-6 px-1 py-6'>

          <div id="top" className='bg-[#FFF0F3] w-full h-1/3 rounded-2xl flex items-center space-x-4 justify-between' >
            <img src="/images/wallet/Iventory_Increase.png" className='w-24 h-24' />
            <h1 className='text-2xl font-semibold leading-10'>Inventory Increase</h1>
          </div>

          <div id="center" className='bg-[#FFF0F3] w-full h-1/3 rounded-2xl flex items-center space-x-4 justify-between' >
            <img src="/images/wallet/Inventory_Transfer.png" className='w-24 h-24' />
            <h1 className='text-2xl font-semibold leading-10'>Inventory Transfer</h1>
          </div>

          <div id="buttom" className='bg-[#FFF0F3] w-full h-1/3 rounded-2xl flex items-center space-x-4 justify-between' >
            <img src="/images/wallet/Inventory_Withdrawal.png" className='w-24 h-24' />
            <h1 className='text-2xl font-semibold leading-10'>Inventory Withdrawal</h1>
          </div>
        </div>

        <div id="right" className='w-2/3 h-full flex flex-col space-y-2'>

          <div id="top" className='w-full h-1/5 bg-white p-4 rounded-xl flex items-center justify-between text-2xl font-semibold'>
            <p>Balance Of Money</p>
            <p>60$</p>
          </div>

          <div id="buttom" className='w-full h-4/5 bg-white p-4 rounded-xl flex items-start justify-start text-2xl font-semibold' >
            <table className="w-full text-left rtl:text-right text-black font-bold text-2xl bg-white dark:text-gray-400">
              <thead className='px-10'>
                <tr className='border-b-2 border-black'>
                  <th scope="col" className="px-6 py-3">Order</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                </tr>
              </thead>

              <tbody >
                <tr className='border-b-2 border-black '>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#2546</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">$60</td>
                </tr>

                <tr className='border-b-2 border-black px-10'>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">#2546</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">$60</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

  )
}

export default CustomePanelWallet