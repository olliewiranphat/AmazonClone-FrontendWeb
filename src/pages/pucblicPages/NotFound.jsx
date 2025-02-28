import React from 'react'
import notfoundpage from '../../images/notfoundpage.png'

function NotFound() {
    return (
        <div className='bg-red-300 flex flex-col relative h-[500px]'>
            <img src={notfoundpage} alt='Not found page' className='w-[500px] right-0 absolute mt-24' />
            <button className='absolute h-10 bottom-4'>GO TO CENTRIC</button>
        </div>
    )
}

export default NotFound