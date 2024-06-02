// ^ SELLER PANEL PAGE - HOME PAGE
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import SellerPanelSideBar from '@/app/Components/PanelsSideBar/SellerPanelSideBar'
import React from 'react'

const CustomerPanelPage = () => {
  return (
    <div className='overflow-hidden'>
      <PanelsHeader />
      <SellerPanelSideBar pathname={'DASHBOARD'} />

    </div>
  )
}

export default CustomerPanelPage