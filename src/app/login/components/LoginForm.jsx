"use client";
import Link from 'next/link';
import React from 'react'
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";

import { useRouter } from 'next/navigation';
export default function LoginForm() {
     const router = useRouter();
    const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    toast("Submitting ....");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      });
      if (response.ok) {
        toast.success("Logged In successfully");
        router.push("/");
        form.reset();
      } else {
        toast.error("FAILED to Log In");
      }
      //console.log({ email, password });
    } catch (error) {
      console.log(error);
      toast.error("FAILED to Log In");
    }
}
  return (
    <form
  onSubmit={handleSubmit}
  className="w-full max-w-md mx-auto p-8 bg-white shadow-2xl rounded-2xl space-y-6 sm:space-y-8"
>
  <h2 className="text-3xl font-extrabold text-center text-gray-800">
    Welcome Back
  </h2>

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

  {/* Sign In Button */}
  <button className="w-full py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-xl hover:scale-105 transform transition-all shadow-md hover:shadow-lg">
    Sign In
  </button>

  {/* OR Divider */}
  {/* <div className="flex items-center justify-center space-x-4">
    <hr className="w-1/3 border-gray-300" />
    <span className="text-gray-500 font-medium">Or Sign In with</span>
    <hr className="w-1/3 border-gray-300" />
  </div> */}

  {/* Social login placeholder */}
  {/* <div className="flex justify-center gap-4">
      <FaGoogle className="text-2xl text-red-500 cursor-pointer hover:scale-110 transition-transform" />
      <FaGithub className="text-2xl text-gray-800 cursor-pointer hover:scale-110 transition-transform" />
  </div> */}

  {/* Register Link */}
  <p className="text-center text-gray-600">
    Don't have an account?{" "}
    <Link href="/register" className="text-blue-500 font-bold hover:underline">
      Register
    </Link>
  </p>
</form>

  )
}
