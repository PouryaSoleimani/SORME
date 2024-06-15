//^ HOME BOXES =======================================================================================================================================================
"use client"
import React, { useEffect, useLayoutEffect } from 'react'
import { Image } from '@nextui-org/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';


const HomeBoxes = () => {
  useLayoutEffect(() => { Aos.init() }, [Aos])
  return (
    <span data-aos="zoom-in-up" data-aos-duration="400" data-aos-easing="linear" className='flex items-center justify-around space-x-16 flex-grow py-10 px-24'>
      <Image isZoomed src='/images/Home4Boxes/Box1.png' width={500} height={500} alt='Home-Boxes_Box1' className='rounded-2xl' />
      <Image isZoomed src='/images/Home4Boxes/Box2.png' width={500} height={500} alt='Home-Boxes_Box2' className='rounded-2xl ' />
      <Image isZoomed src='/images/Home4Boxes/Box3.png' width={500} height={500} alt='Home-Boxes_Box3' className='rounded-2xl ' />
      <Image isZoomed src='/images/Home4Boxes/Box4.png' width={500} height={500} alt='Home-Boxes_Box4' className='rounded-2xl ' />
    </span >
  )
}

export default HomeBoxes

