import { useAuth } from '@clerk/clerk-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { addCategory } from '../../api/category'

function AllCategories() {
    const { register, handleSubmit } = useForm()
    const { getToken } = useAuth()

    const createCategory = async (value) => {
        console.log('value', value);
        const token = await getToken()
        console.log('token', token);
        try {
            const response = await addCategory(token, value)
            console.log('response', response);

        } catch (error) {
            console.log(error);

        }
    }

    return (
        <div className='w-full p-4'>
            <form onSubmit={handleSubmit(createCategory)} className='flex flex-col gap-2 w-[300px] mt-4 p-4 border rounded-md border-[#232f3e]'>
                <span>Add new category</span>
                <span className='text-sm'>Category Name</span>
                <input type="text" placeholder='new category' {...register("name")} className='p-2 border border-black rounded-sm ' />
                <button className='bg-[#131921] mx-auto px-4 py-2 my-3 rounded-sm text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
            </form>
        </div>
    )
}

export default AllCategories