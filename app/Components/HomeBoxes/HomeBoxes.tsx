//^ HOME BOXES =======================================================================================================================================================
"use client"
import { Image } from '@nextui-org/image';
import NextImage from 'next/image'
import React from 'react'
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css';



const HomeBoxes = () => {
  AOS.init()
  return (
    <div data-aos="zoom-in-up" data-aos-duration="700" data-aos-easing="linear" className='flex items-center justify-around space-x-16 flex-grow py-10 px-24'>
      <Image as={NextImage} isZoomed src='/images/Home4Boxes/Box1.png' width={500} height={500} alt='Home-Boxes_Box1' className='rounded-2xl' />
      <Image as={NextImage} isZoomed src='/images/Home4Boxes/Box2.png' width={500} height={500} alt='Home-Boxes_Box2' className='rounded-2xl ' />
      <Image as={NextImage} isZoomed src='/images/Home4Boxes/Box3.png' width={500} height={500} alt='Home-Boxes_Box3' className='rounded-2xl ' />
      <Image as={NextImage} isZoomed src='/images/Home4Boxes/Box4.png' width={500} height={500} alt='Home-Boxes_Box4' className='rounded-2xl ' />
    </div >
  )
}

export default HomeBoxes

