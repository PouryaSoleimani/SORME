"use client"
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';


const HomeSwiper = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation
      className='w-full'>
      <SwiperSlide><Image src='/images/swiper/SwiperSlide1.png' alt='Swiper Image' width={900} height={500} /></SwiperSlide>
      <SwiperSlide><Image src='/images/swiper/SwiperSlide2.png' alt='Swiper Image' width={900} height={500} /></SwiperSlide>
      <SwiperSlide><Image src='/images/swiper/SwiperSlide3.png' alt='Swiper Image' width={900} height={500} /></SwiperSlide>
    </Swiper>
  )
}

export default HomeSwiper