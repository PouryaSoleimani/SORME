//^ CUSTOMER-PANEL-FAVOURITES
"use client"
import FavouriteItem from '@/app/Components/FavouriteItem/FavouriteItem'
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import { usePathname } from 'next/navigation'
import React from 'react'

const CustomerPanelFavourites = () => {
  const path = usePathname()
  const pathName = path.slice(16).toLocaleUpperCase()
  console.log(pathName)


  return (
    <section className='overflow-x-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={pathName} />
      <div className='ml-[22rem] mt-24 -z-10 text-black w-[80%] py-6 pr-16 grid grid-cols-2 place-items-center gap-y-8'>
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
        <FavouriteItem />
      </div>
    </section>

  )
}

export default CustomerPanelFavourites