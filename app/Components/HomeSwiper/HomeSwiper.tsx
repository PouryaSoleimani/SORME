"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '@/css/styles.css';

import { Autoplay, Navigation } from 'swiper/modules';
import { Image } from '@nextui-org/react';

const HomeSwiper = () => {
  return (
    <div className='py-6 px-4 w-screen'>
      <Swiper spaceBetween={30} rewind={true} centeredSlides={true} grabCursor={true} autoplay={{ delay: 3000, disableOnInteraction: false }} navigation={true} loop={true} modules={[Autoplay, Navigation]} className="mySwiper w-screen flex items-center justify-center">
        <SwiperSlide><Image src='/images/swiper/SwiperSlide1.png' width={1700} height={1200} className='rounded-3xl' /></SwiperSlide>
        <SwiperSlide><Image src='/images/swiper/SwiperSlide2.png' width={1700} height={1200} className='rounded-3xl' /></SwiperSlide>
        <SwiperSlide><Image src='/images/swiper/SwiperSlide3.png' width={1700} height={1200} className='rounded-3xl' /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSwiper