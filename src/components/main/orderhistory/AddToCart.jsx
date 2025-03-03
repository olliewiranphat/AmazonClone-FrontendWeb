import { SignInButton, useAuth } from '@clerk/clerk-react'
import React from 'react'
import { Link } from 'react-router'

function AddToCart({ thisProduct }) {
    const { userId } = useAuth()
    console.log('thisProduct', thisProduct);
    const { categoryID, updatedAt, description, price, productName, userID, productImage, stockQuantity } = thisProduct[0]


    if (!userId) {
        return (
            <SignInButton mode='modal' forceRedirectUrl='/user/cart'>
                <button className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
                    <span>Add to Cart</span>
                </button>
            </SignInButton>
        )
    }



    return (
        <Link to='/user/cart' className='flex justify-center cursor-pointer account text-[12px] px-4 py-1 mx-auto'>
            <span>Add to Cart</span>
        </Link>

    )

}

export default AddToCart