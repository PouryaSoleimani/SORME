// ^ ADMIN PANEL - SELLER PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import AdminPanelsSideBar from '@/app/Components/PanelsSideBar/AdminPanelSideBar'
import { X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'


const AdminPanelSellerPage = () => {
  const path = usePathname()
  const pathName = path.slice(13).toLocaleUpperCase()
  console.log(pathName)

  return (
    <section className='overflow-hidden'>
      <PanelsHeader />
      <AdminPanelsSideBar pathname={pathName} />

      <main id='user_main' className='ml-8 mt-14 -z-20 text-black grid place-items-center justify-items-center w-full h-fit'>

        <div className='flex items-center justify-center w-[70%]'>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-12 bg-[#FFF1F3] mt-24 pt-4 pb-6">
            <table className="w-full text-left rtl:text-right text-black font-bold text-2xl bg-[#FFF1F3] dark:text-gray-400">
              <thead className='px-10'>
                <tr className='border-b border-zinc-700'>
                  <th scope="col" className="px-6 py-3">User Name</th>
                  <th scope="col" className="px-6 py-3">Registery Date</th>
                  <th scope="col" className="px-6 py-3">Email Address</th>
                  <th scope="col" className="px-6 py-3">Delete</th>
                </tr>
              </thead>

              <tbody >
                <tr className='border-b border-zinc-700 '>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Hardy</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">vbbb@gmail.com</td>
                  <td className="px-6 py-4 flex justify-center items-center cursor-pointer hover:scale-125 duration-300"><X size={32} color="#fb5050" strokeWidth={1} /></td>
                </tr>

                <tr className='px-10'>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Hardy</th>
                  <td className="px-6 py-4">2022/02/01</td>
                  <td className="px-6 py-4">vbbb@gmail.com</td>
                  <td className="px-6 py-4 flex items-center justify-center cursor-pointer hover:scale-125 duration-300"><X size={32} color="#fb5050" strokeWidth={1} /></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </main>
    </section>
  )
}

export default AdminPanelSellerPage