import React, { useState, useRef } from 'react'
import centric from '../../images/centriclogo.png'
import { Link } from 'react-router'
import MainSearchBar from './MainSearchBar'
import { ChevronDown, Globe, ShoppingCart } from 'lucide-react'
import SigninSignout from './SigninSignout/SigninSignout'
import OrderHisBtn from './orderhistory/OrderHisBtn'


function MainNavBar() {



    return (
        <div className='bg-[#131921] h-[60px] text-white z-50 justify-between pr-2 flex fixed top-0 w-full items-center'>
            <Link to='/' className='flex items-center justify-end h-full ' >
                < img src={centric} alt="CENTRIC" className='h-[145px] ' />
            </Link >

            <div className=' h-full flex items-center' >
                <button className='h-[80%] rounded-sm hover:bg-slate-400 hover:text-black hover:duration-300 px-2 flex flex-col items-center justify-center'>
                    <span className='text-[9px]'>Deliver to Wiranphat</span>
                    <span className='text-[12px] font-bold'>Thailand</span>
                </button>
            </div>
            {/* SearchBar */}
            < MainSearchBar />
            {/* SetLanguge */}
            <div className='flex py-2 pr-2 pl-1 h-[40px] text-[12px] items-center justify-center rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300' >
                <Globe className='h-4' />
                <span>EN</span>
            </div>

            {/* SigninSignout  */}
            <SigninSignout />

            <OrderHisBtn />
            <div className='rounded-sm hover:bg-slate-400  hover:text-black hover:duration-300 p-2  relative h-[45px] flex w-[74px]'>
                <ShoppingCart />
                <button className='absolute left-8 bottom-[2px] font-bold pr-2'>Cart</button>

            </div>
        </div >
    )
}

export default MainNavBar