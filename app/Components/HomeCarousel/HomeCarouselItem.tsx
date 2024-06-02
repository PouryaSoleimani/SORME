import Image from 'next/image'
import React from 'react'

type PropsType = { src: string }

//COMPONENT
const HomeCarouselItem: React.FC<PropsType> = (props) => {
  return (
    <div className='bg-zinc-100 flex flex-col items-center justify-center  py-1 px-3 w-[12.5rem] h-[14rem] border-r border-r-[#F29AA7]'>

      <Image src={props.src} width={500} height={500} alt='Home_Carousel_item' className='w-[55px] h-[125px]' />

      <div className='flex items-center justify-between pt-1 w-full'>
        <span id="offPercentage" className='bg-[#F29AA7] rounded-xl text-white text-sm px-2'>25%</span>
        <h1 id="newPrice" className='font-semibold text-3xl tracking-tighter'>60$</h1>
      </div>

      <div className='flex items-center justify-end w-full pr-1'>
        <h1 id="oldPrice" className='text-zinc-500 line-through '>120 $</h1>
      </div>

    </div>
  )
}

export default HomeCarouselItem

