//^ REGISTER PAGE
"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


type Inputs = { username: string, email: string, password: string }

const SellerRegisterPage = ({ }) => {
  //YUP
  const schema = yup.object().shape({
    username: yup.string().required("Name is Required"),
    email: yup.string().email("Invalid Email").required("Email is Required").min(10, 'Email Must be Longer').max(30, "Email Must be Max 30 Chars. "),
    password: yup.string().required('Password is Required')
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div id="form_container" className="w-[33rem] h-fit bg-[#F29AA7] rounded-3xl flex flex-col px-2">

        {/* FORM TOP HEADER ------------------------------------------------------------------------------------------------ */}
        <div id="form_top" className="mt-10 flex items-center justify-between pr-6 pl-0">
          <span className="flex items-center justify-start space-x-4 -translate-x-3">
            <img src="/images/forms/Forms_Top_Left.png" className="w-6 h-20" />
            <h1 className="text-white text-2xl font-semibold">Sign In / Sign Up</h1>
          </span>
          <div className="flex flex-col-reverse -translate-y-6 justify-start items-center space-y-4">
            <img src="/images/forms/Forms_Top_Logo.png" className="w-[6rem] h-7 translate-y-1" />
            <img src="/images/forms/Seller_Forms_Logo.png" className="w-[5.5rem] h-10 -translate-y-2" />
          </div>
        </div>
        {/* FORM MAIN -----------------------------------------------------------------------------------------------------  */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 space-y-6 border-b-4 border-dotted border-white px-4'>
          {/* USERNAME */}
          <span className='flex flex-col'>
            <label htmlFor="username" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-3 text-white bg-[#F29AA7] px-2 '>Username</label>
            <input type="text" placeholder='Sourosh Rasouli' {...register("username")} className='px-5 py-3 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <FaUser className="text-white w-10 h-12 absolute translate-y-2 translate-x-[26.5rem]" />
            {errors.username && <p className='text-red-700 font-semibold text-2xl'>{errors.username.message}</p>}
          </span>
          {/* EMAIL ADDRESS */}
          <span className='flex flex-col'>
            <label htmlFor="email" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-3 text-white bg-[#F29AA7] px-2 '>Email Address</label>
            <input type="text" placeholder='bndfjbf@gmailcom' {...register("email")} className='px-5 py-3 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <FaUser className="text-white w-10 h-12 absolute translate-y-2 translate-x-[26.5rem]" />
            {errors.email && <p className='text-red-700 font-semibold text-2xl'>{errors.email.message}</p>}
          </span>
          {/* PASSWORD */}
          <span className='flex flex-col'>
            <label htmlFor="password" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-3 text-white bg-[#F29AA7] px-2 '>Password</label>
            <input type={isVisible ? "text" : "password"} placeholder='***********' {...register("password")} className='px-5 py-3 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <span onClick={toggleVisibility} className="text-white text-5xl w-10 h-12 absolute translate-y-[8px] translate-x-[26.2rem] cursor-pointer" >
              {isVisible ? (
                <FiEye />
              ) : (
                <FiEyeOff />
              )}
            </span>
            {errors.password && <p className='text-red-700 font-semibold text-2xl'>{errors.password.message}</p>}
          </span>
          {/* SUBMIT BUTTON  */}
          <button type="submit" className="bg-white w-full text-[#F29AA7] text-2xl rounded-lg font-extrabold py-4 text-center hover:bg-pink-500 hover:text-white duration-300">Create an Acquantity</button>
        </form>

        <button className="w-full text-center py-6 text-white text-2xl font-bold hover:scale-110 duration-300">Sign In</button>

      </div>
    </div>
  )
}

export default SellerRegisterPage