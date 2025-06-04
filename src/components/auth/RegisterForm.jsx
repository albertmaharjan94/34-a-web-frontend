import React from 'react'
import { useRegisterUser } from '../../hooks/useRegisterUser'
export default function RegisterForm() {
    // email, username, password, firstName, lastName
    // make input for them and pass it to handleSubmit
    const { register, error, data, isLoading } = useRegisterUser()
    const handleSubmit = async(e) => {
        const formData = {
            // data needed for api
            email : "test123@gmail.com",
            username: "test123",
            password: "password",
            firstName: "First Name",
            lastName: "Last Name"
        }
        const result = await register(formData)
        if(result){
            // another view logic eg: for navigation
        }
    }
    return (
        <div>
            <button onClick={handleSubmit}>Register</button>
            {/* conditional render */}
            {error && <p>{error.message}</p>}
            {data && <p>{data.message}</p>}
        </div>
    )
}
