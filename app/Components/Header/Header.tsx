//^ HEADER =======================================================================================================================================================s
import React from 'react'
import dynamic from 'next/dynamic'
const DynamicTopHeader = dynamic(() => import('./TopHeader'), { ssr: false, })
const DynamicMiddleHeader = dynamic(() => import('./MiddleHeader'), { ssr: false, })
const DynamicButtomHeader = dynamic(() => import('./ButtomHeader'), { ssr: false, })


const Header = () => {
  return (
    <div className='overflow-hidden w-screen'>
      <DynamicTopHeader />
      <DynamicMiddleHeader />
      <DynamicButtomHeader />
    </div>
  )
}

export default Header