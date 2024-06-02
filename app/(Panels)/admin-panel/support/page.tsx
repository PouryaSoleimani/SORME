//^ ADMIN PANEL - SUPPORT PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import AdminPanelsSideBar from '@/app/Components/PanelsSideBar/AdminPanelSideBar'

type Inputs = { message: string }

const AdminPanelSupportPage = () => {
  const path = usePathname()
  const pathName = path.slice(13).toLocaleUpperCase()
  //YUP
  const schema = yup.object().shape({
    message: yup.string().required('Message is Required')
  }).required();
  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  return (
    <section className='overflow-x-hidden'>
      <PanelsHeader />
      <AdminPanelsSideBar pathname={pathName} />
      <div className='ml-[25rem] mt-[10rem] mr-[5rem] -z-10 text-black bg-[#FFF0F3] rounded-2xl h-[30rem] flex items-center justify-between space-x-4 pl-3 pr-4 py-6 pb-4'>

        <div id="left" className='bg-white h-full w-1/3 rounded-xl flex flex-col items-start justify-start px-1 py-6'>
          <h1 className='text-2xl font-bold text-center w-full h-fit'>Support Ticket</h1>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col scale-[90%] -translate-y-[2.5rem] w-full h-full mt-4 pb-4'>

            <div className='flex items-start justify-start py-4 flex-col my-4 w-full'>
              <label htmlFor="message" className='absolute text-sm font-semibold z-30 rounded-xl -translate-y-3 px-2 translate-x-3 bg-white'>Your Message</label>
              <textarea placeholder='Hello, in my opinion ...' {...register("message")} className='ml-10 px-3 -translate-x-10 relative py-4 z-0 border-2 placeholder:text-xl placeholder:text-zinc-300 border-[#F29AA7] rounded-xl w-full h-[20rem] resize-none' />
              {errors.message && <p className='text-red-700 font-semibold translate-x-1 text-lg'>{errors.message.message}</p>}
            </div>

            <button type="submit" className='bg-[#F29AA7] duration-500 px-12 py-0 w-fit mx-auto text-2xl rounded-3xl hover:bg-pink-600 text-white font-bold -translate-y-6'>Send</button>

          </form>



        </div>

        <div id="right" className='w-2/3 h-full flex flex-col space-y-2'>

          <div id="top" className='w-full h-1/5 bg-white p-4 rounded-xl flex items-center justify-between text-2xl font-semibold'>
            <p>Active Ticket</p>
            <p>10</p>
          </div>

          <div id="buttom" className='w-full h-4/5 bg-white p-4 rounded-xl flex items-start justify-start text-2xl font-semibold' >
            <table className="w-full text-left rtl:text-right text-black font-bold text-2xl bg-white dark:text-gray-400">
              <thead className='px-10'>
                <tr className='border-b border-black py-6'>
                  <th scope="col" className="px-6 py-3">Title</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Condition</th>
                </tr>
              </thead>

              <tbody >
                <tr className='border-b border-black text-lg font-normal '>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Cashback</th>
                  <td className="px-6 py-4">1402/2/26</td>
                  <td className="px-6 py-4">Active</td>
                </tr>

                <tr className='px-10 text-lg font-normal'>
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">Cashback</th>
                  <td className="px-6 py-4">1402/2/26</td>
                  <td className="px-6 py-4">Active</td>
                </tr>

              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>

  )
}

export default AdminPanelSupportPage