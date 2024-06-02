//^ CUSTOMER PANEL - SUPPORT PAGE
"use client"
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = { name: string, email: string, message: string }

const CustomerPanelSupportPage = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  //YUP
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required").min(10,'Email Must be Longer').max(30, "Email Must be Max 30 Chars. "),
    message: yup.string().required('Message is Required')
  }).required();
  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  return (
    <section className='overflow-x-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      <div className='ml-[25rem] mt-[10rem] mr-[5rem] -z-10 text-black bg-[#FFF0F3] rounded-2xl h-[30rem] flex items-center justify-between space-x-4 pl-3 pr-4 py-6'>

        <div id="left" className='bg-white h-full w-1/3 rounded-xl flex flex-col items-center justify-start px-1 py-6'>
          <h1 className='text-2xl font-bold text-center w-full h-fit'>Support Ticket</h1>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col scale-[58%] -translate-y-[6rem]'>

            <div className='flex items-center justify-start space-x-0'>
              <span className='flex flex-col'>
                <label htmlFor="name" className='absolute -translate-y-4 text-2xl font-bold z-30 translate-x-4 bg-zinc-100'>Name</label>
                <input type="text" placeholder='Sourosh Rasouli' {...register("name")} className='px-1 py-6 z-0 border-4 placeholder:text-3xl relative placeholder:text-zinc-300 border-[#F29AA7] rounded-xl w-[14rem]' />
                {errors.name && <p className='text-red-700 font-semibold text-2xl'>{errors.name.message}</p>}
              </span>

              <span className='flex flex-col'>
                <label htmlFor="email" className='absolute -translate-y-4 text-2xl font-bold z-30 translate-x-4 bg-zinc-100'>Email</label>
                <input type="email" placeholder='admin@gmail.com' {...register("email")} className='ml-1 px-1 py-6 z-0 border-4 relative placeholder:text-3xl placeholder:text-zinc-300 border-[#F29AA7] rounded-xl w-[18rem]' />
                {errors.email && <p className='text-red-700 font-semibold translate-x-5 text-2xl'>{errors.email.message}</p>}
              </span>

            </div>

            <div className='flex items-start justify-start py-6 flex-col my-4'>
              <label htmlFor="message" className='absolute  text-2xl font-bold z-30 -translate-y-4 translate-x-4 bg-zinc-100'>Your Message</label>
              <textarea placeholder='Hello, in my opinion' {...register("message")} className='ml-10 px-3 -translate-x-10 relative py-4 z-0 border-4 placeholder:text-3xl placeholder:text-zinc-300 border-[#F29AA7] rounded-xl w-full h-[18rem] resize-none' />
              {errors.message && <p className='text-red-700 font-semibold translate-x-3 text-2xl'>{errors.message.message}</p>}
            </div>

            <button type="submit" className='bg-[#F29AA7] duration-500 px-14 py-2 w-fit mx-auto text-4xl rounded-3xl hover:bg-pink-600 text-zinc-100 font-bold'>Send</button>

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

export default CustomerPanelSupportPage