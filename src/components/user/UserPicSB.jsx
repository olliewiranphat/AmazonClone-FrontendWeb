import { useUser } from '@clerk/clerk-react'
import { Pencil } from 'lucide-react'
import React from 'react'

function UserPicSB() {
    const { user } = useUser()



    return (
        <div className=' w-full p-4 flex gap-2 flex-col'>
            <div className='relative'>
                <img src={user?.imageUrl} alt='' className='absolute left-2 w-[50px] h-[50px] rounded-full bg-[#e6e6e6] border-none' />
                <Pencil className='text-gray-500  cursor-pointer left-16 absolute w-4 top-7 border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75' />
            </div>
            <div className='mt-12 border-b-[1px] border-white pb-4'>
                <span className='account text-[14px] mr-1'>{user?.firstName}</span>
                <span className='account text-[14px]'>{user?.lastName}</span>
            </div>
        </div>
    )
}

export default UserPicSB