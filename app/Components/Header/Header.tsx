//^ HEADER =======================================================================================================================================================s
import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import ButtomHeader from './ButtomHeader'

const Header = () => {
  return (
    <div className='overflow-hidden w-screen'>
      <TopHeader />
      <MiddleHeader />
      <ButtomHeader />
    </div>
  )
}

export default Header