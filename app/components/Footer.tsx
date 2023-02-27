import Image from 'next/image';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import logo from '../public/assets/images/Yatri-energy-logo-secondary.png';
// import { faFacebook, faInstagram, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  // return (
  //   <footer className="p-4 mt-10 bg-black rounded-lg w-full md:h-96">
  //     <div className="md:flex w-full h-full">
  //       <div className="bg-green-200">
  //         <Link href="/">
  //           <Image src={logo} className="w-80 h-20 object-cover" alt="Yatri Energy Logo" />
  //         </Link>
  //         <div className="flex space-x-6 text-white mt-2 items-center justify-evenly">
  //           {/* <div className="w-4 mt-10 flex grow bg-blue-700"> */}
  //           <Link href="/" className="hover:text-yatri-blue">
  //             <BsYoutube />
  //           </Link>
  //           <Link href="/" className="hover:text-yatri-blue">
  //             <BsInstagram />
  //           </Link>
  //           <Link href="/" className="hover:text-yatri-blue">
  //             <BsTwitter />
  //           </Link>
  //           <Link href="/" className="hover:text-yatri-blue">
  //             <BsLinkedin />
  //           </Link>
  //           <Link href="/" className="hover:text-yatri-blue">
  //             <BsFacebook />
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="md:flex items-start justify-evenly md:w-full md:h-full bg-red-300">
  //         <div className="m-4 h-full  bg-red-400">
  //           <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
  //           <ul className="text-gray-400">
  //             <li className="mb-4">
  //               <Link href="/host-a-charger" className="hover:underline">
  //                 Host a Charger
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/energy-app" className="hover:underline">
  //                 Mobile App
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/pricing" className="hover:underline">
  //                 Pricing
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/products" className="hover:underline">
  //                 Home Products
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/member" className="hover:underline">
  //                 Become a Member
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/support" className="hover:underline">
  //                 Support and Troubleshooting
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/green-city" className="hover:underline">
  //                 Our Green City
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="m-14">
  //           <ul className="text-gray-400">
  //             <li className="mb-4">
  //               <Link href="/mission" className="hover:underline font-semibold text-white">
  //                 Our Mission
  //               </Link>
  //             </li>
  //             <li className="mb-4">
  //               <Link href="/contact" className="hover:underline font-semibold text-white">
  //                 Contact Us
  //               </Link>
  //             </li>
  //             <li>
  //               <Link href="/faq" className="hover:underline font-semibold text-white ">
  //                 FAQs
  //               </Link>
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="mt-14 md:w-92 ">
  //           <h2 className="mb-6 text-sm font-semibold uppercase text-white">Newsletter</h2>
  //           <div className="flex">
  //             <input
  //               type="text"
  //               placeholder="Email Address"
  //               className=" h-10 focus:outline-yatri-blue placeholder:font-bold placeholder:px-2
  //               transition-all duration-500 ease-in-out outline:none md:w-[70%]
  //               "
  //             />
  //             <button className="bg-yatri-blue ml-2 md:w-[30%]">Subscribe</button>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //     {/* <div className="flex items-center justify-between md:visible invisible">
  //       <span className="text-sm text-gray-400 text-center">
  //         <Link href="https://yatrimotorcycles.com/" className="hover:underline">
  //           Yatri Energy
  //         </Link>{' '}
  //         © 2023
  //       </span>
  //       <Link href="#" className="hover:underline text-gray-400">
  //         Privacy
  //       </Link>
  //       <Link href="#" className="hover:underline text-gray-400">
  //         Terms of use
  //       </Link>
  //       <Link href="#" className="hover:underline text-gray-400">
  //         Support 123456789
  //       </Link>
  //     </div> */}
  //     {/* mobile footer bottom links */}
  //     <div className="flex-center justify-evenly md:mt-0 mt-8">
  //       <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
  //         Privacy
  //       </Link>
  //       <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
  //         Terms of use
  //       </Link>
  //       <Link href="#" className="hover:underline text-gray-400 md:w-[25%]">
  //         Support 123456789
  //       </Link>
  //     </div>
  //     <span className="text-sm text-gray-400 mt-10 flex-center">
  //       <Link href="https://yatrimotorcycles.com/" className="hover:underline">
  //         Yatri Energy
  //       </Link>{' '}
  //       © 2023
  //     </span>
  //   </footer>
  // );

  return (
    <footer className="p-4 mt-10 bg-black rounded-lg w-full h-auto">
      <div className="md:flex w-full h-full">
        <div className="w-80 h-20">
          <Link href="/">
            <Image src={logo} className="w-full h-full object-cover" alt="Yatri Energy Logo" />
          </Link>
          <div className="flex space-x-6 text-white mt-2 items-center justify-evenly">
            {/* <div className="w-4 mt-10 flex grow bg-blue-700"> */}

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
              <Link href="/member" className="hover:underline">
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
        <div className="h-full w-96 md:mt-0 mt-10">
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

{
  /*
 -------------
   {/* <Link href="#" className="text-gray-500 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link> */
}
