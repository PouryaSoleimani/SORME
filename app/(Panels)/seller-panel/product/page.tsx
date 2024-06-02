//^ SELLER PANEL - PRODUCT PAGE
"use client"
import React from 'react'
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import SellerPanelSideBar from '@/app/Components/PanelsSideBar/SellerPanelSideBar'
import { usePathname } from 'next/navigation'
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

type Inputs = { productPhoto: string, productName: string, aboutProduct: string, productPrice: string, productDisquantity: string, productBrand: string }


const SellerPanelProductPage = () => {
  const path = usePathname()
  const pathName = path.slice(14).toLocaleUpperCase()
  console.log(pathName)

  //YUP
  const schema = yup.object().shape({
    productPhoto: yup.string().required("Profile is Required"),
    productName: yup.string().required("Current Password is Required").min(10).max(30),
    aboutProduct: yup.string().required('Full Name is Required'),
    productPrice: yup.string().required('New Password is Required'),
    productDisquantity: yup.string().required('Date Of Birth is Required'),
    productBrand: yup.string().required('Confirm Password is Required'),
  }).required();

  const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({ resolver: yupResolver(schema) })

  const onSubmit: SubmitHandler<Inputs> = (data) => { console.log(data); reset() }


  return (
    <section className='overflow-hidden'>
      <PanelsHeader />
      <SellerPanelSideBar pathname={pathName} />

      <div className='ml-[20rem] mt-[6rem] font-semibold -z-10 text-black bg-white rounded-2xl w-[50rem] h-[30rem] flex flex-col space-y-3 items-center justify-between space-x-4 pl-3 pr-4 py-4'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-6 font-semibold justify-start place-items-start bg-white px-10 pt-10 pb-0 w-full h-full'>
          {/* PRODUCT PHOTO */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-6'>
              <label htmlFor="name" className='text-xl font-bold'>Product Photo : </label>
              <input type="text" placeholder='Add File' {...register("productPhoto")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-lg  placeholder:text-black  rounded-xl w-[7rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.productPhoto && <p className='text-red-700 font-bold'>{errors.productPhoto.message}</p>}
            </span>
          </span>

          {/* PRODUCT NAME */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-6'>
              <label htmlFor="currentPassword" className='text-xl font-bold'>Product Name : </label>
              <input type="text"  {...register("productName")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.productName && <p className='text-red-700 font-bold'>{errors.productName.message}</p>}
            </span>
          </span>

          {/* ABOUT PRODUCT */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-6'>
              <label htmlFor="fullName" className='text-xl font-bold'>About Product : </label>
              <input type="text"  {...register("aboutProduct")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.aboutProduct && <p className='text-red-700 font-bold'>{errors.aboutProduct.message}</p>}
            </span>
          </span>

          {/* PRODUCT PRICE */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-8'>
              <label htmlFor="productPrice" className='text-xl font-bold'>Product Price : </label>
              <input type="text"  {...register("productPrice")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.productPrice && <p className='text-red-700 font-bold'>{errors.productPrice.message}</p>}
            </span>
          </span>

          {/* PRODUCT DISquantity */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-6'>
              <label htmlFor="productDisquantity" className='text-xl font-bold'>Product Disquantity : </label>
              <input type="text"  {...register("productDisquantity")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[10rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.productDisquantity && <p className='text-red-700 font-bold'>{errors.productDisquantity.message}</p>}
            </span>
          </span>

          {/* PRODUCT BRAND */}
          <span className='flex flex-col items-start justify-start space-y-0'>
            <span className='flex items-center justify-start space-x-6'>
              <label htmlFor="productBrand" className='text-xl font-bold'>Product Brand : </label>
              <input type="text"  {...register("productBrand")} className='px-4 py-2 flex items-center justify-center bg-[#FFF0F3] placeholder:text-2xl  placeholder:text-black  rounded-xl w-[9rem]' />
            </span>
            <span className='flex items-center justify-start' >
              {errors.productBrand && <p className='text-red-700 font-semibold'>{errors.productBrand.message}</p>}
            </span>
          </span>

          {/* <button type="submit" className='bg-[#FFF0F3] duration-500 px-2 py-2 mx-auto text-xl rounded-xl hover:bg-pink-600 text-black font-semibold'>Confirm</button> */}
        </form>

      </div>

    </section>
  )
}

export default SellerPanelProductPage