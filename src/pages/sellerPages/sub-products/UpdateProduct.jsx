import { useParams } from 'react-router'
import { Loader, Pencil } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { useAuth } from '@clerk/clerk-react'
import { useForm } from 'react-hook-form'
import { resizeFile } from '../../../utils/resizer'
import { updateImages } from '../../../api/images'
import { renderAlert } from '../../../utils/renderAlert'
import useCategoryStore from '../../../store/CategoryStore'

function UpdateProduct() {
    const { productID } = useParams()
    const allCategories = useCategoryStore(state => state.allCategories)
    const renderAllCategories = allCategories.map(el => {
        return (<option value={el.categoryID} key={el.categoryID}>{el.name}</option>)
    })
    const { register, handleSubmit, reset } = useForm()
    const [imageData, setImageData] = useState([])
    const [loading, setLoading] = useState(false)
    const usePencil = useRef()
    const [showImage, setShowImage] = useState(false)
    const { getToken } = useAuth()
    const hdlUpdateImage = async (e) => {
        const token = await getToken()
        setLoading(!loading)
        const files = e.target.files
        console.log('files', files);
        let allImages = []
        for (let i = 0; i < files.length; i++) {
            await resizeFile(files[i]).then(async (resizedImage) => {
                const response = await updateImages(token, resizedImage)
                console.log('response >>>>>', response);
                setLoading(false)
                allImages.push(response.data.results)
            })
        }
        setImageData([...imageData, ...allImages])
        setShowImage(true)
    }
    console.log('imageData', imageData);
    const renderImg = imageData.map((el, inx) => {
        return (<div key={inx} className="relative w-[150px] h-[150px]">
            <img src={el.secure_url} className='w-full h-full object-cover' />
            <button onClick={() => hdlDeleteImg(el.public_id)} className='bg-[#a4a5a5] hover:bg-[#dddddd] hover:duration-300 hover:text-red-500 rounded-full w-7 h-7 flex items-center justify-center absolute right-[-10px] top-[-10px] text-xl text-white'>x</button>
        </div>)
    })
    const noneImage = (<div className='flex justify-center items-center gap-2 w-[150px] rounded-sm border border-[#a4a5a5] border-dashed h-[150px]'>
        <span className='text-[30px] text-[#b1b2b2]'>+</span>
    </div>)

    const hdlFormUpdateProduct = () => {
        console.log("Update");

    }

    return (<div className='h-[700px] flex flex-col gap-2 p-5 px-6 mb-96'>
        <span className='account font-bold text-[18px]'>Update Product</span>
        <form onSubmit={handleSubmit(hdlFormUpdateProduct)} className='pl-5 mt-4'>
            <div className='flex relative text-[12px] mb-5 '>
                <span>Product Images</span>
                <input onChange={hdlUpdateImage} ref={usePencil} type='file' className='hidden  w-[100px] h-[100px] bg-[#e6e6e6] border-none' multiple />
                <Pencil onClick={() => usePencil.current.click()} className='text-gray-500  cursor-pointer absolute w-4 left-[96px] bottom-[-1px] border-transparent hover:border-b-2 hover:border-gray-500 hover:duration-75' />
                {loading && <Loader className='animate-spin top-[-5px] left-[124px] absolute text-[#a4a5a5]' />}
            </div>
            <div className='w-full h-[150px] flex gap-4'>
                {showImage === false && noneImage}
                {showImage === true && renderImg}
            </div>
            {/* Product Detail */}
            <label className='flex flex-col gap-2 mt-9'>
                <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Product Name</span>
                <input {...register("productName")} type="text" className='border border-[#a4a5a5] w-[90%] h-7 rounded-sm px-4 text-[10px]' placeholder='product name' />
            </label>
            <label className='flex flex-col gap-2 mt-7'>
                <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Description</span>
                <textarea {...register("description")} type="text" className='border border-[#a4a5a5] w-[90%] h-16 rounded-sm px-4 py-1 text-justify text-[10px]' placeholder='what is this product about?' />
            </label>
            <label className='flex flex-col gap-2 mt-7'>
                <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Category</span>
                <select {...register("categoryID")} className='text-[11px] px-2 py-1 w-[90%] rounded-[5px]'>
                    {renderAllCategories}
                </select>
            </label>
            <div className='flex mt-7 w-[90%] gap-2'>
                <label className='flex flex-col flex-1 gap-2'>
                    <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Price ($)</span>
                    <input {...register("price")} type="text" className='w-full border border-[#a4a5a5] h-7 rounded-sm px-4 text-[10px]' placeholder='$ xxxxx.xx' />
                </label>
                <label className='flex flex-col flex-1 gap-2'>
                    <span className='text-[11px]'><span className='text-red-700 mr-1'>*</span>Stock Quatity</span>
                    <input {...register("stockQuantity")} type="text" className='flex-1 border border-[#a4a5a5] w-full h-7 rounded-sm px-4 text-[10px]' placeholder='fill number' />
                </label>
            </div>
            <div className='flex mt-9 gap-2 w-[90%] justify-center'>
                <button className='transition-transform duration-300  hover:scale-125 px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
            </div>
        </form>
    </div>)
}
export default UpdateProduct