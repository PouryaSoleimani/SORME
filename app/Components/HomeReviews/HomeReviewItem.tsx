import Image from 'next/image'
import React from 'react'
type ReviewsPropType = { src: string }

const HomeReviewItem: React.FC<ReviewsPropType> = (props: ReviewsPropType) => {
  return (
    <div className='flex flex-col rounded-3xl w-[25rem] h-fit cursor-pointer hover:scale-105 duration-500'>

      <Image src={props.src} width={600} height={600} alt='Review_Image' className='w-[25rem]' />

      <div className='border-2 border-zinc-300 rounded-b-3xl pb-6'>

        <div className='flex flex-col text-center px-4 items-center justify-center border-t border-zinc-400 py-4'>
          <h2 className='text-sm text-zinc-900 font-semibold'>The Most Compelete Review of Kaman Products</h2>
        </div>

        <div className='flex items-center justify-between px-10 text-zinc-500 '>
          <p>hamid</p>
          <p>2023/10/15</p>
        </div>

      </div>

    </div>
  )
}

export default HomeReviewItem