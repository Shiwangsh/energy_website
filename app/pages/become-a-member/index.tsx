import Image from 'next/image';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import sectionImage1 from '../../public/assets/images/mobile-app-1.jpg';
import map from '../../public/assets/images/map.jpg';

import { BsArrowRight } from 'react-icons/bs';

import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import TitleSide from '@/components/TitleSide';
import HeroTitle from '@/components/HeroTitle';

const MemberPage = () => {
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
        className="border rounded-xl w-full h-screen md:object-cover brightness-50 bg-gradient-to-r from-cyan-500 to-blue-500"
      ></div>
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Become a member</h1>
        </div>
      </div>
      <TitleSide
        title="Pricing & Plans"
        subTitle="some text"
        paragraph="We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience."
      />
      {/* <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start">
        <div className="flex md:items-start items-center flex-col md:w-80 md:h-80">
          <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Pricing & Plans</h1>
          <p className="italic">some text</p>
          <hr className="w-20 mt-2 border border-yatri-blue" />
        </div>
        <div className="md:mt-10 md:w-[30rem] md:m-20 m-10">
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section> */}
      {/* */}
      <section className="text-black reveal fade-bottom  bg-[#F8F8F8] w-full">
        <div className="flex items-center justify-center text-center flex-col ">
          <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Our Plans</h1>
          <hr className="w-20 mt-2 border border-yatri-blue" />
        </div>

        {/* Plans  */}
        <div className="md:flex md:justify-center md:items-center w-full ">
          <div className="md:mt-10 md:w-[30rem] md:h-[20rem] border-2  m-10 p-4 bg-white">
            <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Guest Member</h1>
            <hr />
            <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Free</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error est totam nisi at temporibus enim aut ad
            </p>
            <button className="bg-yatri-blue w-36 h-10 text-white mb-10 rounded-3xl md:float-right">See More</button>
          </div>
          {/* ..  */}
          <div className="md:mt-10 md:w-[30rem] md:h-[20rem] border-2 p-2 m-10 bg-white">
            <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Pass+ member</h1>
            <hr />
            <h1 className="text-2xl font-bold mb-4 flex items-center m-2 flex-wrap mt-10 ">
              Rs. 99<p className="font-normal text-sm mt-4">/month</p>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error est totam nisi at temporibus enim aut ad
            </p>
            <button className="bg-yatri-blue w-36 h-10 text-white mb-10 rounded-3xl md:float-right">See More</button>
          </div>
        </div>
      </section>
      {/* banner  */}
      <section className="w-full md:h-[20rem] mt-20 reveal fade-bottom">
        <Image src={sectionImage1} alt="sectionImage1" className="w-full h-full object-cover brightness-50" />
        {/* reveal fade-right */}
        <div className="w-full md:-translate-y-[15rem] md:text-white ">
          <div className="md:h-[10rem] reveal fade-right md:font-bold ">
            <h1 className="font-bold text-2xl leading-relaxed text-center">Get premium offers in the app</h1>
            <p className="text-md leading-relaxed text-center">
              We make freedom of travel possible. <br />
              Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
              Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
              of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
              exceptional user experience.
            </p>
            <a href="#" className="text-center text-yatri-blue flex items-center justify-center font-bold">
              Get the app
              <BsArrowRight className="m-2" />
            </a>
          </div>
        </div>
      </section>
      <HeroTitle
        title="Locate Our Charging Station"
        subTitle="Find Us"
        paragraph=" We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            <br/>
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. 
            <br/>
            Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience."
      />
      <section className="text-black reveal fade-bottom">
        <div className="flex items-center flex-col mt-10">
          <select
            name="city"
            id=""
            className="bg-white-50 border border-gray-700 text-gray-900 text-sm focus:border-yatri-blue w-80 p-2.5"
          >
            <option value="null">Find Us In Your City</option>
          </select>
          <div className="mt-10 w-3/4 h-3/4">
            <Image src={map} alt="landing page image" className=" border rounded-xl w-full h-full" />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MemberPage;
