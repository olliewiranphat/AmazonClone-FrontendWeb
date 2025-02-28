import { PackageSearch, Pencil, Store, User } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';
import useAuthStore from '../../store/UserStore';
import UserPicSB from '../user/UserPicSB';

function SellerSideBar() {




    return (
        < div className='flex-1 flex flex-col items-center bg-[#131921] text-white pr-5 h-full' >
            {/* User Picture */}
            <UserPicSB />

            <div className='w-full pl-4 mt-3  flex flex-col gap-4'>
                {/* Merchant */}
                <div className='flex relative mb-2'>
                    <Store className='h-[18px]' />
                    <Link to='/seller-center/merchant' className=' absolute pl-9 bottom-[-1px] text-[12px]'>Merchant</Link>
                </div>

                <div>
                    <div className='account flex items-center gap-1 relative'>
                        <User className='h-[20px]' />
                        <span className=' absolute pl-9 bottom-[-3px] text-[12px]'>Account</span>
                    </div>
                    <ul className='pl-9 flex flex-col gap-3 mt-4 mb-5 text-[11px]'>
                        <li className='block pb-1 w-[40px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Profile</li>
                        <li className='block pb-1 w-[77px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Bank & Cards</li>
                        <li className='block pb-1 w-[45px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Addresses</li>
                        <li className='block pb-1 w-[100px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Change Password</li>
                        <li className='block pb-1 w-[88px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Private Settings</li>
                        <li className='block pb-1 w-[114px] cursor-pointer border-transparent hover:border-b-2  hover:border-black hover:duration-75'>Notification Settings</li>
                    </ul>
                </div>

            </div>
        </div >
    )
}

export default SellerSideBar