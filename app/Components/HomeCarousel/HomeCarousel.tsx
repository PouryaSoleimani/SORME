import Image from 'next/image'
import React from 'react'
import HomeCarouselItem from './HomeCarouselItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeCarousel = () => {

  return (
    <div id='CarouselWrapper' className='flex items-center justify-center py-8 px-[5rem] h-[22rem]' data-aos="fade-up" data-aos-duration="800" data-aos-easing="linear">
      <div id="Carousel" className='bg-[#F29AA7] w-full h-full rounded-3xl flex items-center justify-start z-50 overflow-hidden relative'>

        {/* LEFT DIV */}
        <div id="left" className='flex items-center justify-center space-x-2 py-[6rem] px-10 h-full'>
          <Image src='/images/carousel/Left_1.png' width={500} height={500} alt='Carousel_Left_img_1' className='w-fit h-[16rem]' />
          <Image src='/images/carousel/Left_2.png' width={500} height={500} alt='Carousel_Left_img_2' className='w-fit h-[11rem]' />
        </div>


        {/* RIGHT DIV */}
        <div id="right" className='flex items-center justify-start bg-zinc-100 rounded-3xl px-2 py-1.5 translate-x-6 overflow-hidden absolute right-0'>
          <HomeCarouselItem src="/images/carousel/Right_1.png" />
          <HomeCarouselItem src="/images/carousel/Right_2.png" />
          <HomeCarouselItem src="/images/carousel/Right_3.png" />
          <HomeCarouselItem src="/images/carousel/Right_4.png" />
          <HomeCarouselItem src="/images/carousel/Right_5.png" />
        </div>


      </div>
    </div>
  )
}

export default HomeCarousel