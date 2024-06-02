// ^ HOME SWIPER COMPONENT
import Image from 'next/image';
import React from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import 'animate.css';

//COMPONENT ===================================================================================================================================
const HomeSwiper = () => {
  return (
    <>
      <div data-hs-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true , "loop":true }' className="relative animate__animated animate__fadeInUp h-[40rem]">
        <div className="hs-carousel relative overflow-hidden w-full min-h-[40rem] bg-white rounded-lg">
          <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">

            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 px-2 py-8 dark:bg-neutral-900">
                <Image src='/images/swiper/SwiperSlide1.png' width='500' height='300' alt='Swiper Slide 1' priority  className='w-[90%] h-full rounded-3xl' />
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 px-2 py-8 dark:bg-neutral-800">
                <Image src='/images/swiper/SwiperSlide2.png' width='500' height='300' alt='Swiper Slide 2' priority className='w-[90%] h-full rounded-3xl' />
              </div>
            </div>

            <div className="hs-carousel-slide">
              <div className="flex justify-center h-full bg-gray-100 px-2 py-8 dark:bg-neutral-700">
                <Image src='/images/swiper/SwiperSlide3.png' width='500' height='300' alt='Swiper Slide 3' priority className='w-[90%] h-full rounded-3xl' />
              </div>
            </div>

          </div>
        </div>


        {/* NAVIGATION */}
        <button type="button" className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800  rounded-s-lg ">
          <span className="text-2xl" aria-hidden="true"><FaChevronLeft className='text-black h-12 w-12' /></span>
        </button>

        <button type="button" className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 rounded-e-lg dark:text-white">
          <span className="text-2xl" aria-hidden="true"><FaChevronRight className='text-black h-12 w-12' /></span>
        </button>

      </div>
    </>
  )
}

export default HomeSwiper