import React from 'react'
import MainNavBar from '../components/main/MainNavBar'
import SecondNavBar from '../components/main/SecondNavBar'
import { Outlet } from 'react-router'
import Footer from '../components/main/Footer'
import SideBarDashboard from '../components/admin/SideBarDashboard'

function AdminLayout() {
    return (
        <>
            <div>
                <MainNavBar />
            </div>
            <div className='mt-[60px] flex flex-col'>
                <SecondNavBar />
            </div>
            <div className='flex'>
                <SideBarDashboard />
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}

export default AdminLayout