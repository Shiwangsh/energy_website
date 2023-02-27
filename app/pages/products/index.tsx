import landingPageImage from '../../public/assets/images/3.jpg';
import homeProduct1 from '../../public/assets/images/home-product-2.jpg';
import homeProduct2 from '../../public/assets/images/home-product-1.jpg';
import homeProduct3 from '../../public/assets/images/charging.jpg';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import reveal from '../../utils';
import { useEffect } from 'react';

const ProductsPage = () => {
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
        className="border rounded-xl w-full h-screen md:object-cover brightness-50"
      />
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Home Products</h1>
        </div>
      </div>

      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start">
        <div className="flex md:items-start items-center flex-col md:w-80 md:h-80">
          <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Helping elminate the barriers</h1>
          <p className="italic">to enable the inevitable</p>
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
      </section>

      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-center md:justify-center md:h-[60rem]">
        <div className="h-full w-[30rem] ">
          <Image src={homeProduct1} alt="homeProduct1" className="h-full w-full object-cover rounded-lg" />
        </div>
        <div className="md:w-[65%] md:h-full md:relative md:m-20 ">
          <h1 className="text-4xl font-bold">General Specification</h1>
          <p className="italic">to enable the inevitable</p>
          <div className="md:flex w-full h-full md:justify-between md:items-center md:flex-wrap p-4">
            <p className="md:w-96 text-start">
              We make freedom of travel possible. Yatri Energy’s vision for the future is an open charging network that
              is accessible to every EV users. Starting with 7 kW in-house developed AC chargers
            </p>
            <p className="md:w-96 text-start">
              We make freedom of travel possible. Yatri Energy’s vision for the future is an open charging network that
              is accessible to every EV users. Starting with 7 kW in-house developed AC chargers
            </p>
            <p className="md:w-96 text-start">
              We make freedom of travel possible. Yatri Energy’s vision for the future is an open charging network that
              is accessible to every EV users. Starting with 7 kW in-house developed AC chargers
            </p>
            <p className="md:w-96 text-start">
              We make freedom of travel possible. Yatri Energy’s vision for the future is an open charging network that
              is accessible to every EV users. Starting with 7 kW in-house developed AC chargers
            </p>
          </div>
        </div>
      </section>

      <section className="text-black md:flex">
        <div className="md:flex md:items-center md:flex-col w-full md:h-[50rem] md:mt-20">
          <h1 className="text-4xl font-bold mb-4 reveal fade-bottom text-center">Lorem Ispsum</h1>
          <Image
            src={homeProduct2}
            alt="homeProduct2"
            className="w-full h-[30rem] object-cover reveal fade-bottom border rounded-xl"
          />
          <div className="mt-10 md:w-[60rem] md:h-[20rem] text-center">
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

      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-center">
        <div className="flex items-start flex-col w-80 h-80">
          <Image src={homeProduct3} alt="homeProduct3" className="h-full w-full object-contain" />
          {/* <Image src={sectionImage1} alt="section-image-1" className="h-full w-full object-contain" /> */}
        </div>
        <div className="mt-10 md:w-[30rem] md:m-20">
          <h1 className="text-4xl font-bold mb-4">Discover yatri energy app</h1>
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
