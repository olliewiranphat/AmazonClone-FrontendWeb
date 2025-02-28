import { useUser } from '@clerk/clerk-react'
import { LayoutDashboard } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';

function SideBarDashboard() {
    const { user } = useUser()
    console.log('user', user.fullName);

    return (
        <div className='w-[300px] p-4 bg-[#131921] flex flex-col gap-4 text-white pb-6'>
            <div className='flex flex-col gap-2'>
                <div className='font-bold w-full text-[16px]'>ADMIN</div>
                <span className='text-center w-full text-md pb-3 border-b-[1px] text-[16px]'>{user.fullName}</span>
            </div>
            <div className='flex gap-3 mt-4'>
                <LayoutDashboard />
                <span>Overview</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Order & Transaction</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span> Seller Management</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Customer Management</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Product Management </span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Payments & Fees</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Reports & Analytics</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>Marketing & Promotion</span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <span>System & Security </span>
            </div>
            <div className='flex gap-3'>
                <LayoutDashboard />
                <Link to='/admin/settings'>Settings</Link>
            </div>
        </div>

    )
}

export default SideBarDashboard