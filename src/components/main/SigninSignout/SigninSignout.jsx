import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import ListSignin from './ListSignin'
import ListSignout from './ListSignout'
import axios from 'axios'

function SigninSignout() {

    // const email = user?.emailAddresses[0]?.emailAddress
    // console.log(email);

    const [helloUser, setHelloUser] = useState("Welcome")


    // console.log('userID', user.id); AUTO_INCREMENT in DBs
    // console.log('firstName', user.firstName);
    // console.log('lastName', user.lastName);
    // console.log('emailAddresses', user.emailAddresses[0].emailAddress);
    // console.log('phoneNumber', user.phoneNumbers[0].phoneNumber);
    // console.log('imageUrl', user.imageUrl);


    return (

        <div className='relative group rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2 flex flex-col justify-center'>
            {/* btnSignin */}
            <SignedOut>
                <button className='flex flex-col justify-center'>
                    <span className='text-[9px]'>Hello, sign in</span>
                    <span className='text-[12px] font-bold'>Account & Lists</span>
                </button>

            </SignedOut>
            {/* btnSignout */}
            <SignedIn>

                <button className='flex justify-center'  >
                    {/* <div className="avatar">
                        <div className="w-10 rounded-full overflow-hidden">
                            <img src='' />
                        </div>
                    </div> */}
                    <div className="flex flex-col gap-2">
                        <span className='text-[9px]'>Hello, {helloUser}</span>
                        <span className='text-[12px] font-bold'>Account & Lists</span>
                    </div>
                    <ChevronDown className='text-black w-3 ' />
                </button>

            </SignedIn>

            {/* ulList Sign in*/}
            <ListSignin />
            {/* ulList */}
            <ListSignout />

        </div>

    )
}

export default SigninSignout