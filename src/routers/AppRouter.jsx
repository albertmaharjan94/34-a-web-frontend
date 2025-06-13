import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'
import GuestRoute from './GuestRoute'
import NormalUserRoute from './NormalUserRoute'
import UserManagement from '../pages/admin/UserManagement'
import ProductManagement from '../pages/admin/ProductManagement'
import CategoryManagement from '../pages/admin/CategoryManagement'
import CreateCategory from '../pages/admin/CreateCategory'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/state' element={<StateManage />}></Route>

        <Route element={<MainLayout />}>
                // make a footer and apply in main layout "2025 - My App"
          // main layout will show in every routes below
          <Route path='/' element={<Homepage />}></Route>
          <Route element={<GuestRoute />}>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Register />}></Route>
          </Route>

        </Route>
        {/*
            Create RouteProtection for Admin
            create /admin/dashboard
            /admin/users
            /admin/categories
            /admin/products
            Make a new AdminLayout /src/layout
            with header -> button logout
            Apply AdminLayout for these route
            Apply Admin Route Protection for these route
            Group all admin route to /admin prefix
            If admin is logged in Guest redirect to /admin/dashboard
          */}
        <Route path='/user/*' element={<NormalUserRoute />}>
          <Route path='cart' element={<>My Cart</>} ></Route>
          <Route path='order' element={<>My Order</>} ></Route>
          <Route path='*' element={<>404 Not Found</>} ></Route>
        </Route>

        <Route path='/admin/*'>
          <Route path='user' element={<UserManagement />}></Route>
          <Route path='product' element={<ProductManagement />}></Route>
          <Route path='category' element={<CategoryManagement/>}></Route>
          <Route path='category/create' element={<CreateCategory/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
  )
}
