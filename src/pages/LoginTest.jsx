import React, { useEffect, useState } from 'react'
export default function LoginTest() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [message, setMessage] = useState()
    useEffect(()=>{
        setMessage("Provide information")
    }, [])
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        // logic
    }
  return (
    <div>
        {message}
        <input onChange={handleName}></input>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
