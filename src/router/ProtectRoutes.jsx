import { SignInButton, useAuth, useUser } from '@clerk/clerk-react'
import React from 'react'
import { renderAlert } from '../utils/renderAlert';
import { Link } from 'react-router';

function ProtectRoutes({ el, allows }) {

    const { user } = useUser()
    // console.log('user', user);

    const role = user?.publicMetadata.role

    // console.log('role', role);


    const { isSignedIn, isLoaded } = useAuth()
    if (!isLoaded) {
        return <h1>Loading...</h1>
    }

    if (!allows.includes(role)) {
        return (
            <div className='flex flex-col gap-2 m-auto  mt-[20%]'>
                <span>Access Denied!!</span>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }


    if (!isSignedIn) {
        return (
            <div>
                <span>Access Denied!!</span>
                <SignInButton mode='madal'>
                    <span>Please Sigin in</span>
                </SignInButton>
            </div>
        )
    }
    return el
}

export default ProtectRoutes