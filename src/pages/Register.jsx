import React from 'react'
import RegisterForm from '../components/auth/RegisterForm'

export default function Register() {
  // if user already logged in return html with
  // "User already logged in"
  return (
    <div>
      Register
      <RegisterForm />
    </div>
  )
}
