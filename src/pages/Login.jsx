import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LoginForm from '../components/auth/LoginForm';

export default function Login() {
    let navigate = useNavigate()

    const eventChangePage = (event) => {
        event.preventDefault();
        navigate("/register")
    }
    // check user if user in state return
    // html with "User already logged in"
    
    return (
        <div>
            <div>Login Page</div>
            <Link to="/register">Link to page</Link>
            <NavLink to="/register">NavLink to page</NavLink>
            <button onClick={eventChangePage}>Event based</button>
            <button onClick={
                (event) => {
                    // 
                    eventChangePage(event)
                }
            }>Event based with Callback</button>


            <div>
                <LoginForm/>
            </div>
        </div>
    )
}
