//^ FORGOT-PASSWORD PAGE
"use client"
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FaUser } from "react-icons/fa6";


type Inputs = { username: string }

const SellerSignInCodePage = ({ }) => {
  //YUP
  const schema = yup.object().shape({
    username: yup.string().required("Username is Required"),
  }).required();

  //REACT-HOOK-FORM
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }

  const [otp, setOtp] = useState('');

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div id="form_container" className="w-[33rem] h-fit bg-[#F29AA7] rounded-3xl flex flex-col px-2 pb-28">

        {/* FORM TOP HEADER ------------------------------------------------------------------------------------------------ */}
        <div id="form_top" className="mt-10 flex items-center justify-between pr-6 pl-0">
          <span className="flex items-center justify-start space-x-4 -translate-x-3">
            <img src="/images/forms/Forms_Top_Left.png" className="w-6 h-20" />
            <h1 className="text-white text-2xl font-semibold">Sign In / Sign Up</h1>
          </span>
          <div className="flex flex-col-reverse -translate-y-6 justify-start items-center space-y-4">
          <img src="/images/forms/Forms_Top_Logo.png" className="w-[6rem] h-7 translate-y-1" />
          <img src="/images/forms/Seller_Forms_Logo.png" className="w-[5.5rem] h-10 -translate-y-2"/>
          </div>
        </div>
        {/* HEADER TITLE  -------------------------------------------------------------------------------------------------- */}
        <h1 className="text-start px-8 text-2xl font-semibold text-white w-full pt-1 pb-4">Enter The Code Sent</h1>
        {/* FORM MAIN -----------------------------------------------------------------------------------------------------  */}
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col p-6 space-y-6  px-4 w-full'>
          <OtpInput
            inputStyle={{ width: '6.5rem', height: "6.5rem", borderRadius: "10px", color: "black", fontSize: "38px" }}
            containerStyle='w-full h-full flex items-center justify-start px-4 space-x-2'
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span> </span>}
            renderInput={(props) => <input {...props} />}
            placeholder='____'
          />
          <h1 className='text-white text-3xl px-5'>Until Resend 1:30</h1>
          {/* SUBMIT BUTTON  */}
          <div className="flex items-center justify-start space-x-1">
            <button type="submit" className=" w-full text-white text-2xl rounded-lg font-extrabold py-4 text-center scale-90 hover:scale-100 duration-300 hover:border border-white">Confirm</button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default SellerSignInCodePage