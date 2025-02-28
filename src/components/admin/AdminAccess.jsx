import { ShieldCheck } from 'lucide-react'
import React from 'react'

function AdminAccess() {
    return (
        <div className='account my-4 flex  justify-start gap-2'>
            <ShieldCheck className='h-[20px]' />
            <span className='ml-1 bottom-[2px] text-[14px]  cursor-pointer w-[120px] border-transparent hover:border-b-2  hover:border-black hover:duration-75 '>Centric Staff</span>
        </div>
    )
}

export default AdminAccess