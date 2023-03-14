/* eslint-disable react/no-unescaped-entities */
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
      <div className="parallax m-2 bg-[url('../public/assets/images/home-product-1.jpg')] brightness-50 rounded-lg"></div>
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Host a charger</h1>
        </div>
      </div>
      <section className="text-black bg-[#F8F8F8] m-2 reveal fade-bottom rounded-lg">
        <div className="md:flex-center md:flex-col  ml-10 overflow-hidden">
          <h1 className="mt-20 md:w-[40rem] font-black text-2xl leading-relaxed">Apply to Host</h1>
          <p className="md:w-[40rem]">Fill out the from and we'll get back to you soon.</p>

          <hr className="w-[40rem] mt-2 border border-yatri-blue" />
        </div>

        {/* form div  */}
        <div className="md:flex-center ml-10 overflow-hidden">
          <form className="md:w-[40rem] w-full m-2">
            <label className="block mt-5 text-md font-medium ">Name</label>
            <input
              type="text"
              id="base-input"
              className="md:w-full w-[90%] p-2.5 focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
              required
            />
            <label className="block mt-5 text-md font-medium">Phone Number</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
              required
            />
            <label className="block mt-5 text-sm font-medium">Email</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
              required
            />
            <label className="block mt-5 text-md font-medium">Company Name</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
              required
            />
            <label className="block mt-5 text-md font-medium">Property Type</label>
            <select
              id="base-input"
              className="p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
            >
              <option value="">Please select one</option>
            </select>
            <label className="block mt-5 text-md font-medium">Property Address</label>
            <input
              type="text"
              id="base-input"
              className="p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md"
              required
            />
            <label className="block mt-5 text-md font-medium">Additional Comments</label>
            <textarea className="h-36 p-2.5 md:w-full w-[90%] focus:outline-yatri-blue outline-none duration-300 ease-in-out rounded-md" />

            <div className="flex items-center h-5 mt-6">
              <input
                id="terms"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 mr-5 "
                required
              />

              <label htmlFor="terms" className="text-sm font-medium text-gray-900 ">
                I understand and agree to{' '}
                <a href="#" className="underline hover:text-yatri-blue">
                  Yatri's Privacy Notice
                </a>
                {' and '}
                <a href="#" className="underline hover:text-yatri-blue">
                  Terms of Use
                </a>
              </label>
            </div>

            <button className="bg-yatri-blue w-[15rem] h-14 mt-8 mb-8 font-bold text-lg text-white">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HostChargerPage;
