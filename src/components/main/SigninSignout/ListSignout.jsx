import { SignedIn, SignOutButton, useAuth } from '@clerk/clerk-react'
import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'


function ListSignout() {
    const navigate = useNavigate()
    const hdlGetAccount = async () => {
        navigate('/user/update-account')
    }








    return (
        <SignedIn>
            <ul className='p-4 hidden mt-40 left-[-100px] rounded-sm bg-white w-[300px] absolute group-hover:block text-black '>
                <SignOutButton className='cursor-pointer bg-[#ffd814] rounded-md w-[60%] mx-auto flex justify-center items-center h-8' mode='modal'>
                    <li>Sign Out</li>
                </SignOutButton>
                <div className=' flex flex-col mt-3 gap-1'>
                    <span className='text-[12px] font-bold'>Your Account</span>
                    <button onClick={hdlGetAccount} className='cursor-pointer text-[11px] account text-start pl-3'>Account</button>
                </div>
            </ul>
        </SignedIn>
    )
}

export default ListSignout