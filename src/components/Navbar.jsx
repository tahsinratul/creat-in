"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navMenu = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    ...(session ? [{ name: "Add Products", href: "/dashboard/addproducts" }] : []),
  ];

  const linkClass = (href) =>
    pathname === href
      ? "text-green-500 font-bold underline"
      : "text-black";

  return (
    <div className="navbar bg-white px-4 md:px-55 flex justify-between items-center py-4">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold">Creat</p>
        <Image src="/assets/logo.png" width={50} height={50} alt="Logo" />
        <p className="text-2xl font-bold">In</p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-6 font-bold">
        {navMenu.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={linkClass(item.href)}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <div className="lg:hidden relative">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="btn btn-ghost p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {dropdownOpen && (
          <ul className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50 font-bold">
            {navMenu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block px-4 py-2 ${linkClass(item.href)}`}
                  onClick={() => setDropdownOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {session ? (
              <li>
                <button
                  onClick={() => {
                    signOut({ callbackUrl: "/" });
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-red-500"
                >
                  Logout ({session.user.name})
                </button>
              </li>
            ) : (
              <li>
                <Link
                  href="/login"
                  className="block px-4 py-2 text-green-500"
                  onClick={() => setDropdownOpen(false)}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>

      {/* Desktop Logout/User */}
      <div className="hidden lg:flex items-center gap-4">
        {session && (
          <>
            <span className="font-semibold">{session.user.name}</span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600 transition font-semibold"
            >
              Logout
            </button>
          </>
        )}
        {!session && (
          <Link
            href="/login"
            className="bg-green-500 text-black px-4 py-2 rounded-full hover:bg-green-600 transition font-semibold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
