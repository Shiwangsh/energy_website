import Link from 'next/link';
import NavLink from './NavLink';
import Image from 'next/image';
import logo from '../public/assets/images/Yatri-energy-logo-primary.png';
const Navbar = () => {
  return (
    <div className="absolute px-2 sm:px-4 py-2.5 rounded w-full text-black">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center cursor-pointer h-10">
          <Link href="/">
            <Image src={logo} alt="Yatri Logo" width={200} height={50} />
          </Link>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 z-10"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex sm:flex-col sm:p-4 sm:mt-4 sm:border sm:border-gray-100 sm:rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-xl md:font-medium md:border-0 font-thin text-black">
            {/* <li className="block py-2 pl-3 pr-4 text-white-700 text-xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-yatri-blue md:p-0">
              <NavLink href="/">Overview</NavLink>
            </li> */}
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
