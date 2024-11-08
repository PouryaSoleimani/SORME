"use client"
//^ FOOTER COMPONENT
import Image from 'next/image'
import Link from 'next/link'
import 'aos/dist/aos.css';

const Footer = () => {
  return (
    <div className='py-4 px-20 bg-pink-100 overflow-hidden' data-aos="fade-up" data-aos-duration="400">

      <div id="top" className='flex items-center justify-between w-full'>
        <Link href='/'>
          <Image src='/images/header/SORMELOGO.png' width={500} height={100} alt='Sorme Logo' className='w-[135px] h-[40px] hover:scale-110 duration-500 cursor-pointer' />
        </Link>

        <div className='flex items-center justify-start space-x-6'>
          <img src="/images/footer/Email_Logo.png" alt="Email Logo" className='w-12 h-12' />
          <h1 className='text-3xl leading-loose text-zinc-600 font-semibold'>Email Address :</h1>
        </div>

        <div className='flex items-center justify-start space-x-6'>
          <img src="/images/footer/PhoneCall_Logo.png" alt="Phone Call Logo" className='w-12 h-12' />
          <h1 className='text-3xl leading-loose text-zinc-600 font-semibold'>Phone Call :</h1>
        </div>

      </div>

      <div id="middle" className='flex items-center justify-between w-full py-4'>
        <div id="middleLeft" className='flex items-center justify-start space-x-8 w-1/3'>
          <img src="/images/footer/middleLeft_1.png" alt="E-Namad Logo" className='w-24 h-24' />
          <img src="/images/footer/middleLeft_2.png" alt="Organization Logo" className='w-24 h-24' />
          <img src="/images/footer/middleLeft_3.png" alt="Samandehi Logo" className='w-24 h-24' />
        </div>

        <div id="middleRight" className='flex items-center justify-between w-2/3 pl-24 -translate-y-10 tracking-tight font-extralight'>
          <h2 className='text-3xl leading-loose text-zinc-500 font-semibold'>info@sorme.com</h2>
          <h2 className='text-3xl leading-loose text-zinc-500 font-semibold'>02177111258</h2>
        </div>
      </div>

      <div id="buttom" className='text-center text-sm py-2'>
        <h3 className='text-zinc-900'>All Material and Intellectual Rights of this Website are Reserved for "Sormeh" ©2020-2024</h3>
        <h3 className='text-zinc-900'>Created Using React.js & Next.js by <Link href="https://github.com/PouryaSoleimani" className='text-blue-800 underline font-bold'>Pourya Soleimani</Link></h3>
      </div>
    </div>
  )
}

export default Footer


