import { useUser } from '@clerk/clerk-react';
import { BellRing, HandCoins, Pencil, Rows4, TicketPercent, User } from 'lucide-react';
import React from 'react'
import SellerAccess from '../seller/SellerAccess';
import AdminAccess from '../admin/AdminAccess';
import useAuthStore from '../../store/UserStore';
import UserPicSB from './UserPicSB';

function UserSideBar() {
    const role = useAuthStore((state) => state.userData.role)
    console.log('role', role);

    const { user } = useUser()
    // console.log('user', user);

    return (
        < div className='flex-1 flex flex-col items-center bg-[#131921] text-white pr-5 h-full' >
            {/* User Picture */}
            <UserPicSB />

            <div className='w-full pl-4 mt-3'>
                <div className='account flex items-center gap-1 relative'>
                    <User className='h-[20px]' />
                    <span className=' absolute pl-9 bottom-[-3px] text-[14px]'>Account</span>
                </div>
                <ul className='pl-9 flex flex-col gap-3 mt-4 mb-5 text-[11px]'>
                    <li className='block pb-1 w-[40px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Profile</li>
                    <li className='block pb-1 w-[77px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Bank & Cards</li>
                    <li className='block pb-1 w-[45px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Addresses</li>
                    <li className='block pb-1 w-[100px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Change Password</li>
                    <li className='block pb-1 w-[88px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Private Settings</li>
                    <li className='block pb-1 w-[114px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Notification Settings</li>
                </ul>
                <div className='account my-4 flex justify-start gap-2 '>
                    <Rows4 className='h-[20px]' />
                    <span className='ml-1 bottom-[2px] text-[14px] cursor-pointer w-[93px] border-transparent hover:border-b-2  hover:border-black hover:duration-75'>My Purchase</span>
                </div>
                <div className='account my-4 flex  justify-start gap-2 '>
                    <BellRing className='h-[20px]' />
                    <span className='ml-1 bottom-[2px] text-[14px] cursor-pointer w-[85px] border-transparent hover:border-b-2  hover:border-black hover:duration-75 '>Notifications</span>

                </div>
                <div className='account my-4 flex  justify-start gap-2'>
                    <TicketPercent className='h-[20px]' />
                    <span className=' ml-1 bottom-[2px] text-[14px] cursor-pointer w-[90px] border-transparent hover:border-b-2  hover:border-black hover:duration-75'>My Discount</span>
                </div>
                <div className='account my-4 flex  justify-start gap-2'>
                    <HandCoins className='h-[20px]' />
                    <span className='ml-1 bottom-[2px] text-[14px]  cursor-pointer w-[120px] border-transparent hover:border-b-2  hover:border-black hover:duration-75 '>My Centric Coins</span>
                </div>
                {/* Show SELLER Access */}
                {
                    role == "SELLER" && <SellerAccess />
                }

                {/* Show ADMIN Access  */}
                {
                    role == "ADMIN" && <AdminAccess />
                }
            </div>
        </div >
    )
}

export default UserSideBar