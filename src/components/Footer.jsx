"use client";

import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 sm:px-8 md:px-12 font-display mt-5">
      <div className="md:w-[81%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 text-sm">

        {/* Logo & Tagline */}
        <div>
        <Image src="/assets/logo.png" width={80} height={80} alt="logo"></Image>
          <h2 className="text-2xl font-bold text-white mb-2">Creat-in</h2>
          <p className="text-white">Reliable. Affordable. Fast delivery.</p>
        </div>

        {/* Company Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-white">
            <li><a  className="hover:text-green-500 transition">About Us</a></li>
            <li><a  className="hover:text-green-500 transition">Careers</a></li>
            <li><a  className="hover:text-green-500 transition">Blog</a></li>
            <li><a  className="hover:text-green-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Services</h3>
          <ul className="space-y-2 text-white">
            <li><a  className="hover:text-green-500 transition">Best Products</a></li>
            <li><a className="hover:text-green-500 transition">Luxury Package</a></li>
            <li><a  className="hover:text-green-500 transition">Airport Pickup</a></li>
            <li><a  className="hover:text-green-500 transition">Deals & Offers</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="https://www.facebook.com/tahsinfahim.ratul/" target="_blank" rel="noopener noreferrer" className="bg-slate-600  hover:bg-green-500 p-2 rounded-full transition">
              <FaFacebookF className="text-white" />
            </a>
            <a href="https://github.com/tahsinratul" target="_blank" rel="noopener noreferrer" className="bg-slate-600  hover:bg-green-500 p-2 rounded-full transition">
              <FaGithub className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/tahsin-fahim-ratul/" target="_blank" rel="noopener noreferrer" className="bg-slate-600 hover:bg-green-500 p-2 rounded-full transition">
              <FaLinkedinIn className="text-white" />
            </a>
          </div>
          <p className="text-white text-sm">Email: support@creat-in.com</p>
          <p className="text-white text-sm">Phone: +1 800 123 456</p>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-white mt-10 pt-6 text-center text-white text-xs">
        &copy; {new Date().getFullYear()} Creat-in. All rights reserved.
      </div>
    </footer>
  )
}
