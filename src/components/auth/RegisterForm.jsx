import React from 'react'
import { useRegisterUser } from '../../hooks/useRegisterUser'
import { useRegisterUserTan } from '../../hooks/useRegisterUserTan'

export default function RegisterForm() {
    // email, username, password, firstName, lastName
    // make input for them and pass it to handleSubmit
    // const { register, error, data, isLoading } = useRegisterUser() // manual hook
    // tanstack hooks
    const { mutate, data, error, isPending, isSuccess, isError } 
        = useRegisterUserTan()
    
    const handleSubmit = async(e) => {
        // use toast to notify user for invalid input
        // email should be in @email.com
        // password and confirmPassword should be same
        // if any input is empty notity that input is empty
        // eg: firstName is empty

        const formData = {
            // data needed for api
            email : "test123@gmail.com",
            username: "test123",
            password: "password",
            firstName: "First Name",
            lastName: "Last Name"
        }
        const result = mutate(formData) // replace register()
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
