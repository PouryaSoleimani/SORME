//^ CUSTOMER-PANEL FAVOURITE ITEM COMPONENT
import Link from 'next/link'
import React from 'react'
import { HeartOff } from 'lucide-react';

const FavouriteItem = () => {
  return (
    <div>

      <Link href="#" className="flex flex-col items-center bg-[#FFF0F3] rounded-lg md:flex-row hover:scale-110 duration-500 box-border ">
        <img className="object-cover w-full rounded-t-lg h-[15rem] md:h-[11.2rem] md:w-44 md:rounded-none md:rounded-s-lg translate-x-1" src="/images/favourites/Favourite_Item1.png" alt="Favourite_Item" />
        <div id='Favourite_Details' className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-black dark:text-white">Estee Lauder Double</h5>
          <p className="mb-3 text-xl font-semibold text-black dark:text-gray-400">Wear Powder Cream</p>
        </div>
        <div id='Favourite_Icons' className='flex flex-col justify-center items-center space-y-12 mr-2'>
          <HeartOff strokeWidth={1.5} className='bg-white p-1 w-14 h-14 rounded-2xl' />
          <img src="/images/favourites/Favourite_Icon_2.png" alt="Hide/Show" />
        </div>
      </Link>

    </div>
  )
}

export default FavouriteItem