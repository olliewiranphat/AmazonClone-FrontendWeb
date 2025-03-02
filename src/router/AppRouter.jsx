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
import SellerDashboard from '../pages/sellerPages/SellerDashboard'
import AdminLayout from '../layout/AdminLayout'
import Dashboard from '../pages/adminPages/Dashboard'
import Management from '../pages/adminPages/Management'
import Settings from '../pages/adminPages/Settings'
import AddProduct from '../pages/sellerPages/sub-products/AddProduct'
import ProtectRoutes from './ProtectRoutes'
import AllProducts from '../pages/sellerPages/AllProducts'
import UpdateProduct from '../pages/sellerPages/sub-products/UpdateProduct'
import AllCustomers from '../pages/sellerPages/AllCustomers'
import OrdersRevenue from '../pages/sellerPages/OrdersRevenue'


///// Manage router here : define each path for link to Page Components
function AppRouter() {
    return (
        <>
            <Routes>
                {/* PUBLIC */}
                <Route path='/' element={<PublicLayout />}>
                    <Route index element={<HomePage />} />


                </Route>

                {/* USER */}
                <Route path='user' element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='update-account' element={<UserAccount />} />
                    <Route path='order-history' element={<OrderHistory />} />
                    <Route path='cart' element={<Cart />} />
                </Route>

                {/* SELLER */}
                <Route path='seller-center' element={<ProtectRoutes el={<SellerLayout />} allows={["SELLER"]} />}>
                    <Route index element={<SellerDashboard />} />
                    <Route path='all-products' element={<AllProducts />} />
                    <Route path='all-products/add-product' element={<AddProduct />} />
                    <Route path='all-products/update-product/:productID' element={<UpdateProduct />} />
                    <Route path='all-customers' element={<AllCustomers />} />
                    <Route path='orders-revenue' element={<OrdersRevenue />} />
                </Route>

                {/* ADMIN */}
                <Route path='admin' element={<ProtectRoutes el={<AdminLayout />} allows={["ADMIN"]} />}>
                    <Route index element={<Dashboard />} />
                    <Route path='management' element={<Management />} />
                    <Route path='settings' element={<Settings />} />
                </Route>



                {/* Not found page */}
                <Route path='*' element={<NotFound />} />
            </Routes >
        </>
    )
}

export default AppRouter