import React from 'react'
import RegisterForm from './components/RegisterForm'

export default function page() {
  return (
    <>
     <h1 className="text-3xl font-bold text-center my-8">Register</h1>
    

        {/* Right Section */}
        <div className="col-span-12 md:col-span-6 flex justify-center items-center">
          <RegisterForm />
        </div>
      
    </>
  )
}
