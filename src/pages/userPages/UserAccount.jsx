
import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useState } from 'react'
import { updateProfile } from '../../api/user';
import useAuthStore from '../../store/UserStore';
import { renderAlert } from '../../utils/renderAlert';



///// userdata, token are at Clerk!! now

function UserAccount({ checkRole }) {
    ///// Zustand : 
    const actionUpdateProflie = useAuthStore((state) => state.actionUpdateProflie) //Keep ROLE in Zustand to show State ROLE at UserSideBar
    const userData = useAuthStore(state => state.userData)
    console.log('userData', userData);
    const dateBirtday = new Date(userData?.birthday).toLocaleDateString('en-CA')
    ///// CLERK :
    const { user } = useUser()
    console.log('user', user);
    // console.log('user', user.publicMetadata.role);
    const { getToken } = useAuth()


    const [input, setInput] = useState({
        firstName: user?.firstName,  // use User data from Clerk : initial value
        lastName: user?.lastName,
        email: user?.emailAddresses[0].emailAddress,
        phoneNumber: user?.phoneNumbers[0].phoneNumber,
        birthDay: dateBirtday,
        gender: userData?.gender,
        role: user?.publicMetadata.role,
        imageUrl: user?.imageUrl,
    })
    console.log('input', input);


    const hdlOnChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }



    // Submit Form : Fill all input already:
    const hdlSubmitForm = async (event) => {
        event.preventDefault()
        ///// Check fill All?? :
        for (const key in input) {
            // console.log('value', input[key]);
            if (!input[key]) {
                return renderAlert(`Please fill ${key[0].toUpperCase() + key.slice(1)}`, "error")
            }
        }

        //// send new user data into Server for setup in database
        const token = await getToken()
        console.log('token', token);
        // console.log('input', input);
        try {
            const response = await actionUpdateProflie(token, input) //at UserStore: function Update/Create New User in DB
            // console.log('response', response);
            renderAlert("Update Seccuss", "success")
        } catch (error) {
            console.log(error);

        }

    }


    return (
        <div className='w-full p-4 '>
            <span className='account font-bold text-[18px] pl-4'>Your Account</span>
            {/* Detail */}
            <div className='flex mt-5 mb-4 mx-auto w-[75%]'>
                <form className='flex-1 flex flex-col gap-2 ' onSubmit={hdlSubmitForm}>
                    <span className='account text-2xl font-bold'>My Profile</span>
                    <span className='account text-sm text-gray-500'>Manage and protect your account</span>
                    <div className='flex items-center  justify-between gap-2 my-2'>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-1'>
                                <span>Firstname</span>
                                <input type="text" placeholder='Enter new firstname' className='bg-[#e6e6e6] h-8 w-full px-2 rounded-sm' name="firstName" value={input.firstName} onChange={hdlOnChange} />
                            </label>
                        </div>
                        <div className='flex-1'>
                            <label className='account text-xs flex flex-col gap-1'>
                                <span>Lastname</span>
                                <input type="text" placeholder='Enter new lastname' className='bg-[#e6e6e6] h-8 w-full px-2 rounded-sm' name="lastName" value={input.lastName} onChange={hdlOnChange} />
                            </label>
                        </div>

                    </div>
                    <div className='my-2'>
                        <label className='account text-xs flex flex-col gap-1'>
                            <span>Email</span>
                            <input type="email" placeholder='Enter your email' className='bg-[#e6e6e6] h-8 w-full px-2 rounded-sm' name="email" value={input.email} onChange={hdlOnChange} />
                        </label>
                    </div>
                    <div className='my-2'>
                        <label className='account text-xs flex flex-col gap-1'>
                            <span>Phone number</span>
                            <input type="text" placeholder='Enter your phone number' className='bg-[#e6e6e6] h-8 w-full px-2 rounded-sm' name="phoneNumber" value={input.phoneNumber} onChange={hdlOnChange} />
                        </label>
                    </div>
                    <div className='my-2'>
                        <label className='account text-xs flex flex-col gap-1'>
                            <span>Birthday</span>
                            <input type="date" placeholder='Enter your birthday' className='bg-[#e6e6e6] h-8 w-full px-2 rounded-sm' name="birthDay" value={input.birthDay} onChange={hdlOnChange} />
                        </label>
                    </div>
                    <div className='my-3'>
                        <label className='account text-xs flex flex-col'>
                            <span>Gender</span>
                            <div className='flex  w-full justify-evenly text-gray-700 mt-1'>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="male" onChange={hdlOnChange} />
                                    <span>Male</span>
                                </label>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="female" onChange={hdlOnChange} />
                                    <span>Female</span>
                                </label>
                                <label className='flex gap-1 items-center '>
                                    <input type="radio" name="gender" value="other" onChange={hdlOnChange} />
                                    <span>Other</span>
                                </label>
                            </div>
                        </label>
                    </div>
                    <select onChange={hdlOnChange} name="role" value={input.role}>
                        <option>CUSTOMER</option>
                        <option>SELLER</option>
                    </select>
                    {/* <button className={`mx - auto px - 4 py - 2 my - 3 rounded - sm cursor - pointer text - white ${ notSave ? "bg-[#44484d] text-red-500" : "bg-[#0a1421] hover:bg-[#febd69] hover:text-black hover:duration-300" } `} disabled={notSave}>Save</button> */}
                    <button className='mx-auto px-4 py-2 my-3 rounded-sm bg-[#0a1421] text-white hover:bg-[#febd69] hover:text-black hover:duration-300'>Save</button>
                </form>
            </div>

        </div>

    )
}

export default UserAccount