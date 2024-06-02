// ^ ADMIN PANEL PAGE - HOME PAGE
import PanelsHeader from '@/app/Components/PanelsHeader/PanelsHeader'
import AdminPanelsSideBar from '@/app/Components/PanelsSideBar/AdminPanelSideBar'
import React from 'react'

const AdminPanelPageHome = () => {
  return (
    <div className='overflow-hidden'>
      <PanelsHeader />
      <AdminPanelsSideBar pathname={'DASHBOARD'} />

    </div>
  )
}

export default AdminPanelPageHome
