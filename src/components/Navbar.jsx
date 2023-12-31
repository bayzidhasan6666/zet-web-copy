import Link from 'next/link';
import NavLink from './NavLink';

const Navbar = () => {
  return (
    <div className="navbar bg-transparent flex justify-between items-center md:px-10 text-gray-500 border-b">
      <div>
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white text-center z-20  rounded-box  lg:text-lg"
          >
            <li>
              <NavLink exact activeClassName="text-blue-600" href="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="text-blue-600" href="/about">
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="text-blue-600" href="#">
                Partner With Us
              </NavLink>
            </li>

            <li>
              <NavLink exact activeClassName="text-blue-600" href="#">
                Blog
              </NavLink>
            </li>
            <li className="px-3 py-2 text-sm rounded-lg bg-blue-600 text-white">
              Download ZET
            </li>
          </ul>
        </div>
        <Link href={'/'}>
          {' '}
          <img
            className="ml-5 w-14 mt-2 md:ml-0 md:w-14 lg:w-20"
            src="https://zetapp.in/_next/static/media/zet_new_logo.7adcc993.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 lg:text-lg">
          <li>
            <NavLink exact activeClassName="text-blue-600" href="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="text-blue-600" href="/about">
              About Us
            </NavLink>
          </li>

          <li>
            <NavLink exact activeClassName="text-blue-600" href="#">
              Partner With Us
            </NavLink>
          </li>

          <li>
            <NavLink exact activeClassName="text-blue-600" href="#">
              Blog
            </NavLink>
          </li>
          <li>
            <button className="px-3 text-sm py-2 rounded-lg bg-blue-600 text-white lg:mt-1">
              Download ZET
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
