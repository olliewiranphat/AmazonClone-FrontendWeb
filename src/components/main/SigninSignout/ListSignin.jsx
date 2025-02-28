import { SignedOut, SignInButton, useUser } from '@clerk/clerk-react'
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
            <ul className='p-2 hidden mt-24 left-[-150px] bg-white w-[300px] absolute group-hover:block text-black '>
                <SignInButton className='cursor-pointer bg-[#ffd814] rounded-md w-[60%] mx-auto flex justify-center items-center h-8' mode='modal'>
                    <button>Sign in</button>
                </SignInButton>
            </ul>
        </SignedOut>
    )
}

export default ListSignin