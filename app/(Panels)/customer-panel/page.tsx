// ^ CUSTOMER PANEL PAGE - HOME PAGE
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import CustomerPanelsSideBar from '@/app/Components/PanelsSideBar/CustomerPanelsSideBar'
import React from 'react'

const CustomerPanelPage = () => {
  return (
    <div className='overflow-hidden'>
      <PanelsHeader />
      <CustomerPanelsSideBar pathname={'DASHBOARD'} />

    </div>
  )
}

export default CustomerPanelPage