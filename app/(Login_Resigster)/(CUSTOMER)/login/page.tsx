//^ LOGIN PAGE ===========================================================================================================================================================================
"use client"
import React, { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { TOKEN, USERINFOS, isLoggedIn } from "@/app/Recoil/atoms";
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios'
import Link from "next/link";

type Inputs = { email: string, password: string }


const LoginPage = ({ }) => {
  //? STATES
  const [userInfos, setUserInfos] = useRecoilState(USERINFOS)
  const [token, setToken] = useRecoilState(TOKEN)
  const [ISLOGGEDIN, setISLOGGEDIN] = useRecoilState(isLoggedIn)
  const router = useRouter()
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  //^ TOAST
  const notify3 = () => toast.success('Logged In Successfully', { style: { border: '3px solid #F29AA7', padding: '10px', color: 'black', fontWeight: 'bold', fontSize: '12px', borderRadius: "10px" } })
  const notify4 = () => toast.error('Email or Password is Incorrect', { style: { border: '3px solid #F29AA7', padding: '10px', color: 'black', fontWeight: 'bold', fontSize: '12px', borderRadius: "10px" } })

  //^ YUP
  const schema = yup.object().shape({
    email: yup.string().required("Name is Required"),
    password: yup.string().required('Password is Required')
  }).required();

  //& REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  //* SUBMIT HANDLER
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset()
    axios.post('http://localhost:3000/login', data).then(response => {
      console.log("OK", response);
      notify3()
      setTimeout(() => { setISLOGGEDIN(true) }, 1000);
      router.push('/')
    }).catch(error => {
      console.log("ERROR", error); notify4()
    })

  }

  return (
    <div className="flex items-center justify-center w-screen h-screen overflow-hidden">
      <Toaster position="top-right" reverseOrder={true} />
      <div id="form_container" className="w-[33rem] h-fit bg-[#F29AA7] rounded-3xl flex flex-col px-2 scale-95 overflow-hidden">

        {/* FORM TOP HEADER ------------------------------------------------------------------------------------------------ */}
        <div id="form_top" className="mt-10 flex items-center justify-between pr-6 pl-0">
          <span className="flex items-center justify-start space-x-4 -translate-x-3">
            <img src="/images/forms/Forms_Top_Left.png" className="w-6 h-20" />
            <h1 className="text-white text-2xl font-semibold">Sign In / Sign Up</h1>
          </span>
          <img src="/images/forms/Forms_Top_Logo.png" className="w-[5.5rem] h-6 translate-y-1" />
        </div>
        {/* HEADER TITLE  -------------------------------------------------------------------------------------------------- */}
        <h1 className="text-center text-2xl font-semibold text-white w-full py-4">Enter Username and Password</h1>
        {/* FORM MAIN -----------------------------------------------------------------------------------------------------  */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 space-y-6 px-4'>
          {/* USERNAME */}
          <span className='flex flex-col'>
            <label htmlFor="email" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-4 text-white bg-[#F29AA7] px-2 '>Email</label>
            <input type="text" placeholder='Hardy.Oppenh@gmail.com' {...register("email")} className='px-5 py-5 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white/50 border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <FaUser className="text-white w-10 h-12 absolute translate-y-3 translate-x-[26.5rem]" />
            {errors.email && <p className='text-red-700 font-semibold text-2xl'>{errors.email.message}</p>}
          </span>

          {/* PASSWORD */}
          <span className='flex flex-col'>
            <label htmlFor="password" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-4 text-white bg-[#F29AA7] px-2 '>Password</label>
            <input type={isVisible ? "text" : "password"} placeholder='***********' {...register("password")} className='px-5 py-5 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white/50 border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <span onClick={toggleVisibility} className="text-white text-5xl w-10 h-12 absolute translate-y-[14px] translate-x-[26.2rem] cursor-pointer" >
              {isVisible ? (
                <FiEye />
              ) : (
                <FiEyeOff />
              )}
            </span>
            {errors.password && <p className='text-red-700 font-semibold text-2xl'>{errors.password.message}</p>}
          </span>
          {/* SUBMIT BUTTON  */}
          <div className="flex items-center justify-start space-x-1">
            <Link href='/register' className="bg-white w-full text-[#F29AA7] text-2xl rounded-lg font-extrabold py-4 text-center hover:bg-pink-500 hover:text-white duration-300">Create an Account</Link>
            <Link href='/register' className="w-full text-white text-2xl rounded-lg font-extrabold py-4 text-center hover:scale-110 duration-300"> Forgot Password</Link>
          </div>
          <button type="submit" className="w-full text-center pt-7 text-white text-2xl font-bold border-t-4 border-dotted border-white"><span className="hover:scale-110 duration-300 ">Sign In</span></button>
        </form>


      </div>
    </div>
  )
}

export default LoginPage