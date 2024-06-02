//^ LOGIN PAGE
"use client"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";


type Inputs = { password: string, confirmPassword: string }

const SellerForgotPasswordGetPasswordPage = ({ }) => {
  //YUP
  const schema = yup.object().shape({
    password: yup.string().required('Password is Required'),
    confirmPassword: yup.string().required("Confirm Password is Required"),
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }


  const [isVisible, setIsVisible] = React.useState(false);
  const [isVisible2, setIsVisible2] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);


  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div id="form_container" className="w-[33rem] h-fit bg-[#F29AA7] rounded-3xl flex flex-col px-2">

        {/* FORM TOP HEADER ------------------------------------------------------------------------------------------------ */}
        <div id="form_top" className="mt-10 flex items-center justify-between pr-6 pl-0">
          <span className="flex items-center justify-start space-x-4 -translate-x-3">
            <img src="/images/forms/Forms_Top_Left.png" className="w-6 h-20" />
            <h1 className="text-white text-2xl font-semibold">Forget Password</h1>
          </span>
          <div className="flex flex-col-reverse -translate-y-7 justify-start items-center space-y-4">
            <img src="/images/forms/Forms_Top_Logo.png" className="w-[6rem] h-7" />
            <img src="/images/forms/Seller_Forms_Logo.png" className="w-[5.5rem] h-10 -translate-y-2" />
          </div>
        </div>
        {/* FORM MAIN -----------------------------------------------------------------------------------------------------  */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 space-y-6 pb-16 px-4'>

          {/* PASSWORD */}
          <span className='flex flex-col'>
            <label htmlFor="password" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-3 text-white bg-[#F29AA7] px-2 '>Password</label>
            <input type={isVisible ? "text" : "password"} placeholder='***********' {...register("password")} className='px-5 py-3 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <span onClick={toggleVisibility} className="text-white text-5xl w-10 h-12 absolute translate-y-[8px] translate-x-[26.2rem] cursor-pointer" >
              {isVisible ? (<FiEye />) : (<FiEyeOff />)}
            </span>
            {errors.password && <p className='text-red-700 font-semibold text-2xl'>{errors.password.message}</p>}
          </span>

          {/* CONFIRM PASSWORD */}
          <span className='flex flex-col'>
            <label htmlFor="confirmPassword" className='absolute -translate-y-4 text-xl font-bold z-30 translate-x-3 text-white bg-[#F29AA7] px-2 '>Confirm Password</label>
            <input type={isVisible2 ? "text" : "password"} placeholder='***********' {...register("confirmPassword")} className='px-5 py-3 z-0 border-4 placeholder:text-xl relative left-0 placeholder:text-white border-white bg-transparent rounded-lg w-full text-3xl text-white font-semibold' />
            <span onClick={toggleVisibility2} className="text-white text-5xl w-10 h-12 absolute translate-y-[8px] translate-x-[26.2rem] cursor-pointer" >
              {isVisible2 ? (<FiEye />) : (<FiEyeOff />)}
            </span>
            {errors.confirmPassword && <p className='text-red-700 font-semibold text-2xl'>{errors.confirmPassword.message}</p>}
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

export default SellerForgotPasswordGetPasswordPage