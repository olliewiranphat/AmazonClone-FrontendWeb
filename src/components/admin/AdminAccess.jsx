import { ShieldCheck } from 'lucide-react'
import React from 'react'
import ReloadingLink from '../ReloadingLink'

function AdminAccess() {
    return (
        <div className='account flex justify-start gap-2 hover:bg-slate-400 hover:font-semibold hover:text-black w-full py-[10px] px-4 hover:duration-300 rounded-sm cursor-pointer'>
            <ShieldCheck className='h-[18px]' />
            <ReloadingLink to='/admin' className='ml-1 bottom-[2px] text-[12px] cursor-pointer'>Centric Staff</ReloadingLink>
        </div>
    )
}

export default AdminAccess