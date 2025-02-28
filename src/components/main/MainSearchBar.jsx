import React, { useState } from 'react'
import { ChevronDown, Search } from 'lucide-react'

function MainSearchBar() {
    const [showAll, setShowAll] = useState(false)
    const hdlClickAll = () => {
        console.log("All");
        setShowAll(!showAll)
    }

    const renderAll = (<div className='p-3 overflow-y-auto max-h-[300px] absolute flex flex-col text-black bg-white rounded-md left-[270px] top-12 border-black border-[1px]'>
        <a href="#" >All Departments</a>
        <a href="#">Arts & Crafts</a>
        <a href="#" >Automotive</a>
        <a href="#">Baby</a>
        <a href="#"> Beauty & Personal Care</a>
        <a href="#" >Books</a>
        <a href="#">Boys' Fashion</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
        <a href="#">Computers</a>
    </div >)

    return (
        <>
            <div className='overflow-hidden w-[50%] h-[40px] rounded-sm relative flex items-center'>
                <button onClick={hdlClickAll} className='absolute text-black bg-[#e3e6e6] h-[39px] flex items-center justify-center px-2'>
                    <span>All</span>
                    <ChevronDown className='w-3 mx-1' />
                </button>
                <input type="text" placeholder='Search Centric' className='flex-1 h-full text-sm text-black pl-[90px]' />
                <div className='w-[40px] bg-[#FEBD69] flex items-center justify-center h-[40px] absolute right-0'>
                    <Search className='text-gray-800' />
                </div>
            </div>
            {showAll && renderAll}
        </>
    )
}

export default MainSearchBar