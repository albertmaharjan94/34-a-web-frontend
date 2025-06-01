import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Login from '../pages/Login'
import Register from '../pages/Register'
import MainLayout from '../layouts/MainLayout'
import StateManage from '../pages/StateManage'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/state' element={<StateManage/>}></Route>
            
            <Route element={<MainLayout/>}>
                // make a footer and apply in main layout "2025 - My App"
                // main layout will show in every routes below
                <Route path='/' element={<Homepage/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>

            
        </Routes>
    </BrowserRouter>
  )
}
