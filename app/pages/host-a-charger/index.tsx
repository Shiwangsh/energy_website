/* eslint-disable react/no-unescaped-entities */
import landingPageImage from '../../public/assets/images/home-product-1.jpg';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import { useEffect } from 'react';

const HostChargerPage = () => {
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
      <Image
        src={landingPageImage}
        alt="landing page image"
        className="border rounded-xl w-full h-screen object-cover brightness-50"
      />
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Host a charger</h1>
        </div>
      </div>
      <section className="text-black bg-[#F8F8F8] w-full mt-10  reveal fade-bottom">
        <div className="flex-center flex-col">
          <h1 className="mb-2 font-black text-2xl leading-relaxed mt-10">Apply to Host </h1>
          <p>Fill out the from and we'll get back to you soon.</p>

          <hr className="w-96 mt-2 border border-yatri-blue" />
        </div>

        {/* form div  */}
        <div className="flex-center">
          <form className="md:w-96 p-5 ">
            <label className="block mt-5 text-md font-medium ">Name</label>
            <input
              type="text"
              id="base-input"
              className="w-full p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out"
              required
            />
            <label className="block mt-5 text-md font-medium">Phone Number</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out"
              required
            />
            <label className="block mt-5 text-sm font-medium">Email</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out"
              required
            />
            <label className="block mt-5 text-md font-medium">Company Name</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out"
              required
            />
            <label className="block mt-5 text-md font-medium">Property Type</label>
            <select
              id="base-input"
              className="p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out"
            >
              <option value="">Please select one</option>
            </select>
            <label className="block mt-5 text-md font-medium">Property Address</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out"
              required
            />
            <label className="block mt-5 text-md font-medium">Additional Comments</label>
            <textarea className="h-56 p-2.5 w-full focus:outline-yatri-blue outline-none duration-300 ease-in-out" />

            <div className="flex items-center h-5 mt-6">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 mr-5 "
                required
              />

              <label htmlFor="terms" className="text-sm font-medium text-gray-900 ">
                I understand and agree with to{' '}
                <a href="#" className="underline hover:text-yatri-blue">
                  Yatri's Privacy Notice
                </a>
                {' and '}
                <a href="#" className="underline hover:text-yatri-blue">
                  Terms of Use
                </a>
              </label>
            </div>

            <button className="bg-yatri-blue w-[15rem] h-14 mt-8 font-bold text-lg text-white">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HostChargerPage;
