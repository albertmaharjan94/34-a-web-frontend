import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../auth/AuthProvider";
import { useContext } from "react";

import React from 'react'

export default function GuestRoute() {
    const { user, loading } = useContext(AuthContext)

    if (loading) return <>Loading</>

    if(user?.role == "normal") return <Navigate to="/user/cart" />

    // if user is logged in redirect to "/"
    if(user) return <Navigate to="/"/>

    // if user is normal redirect to /user/cart


    // return as it is
    return <Outlet/>
}
