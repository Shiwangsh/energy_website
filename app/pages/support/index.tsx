/* eslint-disable react/no-unescaped-entities */
import reveal from '../../utils';
import { useEffect } from 'react';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const SupportPage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      addEventListener('scroll', reveal);
    }
    // component Will Unmount
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', reveal);
      }
    };
  }, []);
  return (
    <div className="h-full w-full">
      <Navbar />
      <div
        // src={landingPageImage}
        // alt="landing page image"
        className="border rounded-xl w-full h-screen md:object-cover brightness-50 bg-gradient-to-r from-cyan-500 to-yatri-blue"
      ></div>
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Support & Troubleshooting</h1>
        </div>
      </div>
      {/* reveal fade-bottom  */}
      <section className="text-black md:ml-20 md:flex md:items-start md:flex-col">
        <div className="flex md:items-start items-center flex-col md:w-80 mt-10">
          <h1 className="mb-2 font-black text-2xl leading-relaxed">Guides</h1>
          <hr className="w-20 mt-2 border border-yatri-blue" />
        </div>
        <div className="md:flex mt-10 md:justify-evenly w-full grid grid-rows-2 grid-flow-col gap-6">
          <Link href="/support/account-support" className=" md:hover:text-yatri-blue font-bold">
            Account Support
          </Link>
          <Link href="/support/software-updates" className=" md:hover:text-yatri-blue font-bold">
            Software Updates
          </Link>
          <Link href="/support/order-faqs" className=" md:hover:text-yatri-blue font-bold">
            Order FAQs
          </Link>
          <Link href="/support/fast-charger" className=" md:hover:text-yatri-blue font-bold">
            Fast Charger
          </Link>
        </div>
      </section>

      {/* Second section  */}

      <section className="text-black md:ml-20 md:flex md:items-start md:flex-col">
        <div className="flex md:items-start items-center flex-col md:w-80 mt-10">
          <h1 className="mb-2 font-black text-2xl leading-relaxed">Get help now</h1>
          <hr className="w-20 mt-2 border border-yatri-blue" />
          <p className="mt-10 ">Need help? Here's how you can reach us</p>
          <p className="mt-10 font-bold">Phone</p>
          <p>123456789</p>
          <p>24 hours a day / 7 days a week</p>
        </div>
      </section>

      {/* form section  */}
      <section className="text-black bg-[#F8F8F8] w-full mt-10">
        <div className="flex-center flex-col mt-10">
          <h1 className="mb-2 font-black text-2xl leading-relaxed">Don't see what you're looking for? </h1>
          <p>Fill out the from and we'll get back to you soon.</p>

          <hr className="w-96 mt-2 border border-yatri-blue" />
        </div>
        <div className="flex-center">
          <form className="md:w-96 w-full p-5 ">
            <label className="block mt-5 text-md font-medium ">Name</label>
            <input
              type="text"
              id="base-input"
              className="w-full p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out"
            />
            <label className="block mt-5 text-md font-medium">Email</label>
            <input
              type="text"
              id="base-input"
              className="w-full p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out"
            />
            <label className="block mt-5 text-md font-medium ">Phone</label>
            <input
              type="text"
              id="base-input"
              className="w-full p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out"
            />
            <label className="block mt-5 text-md font-medium ">How can we help you?</label>
            <textarea className="w-full p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out" />
            <button className="bg-yatri-blue w-[15rem] h-14 mt-4 font-bold text-lg text-white">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SupportPage;
