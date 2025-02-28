import { useAuth, useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { Pencil } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { get } from 'react-hook-form'
import { Link } from 'react-router'
import useAuthStore from '../../store/UserStore'
import ProductItem from '../../components/seller/products/ProductItem'

function Merchant() {
    const userData = useAuthStore(state => state.userData)
    console.log('userData#Merchant', userData); //want userID
    const [myAllProducts, setMyAllProducts] = useState([])

    const { getToken } = useAuth() //Get Token 
    // const { user } = useUser()
    // const { id } = user
    // // console.log('user', user);

    /// Get all products fro this SELLER in DB where userID
    const getAllproducts = async () => {
        const token = await getToken()
        console.log('token#Merchant', token);

        const response = await axios.post('http://localhost:8080/seller-center/merchant/all-products', userData, {
            headers: { Authorization: `Bearer ${token}` }
        })
        console.log('response#getAllproducts', response);
        setMyAllProducts(response.data.results)
    }

    useEffect(() => {
        getAllproducts()
    }, [])

    console.log('myAllProducts', myAllProducts);

    return (
        <div>
            <div className=' h-[100px] flex'>
                <div className='flex items-center  w-[15%]'>
                    <img src="https://i.ibb.co/1fZPjyLf/247-MART.png" alt="247-MART" className='left-2 top-5 w-[50px] h-[50px] rounded-full bg-[#e6e6e6] border-none' />
                    <Pencil className='text-gray-500  cursor-pointer left-16 absolute w-4 top-7 border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75' />
                </div>
                <div className=' flex-1'>
                    <span>Merchat Name</span>
                </div>
                <div className='w-[20%] relative'>
                    <Link to='/seller-center/merchant/add-product' className='p-3 bg-[#232f3e] rounded-md absolute bottom-0 right-3  text-white hover:bg-[#febd69] hover:text-black hover:duration-300 hover:font-bold'>Add new product</Link>
                </div>
            </div>
            {/* My All Products List */}
            <div className='bg-pink-200 h-[300px] w-full text-center p-4 flex justify-center gap-4'>
                {/* Product Item */}
                {
                    myAllProducts.map(el => <ProductItem el={el} />)
                }
            </div>
        </div>
    )
}

export default Merchant