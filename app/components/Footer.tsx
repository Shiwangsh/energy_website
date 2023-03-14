import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from '../public/assets/images/Yatri-energy-logo-secondary.png';

const Footer = () => {
  return (
    <footer className="mt-10 w-full bg-black border-8 rounded-2xl border-white overflow-hidden reveal fade-bottom">
      <div className="md:flex md:items-start md:justify-evenly footer-container ">
        <div className="h-full -translate-y-12 md:w-56 ">
          <div className="">
            <Link href="/">
              <Image src={logo} className="w-32 h-full object-fill " alt="Yatri Energy Logo" />
            </Link>
          </div>
          <div className="flex w-32 space-x-6 text-xs text-white items-center md:justify-evenly ">
            <Link href="https://www.youtube.com/channel/UCobm2KxuXOFnM-fGLgSDn5A" className="hover:text-yatri-blue">
              <BsYoutube />
            </Link>
            <Link href="https://www.instagram.com/yatrimotorcycles/" className="hover:text-yatri-blue">
              <BsInstagram />
            </Link>
            <Link href="https://twitter.com/YATRIdesign" className="hover:text-yatri-blue">
              <BsTwitter />
            </Link>
            <Link href="https://www.linkedin.com/company/yatrimotorcycles/mycompany/" className="hover:text-yatri-blue">
              <BsLinkedin />
            </Link>
            <Link href="https://www.facebook.com/YATRImotorcycles" className="hover:text-yatri-blue">
              <BsFacebook />
            </Link>
          </div>
        </div>

        <div className="h-full md:w-56 w-full md:mt-0 mt-10  text-start">
          <ul className="text-white text-base font-medium">
            <li className="mb-4 ">
              <Link href="/host-a-charger" className="hover:underline">
                Host a Charger
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/become-a-member" className="hover:underline">
                Become a Member
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-full md:w-56 w-full md:mt-0 mt-10 text-start">
          <ul className="text-white text-base font-medium">
            <li className="mb-4">
              <Link href="/energy-app" className="hover:underline">
                Mobile App
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/products" className="hover:underline">
                Home Products
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/green-city" className="hover:underline">
                Our Green City
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/mission" className="hover:underline">
                Our Mission
              </Link>
            </li>
          </ul>
        </div>

        <div className="h-full md:w-56 w-full md:mt-0 mt-10 text-sm text-start">
          <ul className="text-white">
            <li className="mb-4">
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms-of-use" className="hover:underline ">
                Terms of use
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline ">
                Help and support
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/contact" className="hover:underline text-white text-base font-medium">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/become-a-member#faqs" className="hover:underline text-base font-medium text-white ">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr className="md:w-[75rem] my-2 mx-auto border border-gray-700 " />
      <span className="text-sm text-white flex-center w-full my-6">
        <Link href="https://yatrimotorcycles.com/" className="hover:underline">
          Yatri Energy
        </Link>
        © 2023
      </span>

      {/* NewsLetter  */}
      {/* <div className="h-full md:w-[30rem] w-full md:mt-0 mt-10">
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">Get our Newsletter</h2>
          <p className="mb-6 text-xs text-white">
            Be the first to receive the latest Yatri Motorcycles news, events and product updates and more.
          </p>
          <div className="md:flex">
            <input
              type="text"
              placeholder="Email Address"
              className=" h-10 focus:outline-yatri-blue outline-none duration-300 ease-in-out placeholder:font-bold placeholder:px-2 md:w-96 w-[95%]"
            />
            <button className="bg-yatri-blue md:ml-2 md:w-[10rem]  text-white w-[95%] md:mt-0 mt-4 h-10">
              Subscribe
            </button>
          </div>
        </div> */}

      {/* mobile footer bottom links */}
      {/* <div className="flex-center justify-evenly mt-4 text-sm w-full">
        <Link href="#" className="hover:underline text-white md:w-[25%]">
          Privacy
        </Link>
        <Link href="#" className="hover:underline text-white md:w-[25%]">
          Terms of use
        </Link>
        <Link href="#" className="hover:underline text-white md:w-[25%]">
          Support 123456789
        </Link>
      </div>
      <span className="text-sm text-white flex-center w-full mt-6">
        <Link href="https://yatrimotorcycles.com/" className="hover:underline">
          Yatri Energy
        </Link>{' '}
        © 2023
      </span> */}
    </footer>
  );
};
export default Footer;
