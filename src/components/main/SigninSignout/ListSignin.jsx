import { SignedOut, SignInButton, SignUpButton } from '@clerk/clerk-react'
import React from 'react'

function ListSignin() {

    return (
        <SignedOut>
            <ul className='p-2 hidden mt-[110px] left-[-42px] bg-white w-[150px] absolute group-hover:block text-black'>
                <SignInButton className='cursor-pointer bg-[#ffd814] rounded-md w-[130px] mx-auto flex justify-center items-center h-8' mode='modal'>
                    <button>Sign in</button>
                </SignInButton>
                <div className='text-[9px] mt-2 pl-2'>
                    <span className='mr-1'>New Customer?</span>
                    <SignUpButton mode='modal'><span className='cursor-pointer font-semibold underline text-blue-600'>Start here</span></SignUpButton>
                </div>
            </ul>
        </SignedOut>
    )
}

export default ListSignin