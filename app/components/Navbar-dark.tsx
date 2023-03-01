import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '../public/assets/images/Yatri-energy-logo-primary.png';
import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="absolute px-2 py-2.5 rounded w-full text-black z-10">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center cursor-pointer h-10">
          <Link href="/">
            <Image src={logo} alt="Yatri Logo" width={200} height={50} />
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden text-yatri-blue focus:outline-none z-10"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-10 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className={
            showMenu
              ? 'w-full md:block md:w-auto md:visible hidden'
              : 'md:block md:w-auto md:mt-0 md:h-14 mobile-navbar'
          }
          id="navbar-default"
        >
          <ul className="md:flex md:p-4 md:space-x-8 md:mt-0 md:text-xl md:font-medium font-thin">
            <NavLink href="/">Overview</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/energy-app">Mobile App</NavLink>
            <NavLink href="/host-a-charger">Host</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
