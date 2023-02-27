import landingPageImage from '../../public/assets/images/1.jpg';
import sectionImage1 from '../../public/assets/images/2.jpg';
import sectionImage2 from '../../public/assets/images/3.jpg';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import reveal from '../../utils';
import { useEffect } from 'react';

const GreenCityPage = () => {
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
          <h1 className="text-white text-6xl font-bold">Our Green City</h1>
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
      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start md:h-[30rem]">
        <div className="md:w-96 md:h-full w-full ">
          <Image src={sectionImage1} alt="section-image-1" className="w-full h-full object-cover" />
        </div>
        <div className="mt-10 md:w-[30rem] h-100 m-10">
          <h1 className="text-4xl font-bold mb-4 md:text-start text-center">Title</h1>
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
          <br />
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section>

      <section className="text-black reveal fade-bottom md:ml-20 md:flex md:items-start md:h-[30rem] md:mt-36 md:mb-36">
        <div className="md:w-96 md:h-full w-full">
          <Image src={sectionImage2} alt="section-image-1" className="w-full h-full object-cover" />
        </div>
        <div className="mt-10 md:w-[30rem] m-10">
          <h1 className="text-4xl font-bold mb-4 md:text-start text-center">Title</h1>
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
          <br />
          <p>
            We make freedom of travel possible. <br />
            Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
            Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
            of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
            exceptional user experience.
          </p>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default GreenCityPage;
