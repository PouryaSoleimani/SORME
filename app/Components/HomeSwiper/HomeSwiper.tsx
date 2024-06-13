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
      <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 3000, disableOnInteraction: false }} navigation={true} loop={true} modules={[Autoplay, Navigation]} className="mySwiper">
        <SwiperSlide><Image src='/images/swiper/SwiperSlide1.png' width={1200} height={800} className='rounded-3xl w-screen' /></SwiperSlide>
        <SwiperSlide><Image src='/images/swiper/SwiperSlide2.png' width={1200} height={800} className='rounded-3xl w-screen' /></SwiperSlide>
        <SwiperSlide><Image src='/images/swiper/SwiperSlide3.png' width={1200} height={800} className='rounded-3xl w-screen' /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default HomeSwiper