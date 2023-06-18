import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-transparent flex justify-between items-center px-10 text-gray-500 border-b">
      <div>
        <div className="dropdown ml-10">
          <label tabIndex={0} className="btn btn-ghost md:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-transparent  rounded-box w-52 lg:text-lg"
          >
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/about">About Us</Link>
            </li>

            <li>
              <Link href="/">Partner With Us</Link>
            </li>

            <li>
              <Link href="/">Blog</Link>
            </li>
            <li className="px-3 py-2 rounded-lg bg-blue-600 text-white">
              Download ZET
            </li>
          </ul>
        </div>
        <Link href={'/'}>
          {' '}
          <img
            className="ml-5 md:ml-0 md:w-14 lg:w-20"
            src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 lg:text-lg">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>

          <li>
            <Link href="/">Partner With Us</Link>
          </li>

          <li>
            <Link href="/">Blog</Link>
          </li>
          <li className="px-3 py-2 rounded-lg bg-blue-600 text-white">
            Download ZET
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
