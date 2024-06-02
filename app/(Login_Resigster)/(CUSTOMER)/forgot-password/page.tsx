//^ FORGOT-PASSWORD PAGE
"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";


type Inputs = { username: string }

const ForgotPasswordPage = ({ }) => {
  //YUP
  const schema = yup.object().shape({
    username: yup.string().required("Name is Required"),
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }


  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div id="form_container" className="w-[33rem] h-fit bg-[#F29AA7] rounded-3xl flex flex-col px-2">

        {/* FORM TOP HEADER ------------------------------------------------------------------------------------------------ */}
        <div id="form_top" className="mt-10 flex items-center justify-between pr-6 pl-0">
          <span className="flex items-center justify-start space-x-4 -translate-x-3">
            <img src="/images/forms/Forms_Top_Left.png" className="w-6 h-20" />
            <h1 className="text-white text-2xl font-semibold">Forget Password</h1>
          </span>
          <img src="/images/forms/Forms_Top_Logo.png" className="w-[5.8rem] h-6 translate-y-1" />
        </div>
        {/* FORM MAIN -----------------------------------------------------------------------------------------------------  */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 space-y-6  px-4'>
          {/* USERNAME */}
          <span className='flex flex-col'>
            <label htmlFor="username" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-4 text-white bg-[#F29AA7] px-2 '>Username</label>
            <input type="text" placeholder='Hardy.Oppenh' {...register("username")} className='px-5 py-5 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <FaUser className="text-white w-10 h-12 absolute translate-y-3 translate-x-[26.5rem]" />
            {errors.username && <p className='text-red-700 font-semibold text-2xl'>{errors.username.message}</p>}
          </span>

          {/* SUBMIT BUTTON  */}
          <div className="flex items-center justify-start space-x-1">
            <button type="submit" className="bg-white w-full text-[#F29AA7] text-2xl rounded-lg font-extrabold py-4 text-center hover:bg-pink-500 hover:text-white duration-300">Confirm</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ForgotPasswordPage