import React from 'react'
import { Route, Routes } from 'react-router'
import NotFound from '../pages/pucblicPages/NotFound'
import HomePage from '../pages/pucblicPages/HomePage'
import Cart from '../pages/pucblicPages/Cart'
import OrderHistory from '../pages/userPages/OrderHistory'
import PublicLayout from '../layout/PublicLayout'
import UserLayout from '../layout/UserLayout'
import UserAccount from '../pages/userPages/UserAccount'
import SellerLayout from '../layout/SellerLayout'
import SellerRegister from '../pages/sellerPages/SellerRegister'
import Merchant from '../pages/sellerPages/Merchant'
import SellerDashboard from '../pages/sellerPages/SellerDashboard'
import { UserProfile } from '@clerk/clerk-react'
import AdminLayout from '../layout/AdminLayout'
import Dashboard from '../pages/adminPages/Dashboard'
import Management from '../pages/adminPages/Management'
import Settings from '../pages/adminPages/Settings'
import AddProduct from '../pages/sellerPages/sub-products/AddProduct'
import ProtectRoutes from './ProtectRoutes'


///// Manage router here : define each path for link to Page Components
function AppRouter() {
    return (
        <>
            <Routes>
                {/* PUBLIC */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />
                    {/* No login --> Signin */}
                </Route>

                {/* USER */}
                <Route path='user' element={<ProtectRoutes el={<UserLayout />} allows={["CUSTOMER", "SELLER"]} />}>
                    <Route index element={<HomePage />} />
                    <Route path='update-account' element={<UserAccount />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='cart' element={<Cart />} />
                </Route>

                {/* SELLER */}
                <Route path='seller-center' element={<ProtectRoutes el={<SellerLayout />} allows={["SELLER"]} />}>
                    <Route index element={<SellerDashboard />} />
                    <Route path='merchant' element={<Merchant />} />
                    <Route path='merchant/add-product' element={<AddProduct />} />
                </Route>

                {/* ADMIN */}
                <Route path='admin' element={<ProtectRoutes el={<AdminLayout />} allows={["ADMIN"]} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='management' element={<Management />} />
                    <Route path='settings' element={<Settings />} />
                </Route>



                {/* Not found page */}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </>
    )
}

export default AppRouter