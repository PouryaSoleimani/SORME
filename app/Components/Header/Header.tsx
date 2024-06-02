//^ HEADER =======================================================================================================================================================s
import React from 'react'
import TopHeader from './TopHeader'
import MiddleHeader from './MiddleHeader'
import ButtomHeader from './ButtomHeader'

const Header: React.FC = () => {
  return (
    <div className='overflow-hidden'>
      <TopHeader />
      <MiddleHeader />
      <ButtomHeader />
    </div>
  )
}

export default Header