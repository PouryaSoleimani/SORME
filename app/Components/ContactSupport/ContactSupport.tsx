"use client"
import Image from 'next/image'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'aos/dist/aos.css';

type Inputs = { name: string, email: string, message: string }

const ContactSupport = () => {
  //YUP
  const schema = yup.object().shape({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required").min(10).max(30),
    message: yup.string().required('Message is Required')
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    reset()
  }

  //RETURN
  return (
    <div className='flex items-start justify-between px-20 w-full py-16 space-x-32' data-aos="zoom-in" data-aos-duration="400" data-aos-easing="linear">

      <div id="left" className='flex flex-col items-start justify-start space-y-12'>
        <div className='flex flex-col space-y-5'>
          <h1 className='text-4xl font-bold'>Contact Support</h1>
          <p className='text-2xl text-zinc-700 tracking-tight'>Answer as soon as possible</p>
        </div>
        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full h-full'>
          <div className='flex items-end justify-start w-full'>
            <span className='flex flex-col'>
              <label htmlFor="name" className='absolute -translate-y-5 text-2xl font-bold z-30 translate-x-5 bg-zinc-100'>Name</label>
              <input type="text" placeholder='Sourosh Rasouli' {...register("name")} className='px-1 py-6 z-0 border-2 placeholder:text-xl relative placeholder:text-zinc-400 border-[#F29AA7] rounded-xl w-[16rem]' />
              {errors.name && <p className='text-red-700 font-semibold'>{errors.name.message}</p>}
            </span>

            <span className='flex flex-col'>
              <label htmlFor="email" className='absolute -translate-y-5 text-2xl font-bold z-30 translate-x-14 bg-zinc-100'>Email</label>
              <input type="email" placeholder='Sourosh Rasouli' {...register("email")} className='ml-10 px-1 py-6 z-0 border-2 relative placeholder:text-xl placeholder:text-zinc-400 border-[#F29AA7] rounded-xl w-[16rem]' />
              {errors.email && <p className='text-red-700 font-semibold translate-x-10'>{errors.email.message}</p>}
            </span>

          </div>

          <div className='flex  items-start justify-start py-6 flex-col my-4 w-full'>
            <label htmlFor="message" className='absolute  text-2xl font-bold z-30 -translate-y-4 translate-x-4 bg-zinc-100'>Your Message</label>
            <textarea placeholder='Hello, in my opinion' {...register("message")} className='ml-10 px-3 -translate-x-10 relative py-6 z-0 border-2 placeholder:text-xl placeholder:text-zinc-400 border-[#F29AA7] rounded-xl w-full resize-none' />
            {errors.message && <p className='text-red-700 font-semibold'>{errors.message.message}</p>}
          </div>

          <button type="submit" className='bg-[#F29AA7] w-full duration-500 px-8 py-2 mx-auto text-3xl rounded-lg hover:bg-pink-600 text-zinc-100 font-bold'>Send</button>
        </form>

      </div>
      {/* CONTACT US IMAGE */}
      <div id="right">
        <Image src='/images/contactsupport/contact_support.png' width={500} height={300} alt='Contact_Support' className='rounded-3xl w-[600px] h-[450px]' />
      </div>
    </div >
  )
}

export default ContactSupport             