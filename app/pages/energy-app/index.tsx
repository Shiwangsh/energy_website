/* eslint-disable @next/next/no-img-element */
import landingPageImage from '../../public/assets/images/mobile-app-banner.jpg';
import sectionImage1 from '../../public/assets/images/mobile-app-1.jpg';
import sectionImage2 from '../../public/assets/images/mobile-app-2.jpg';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import { useEffect } from 'react';

const MobileAppPage = () => {
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
        className="border rounded-xl w-full h-screen md:object-fill brightness-50 object-cover"
      />
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Yatri Energy App</h1>
        </div>
      </div>

      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start">
        <div className="flex md:items-start items-center flex-col md:w-80 md:h-80">
          <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Discover Yatri Energy App</h1>
          <hr className="w-20 mt-2 border border-yatri-blue" />
        </div>
        <div className="md:mt-10 md:w-[30rem] md:m-20 m-10">
          <p>
            Use the Yatri energy mobile app to schedule your home charging and find a public charging station. Sign up
            for an account to enjoy exclusive, members-only public charging features and pricing.
          </p>
        </div>
      </section>

      <section className="text-black reveal fade-bottom md:flex md:items-center">
        <div className="md:flex md:items-start md:flex-col md:w-[30rem] md:h-96 ">
          <img
            src="https://www.transparentpng.com/thumb/-iphone-x/jPIkq8-iphone-glass-lens-screen-replacement-fixez.png"
            alt="Flat white phone iphone x screen"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-10 md:w-[30rem] md:m-20 md:pl-0 pl-10">
          <h1 className="text-4xl font-bold mb-4 ">Discover yatri energy app</h1>
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section>

      {/* third section  - Banner */}

      <section className="text-black md:flex mt-10 h-[50rem]">
        <div className="md:flex md:items-center md:flex-col w-full h-80">
          <h1 className="text-4xl font-bold mb-4 reveal fade-bottom text-center">Lorem Ispsum</h1>
          <Image
            src={sectionImage1}
            alt="section-image-1"
            className="w-full h-[30rem] object-cover reveal fade-bottom border rounded-xl"
          />
          <div className="mt-10 md:w-[30rem] text-center">
            <p>
              We make freedom of travel possible. <br />
              Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
              Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
              of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
              exceptional user experience.
            </p>
          </div>
        </div>
      </section>
      {/* fourth section  */}
      <section className="text-black mt-10 w-full">
        <h1 className="text-4xl text-center font-bold mb-4">Lorem Ipsum</h1>
        <div className="md:flex md:items-start md:p-10 md:justify-center">
          <div className="mt-10 md:w-[30rem] reveal md:pr-10 fade-left ">
            <p>
              We make freedom of travel possible. <br />
              Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
              Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
              of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
              exceptional user experience
            </p>
          </div>
          <Image
            src={sectionImage2}
            alt="section-image-1"
            className="w-[30rem] h-[30rem] object-cover border rounded-md"
          />
          <p className="md:w-[30rem] md:text-start md:pl-10 md:top-[15rem] reveal fade-right">
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section>
      {/* fifth section -final */}
      <section className="text-black reveal fade-bottom mt-10">
        <h1 className="text-4xl font-bold mb-4 text-center">Lorem Ipsum</h1>
        <div className="mt-10 md:w-full md:flex md:justify-start md:items-center ">
          <div className="mt-10 md:w-[30rem] md:m-20 md:pl-0 pl-10 ">
            <h1 className="text-4xl font-bold mb-4 ">Discover yatri energy app</h1>
            <p>
              We make freedom of travel possible. <br />
              Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
              Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
              of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
              exceptional user experience.
            </p>
          </div>
          <div className="md:flex md:items-start md:flex-col md:w-[30rem] md:h-96 ">
            <img
              src="https://www.transparentpng.com/thumb/-iphone-x/jPIkq8-iphone-glass-lens-screen-replacement-fixez.png"
              alt="Flat white phone iphone x screen"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default MobileAppPage;
