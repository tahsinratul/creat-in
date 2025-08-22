import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {

  const navMenu =() =>{
    return(
      <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/products">Products</Link></li>
        <li><Link href="/dashboard/addproducts">Add Products</Link></li>
        
      </>
    )
  }
  return (
    <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      {navMenu()}
      </ul>
    </div>
    <div className='flex items-center'>
    <p className="text-2xl pb-2">Creat</p>
  <Image src={"/assets/logo.png"} width={70} height={70} alt='logo'></Image>
  <p className='text-2xl'>In</p>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navMenu()}
    </ul>
  </div>
  <div className="navbar-end">
  <Link className='btn btn-dash btn-neutral' href="/login">Get in touch</Link>
  </div>
</div>
  )
}
