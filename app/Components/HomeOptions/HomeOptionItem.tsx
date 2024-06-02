import Image from 'next/image'
import React from 'react'
type OptionsPropsType = { src: string, title: string, desc: string }



const HomeOptionItem: React.FC<OptionsPropsType> = (props: OptionsPropsType) => {
  return (
    <div className='flex items-center space-x-4 hover:scale-105 duration-500 cursor-pointer'>

      <Image src={props.src} width={60} height={60} alt='Options_Icon' className='w-auto h-auto' />

      <div className='flex flex-col space-y-2'>
        <h1 className='font-bold text-lg'>{props.title}</h1>
        <p className='text-xs text-zinc-600'>{props.desc}</p>
      </div>

    </div>
  )
}

export default HomeOptionItem