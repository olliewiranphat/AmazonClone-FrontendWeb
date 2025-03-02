import { SignedOut, SignInButton, SignOutButton, SignUpButton, useUser } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { Link } from 'react-router'

function ListSignin() {
    // const { user } = useUser()
    // console.log('user', user);

    const [userData, setUserData] = useState({
        firstName: "", ///????
        lastName: "",
        email: "",
        phoneNumber: "",
        role: "CUSTOMER",
    })
    // console.log('userData', userData);

    const hdlClickSignin = () => {
        console.log("Click!!! ");

        setUserData({
            ...userData,
            firstName: user?.firstName,
            lastName: user?.lastName,
            email: user?.emailAddresses[0]?.emailAddress,
            phoneNumber: user?.phoneNumbers[0].phoneNumber,
        })
    }
    // console.log('userData', userData);
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