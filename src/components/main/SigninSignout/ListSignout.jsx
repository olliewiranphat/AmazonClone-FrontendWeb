import { SignedIn, SignOutButton } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'


function ListSignout() {









    return (
        <SignedIn>
            <ul className='py-4 hidden top-11 left-[-35px] rounded-md bg-white w-[158px] absolute group-hover:block text-black flex-col'>
                <SignOutButton className='cursor-pointer bg-[#ffd814] rounded-md w-[130px] mx-auto flex justify-center items-center h-8 text-[11px]' mode='modal'>
                    <li>Sign Out</li>
                </SignOutButton>
                <div className=' flex flex-col mt-3 gap-1  pl-8'>
                    <span className='text-[12px] font-bold mb-1'>Your Account</span>
                    <Link to='/user/update-account' className='cursor-pointer text-[11px] account text-start'>Account</Link>
                    <Link to='/user/order-history' className='cursor-pointer text-[11px] account text-start'>Order History</Link>
                    <Link to='/user/cart' className='cursor-pointer text-[11px] account text-start'>Cart</Link>
                </div>
            </ul>
        </SignedIn>
    )
}

export default ListSignout