import React, { Component, useEffect } from 'react'
import Corosel from '../../components/main/Corosel'
import useAuthStore from '../../store/UserStore'
import axios from 'axios'
import useCategoryStore from '../../store/CategoryStore'
import useProductStore from '../../store/ProductStore'
import { useUser } from '@clerk/clerk-react'

function HomePage() {
    const { user } = useUser()
    console.log('user', user);

    const actionGetAllCate = useCategoryStore(state => state.actionGetAllCate)
    const actionGetAllProductsDB = useProductStore(state => state.actionGetAllProductsDB)
    useEffect(() => {
        actionGetAllCate()
        actionGetAllProductsDB()
    }, [])
    const allProductsDB = useProductStore(state => state.allProductsDB)
    console.log('allProductsDB', allProductsDB);


    return (
        <>
            <div className='relative flex justify-center h-[550px]'>
                <Corosel />
                <div className=' gap-2 flex justify-center items-center absolute bg-transparent w-[85%] h-[300px] top-60'>
                    <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                        <span className='font-bold'>New year, new supplies</span>
                        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop office products</span>
                    </div>
                    <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                        <span className='font-bold'>FREE Shipping to Thailand</span>
                        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Learn more</span>
                    </div>
                    <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                        <span className='font-bold'>Get your game on</span>
                        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop gaming</span>
                    </div>
                    <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                        <span className='font-bold'>Gaming accessories</span>
                        <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                        <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>See more</span>
                    </div>
                </div>
            </div>
            {/* Row 2 */}
            <div className="w-[85%] mt-5 mx-auto flex gap-2">
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold text-[15px] mt-[2px]'>Shop for your home essentials</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Discover more in home</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>Shop deals in Fahsion</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>See all deals</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>Top categories in Kitchen appliances</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Explore all products in Kitchen</span>
                </div>
                <div className='w-[300px] bg-white p-4 flex flex-col gap-2'>
                    <span className='font-bold'>New home arrivals under $50</span>
                    <img src="https://i.ibb.co/N6ZJ9GTz/Screenshot-2025-02-24-095426.png" border="0" />
                    <span className='text-[10px] text-[#2d68a3] cursor-pointer hover:text-black hover:duration-300 account mt-2'>Shop the laset from Home</span>
                </div>
            </div>

        </>

    )
}


export default HomePage