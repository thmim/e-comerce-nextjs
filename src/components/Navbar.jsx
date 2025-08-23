"use client";
import { signOut, useSession } from "next-auth/react";
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  const { data: session, status } = useSession();
    const links = <>
    
    <li><Link href="/">Home</Link></li>
    <li><Link href="/products">Products</Link></li>
    <li><Link href="/dashboard/add-product">Add Products</Link></li>
    
    </>
  return (
    <div className="navbar md:px-16 py-3">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="text-3xl font-bold">SportsHut</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal font-bold flex gap-10">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
     <ul className="menu menu-horizontal px-1">
            {status == "authenticated" ? (
              <>
                {/* <li>
                  <Image
                    src={session?.user?.image}
                    width={50}
                    height={50}
                    alt="user-logo"
                  />
                </li> */}
                <li className="btn bg-blue-500 rounded-xl" 
                onClick={() => signOut()}>
                  Log Out
                  </li>
              </>
            ) : (
              <>
                <li className="btn bg-blue-500 rounded-xl hidden lg:block">
                  <Link href={"/register"}>Register</Link>
                </li>
                <li className="btn bg-blue-500 rounded-xl">
                  <Link href={"/login"}>Login</Link>
                </li>
              </>
            )}
          </ul>
  </div>
</div>
  )
}
