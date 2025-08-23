"use client";
import { registerUser } from '@/app/actions/auth/registerUser';
import Link from 'next/link'
import React from 'react'

export default function RegisterForm() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        await registerUser({ name, email, password });
        // console.log({ name, email, password })
    };
    return (
        <form
  onSubmit={handleSubmit}
  className="w-full max-w-md mx-auto p-8 bg-white shadow-xl rounded-2xl space-y-6 sm:space-y-8"
>
  <h2 className="text-3xl font-extrabold text-center text-gray-800">
    Create Your Account
  </h2>

  {/* Name */}
  <label className="form-control w-full">
    <span className="label-text font-semibold text-gray-700">Name</span>
    <input
      type="text"
      placeholder="Enter your name"
      className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
      name="name"
      required
    />
  </label>

  {/* Email */}
  <label className="form-control w-full">
    <span className="label-text font-semibold text-gray-700">Email</span>
    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
      required
    />
  </label>

  {/* Password */}
  <label className="form-control w-full">
    <span className="label-text font-semibold text-gray-700">Password</span>
    <input
      type="password"
      name="password"
      placeholder="Enter your password"
      className="input input-bordered w-full rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
      required
    />
  </label>

  {/* Sign Up Button */}
  <button className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-xl hover:scale-105 transform transition-all shadow-md hover:shadow-lg">
    Sign Up
  </button>

  {/* OR Divider */}
  <div className="flex items-center justify-center space-x-4">
    <hr className="w-1/3 border-gray-300" />
    <span className="text-gray-500 font-medium">Or Sign In with</span>
    <hr className="w-1/3 border-gray-300" />
  </div>

  {/* Social login placeholder */}
  {/* <SocialLogin /> */}

  {/* Login Link */}
  <p className="text-center text-gray-600">
    Already have an account?{" "}
    <Link href="/login" className="text-blue-500 font-bold hover:underline">
      Login
    </Link>
  </p>
</form>

    )
}
