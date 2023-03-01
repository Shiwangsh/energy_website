import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from '../public/assets/images/Yatri-energy-logo-secondary.png';

const Footer = () => {
  return (
    <footer className="p-4 mt-10 bg-black rounded-lg w-full h-auto">
      <div className="md:flex w-full h-full">
        <div className="w-80 h-20">
          <Link href="/">
            <Image src={logo} className="w-full h-full object-cover" alt="Yatri Energy Logo" />
          </Link>
          <div className="flex space-x-6 text-white mt-2 items-center justify-evenly">
            <Link href="/" className="hover:text-yatri-blue">
              <BsYoutube />
            </Link>
            <Link href="/" className="hover:text-yatri-blue">
              <BsInstagram />
            </Link>
            <Link href="/" className="hover:text-yatri-blue">
              <BsTwitter />
            </Link>
            <Link href="/" className="hover:text-yatri-blue">
              <BsLinkedin />
            </Link>
            <Link href="/" className="hover:text-yatri-blue">
              <BsFacebook />
            </Link>
          </div>
        </div>

        <div className="h-full md:w-56 md:mt-0 mt-10">
          <h2 className="mb-4 text-sm font-semibold uppercase text-white">Resources</h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/host-a-charger" className="hover:underline">
                Host a Charger
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/energy-app" className="hover:underline">
                Mobile App
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/products" className="hover:underline">
                Home Products
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/become-a-member" className="hover:underline">
                Become a Member
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline">
                Support and Troubleshooting
              </Link>
            </li>
            <li>
              <Link href="/green-city" className="hover:underline">
                Our Green City
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-full md:w-56 md:mt-0 mt-10">
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/mission" className="hover:underline font-semibold text-white">
                Our Mission
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="hover:underline font-semibold text-white">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline font-semibold text-white ">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div className="h-full md:w-96 md:mt-0 mt-10">
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">Get our Newsletter</h2>
          <p className="mb-6 text-xs text-white">
            Be the first to receive the latest Yatri Motorcycles news, events and product updates and more.
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email Address"
              className=" h-10 focus:outline-yatri-blue outline-none duration-300 ease-in-out placeholder:font-bold placeholder:px-2 md:w-[70%] w-full
                "
            />
            <button className="bg-yatri-blue ml-2 md:w-[50%] w-full">Subscribe</button>
          </div>
        </div>
      </div>

      {/* mobile footer bottom links */}
      <div className="flex-center justify-evenly md:mt-0 mt-8">
        <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
          Privacy
        </Link>
        <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
          Terms of use
        </Link>
        <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
          Support 123456789
        </Link>
      </div>
      <span className="text-sm text-gray-400 flex-center">
        <Link href="https://yatrimotorcycles.com/" className="hover:underline">
          Yatri Energy
        </Link>{' '}
        © 2023
      </span>
    </footer>
  );
};
export default Footer;
