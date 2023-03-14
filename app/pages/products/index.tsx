import landingPageImage from '../../public/assets/images/3.jpg';
import homeProduct1 from '../../public/assets/images/home-product-2.jpg';
import homeProduct2 from '../../public/assets/images/home-product-1.jpg';
import homeProduct3 from '../../public/assets/images/charging.jpg';

import Image from 'next/image';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import 'transition-style';

import reveal from '../../utils';
import { useEffect } from 'react';
import TitleSide from '@/components/TitleSide';

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
      <div className="parallax m-2 bg-[url('../public/assets/images/3.jpg')] brightness-50 rounded-lg"></div>
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Home Products</h1>
        </div>
      </div>
      <TitleSide
        title="Helping elminate the barriers"
        subTitle="to enable the inevitable"
        paragraph=<p>
          We make freedom of travel possible. <br />
          Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
          Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end of
          2022. Ultimately, our aim is to continuously expand our partner network in all geographies to provide
          exceptional user experience.
        </p>
      />
      {/**General specification section**/}
      <section className="text-black md:h-screen md:w-full mt-20 md:flex-center">
        <div className="h-full md:w-[30rem] md:m-8 m-2 ">
          <Image src={homeProduct1} alt="homeProduct1" className="h-full md:w-[30rem] object-contain rounded-lg" />
        </div>
        <div className="md:w-[40rem] md:h-[80%] text-start mt-10 md:ml-0 ml-20">
          <h1 className="text-4xl font-extrabold">General Specification</h1>
          <p className="italic">to enable the inevitable</p>
          <div className="md:grid md:grid-cols-2 md:gap-16 leading-relaxed text-start mt-10 md:ml-0 ml-2">
            <div className="h-36 w-60 text-lg reveal fade-right">
              <ul>
                <li>Statistiques</li>
                <li>Score </li>
                <li>Kilometers Traveled </li>
                <li>Distance Traveled</li>
              </ul>
            </div>

            <div className="h-36 w-60 text-lg reveal fade-right">
              <ul>
                <li> Location</li>
                <li> GPS Navigator </li>
                <li>Plan your trip </li>
                <li> Save your favourite trips</li>
              </ul>
            </div>
            <div className="h-36 w-60 text-lg reveal fade-right">
              <ul>
                <li>Battery charge available </li>
                <li>Required battery charge </li>
                <li>Recommendations</li>
                <li>360º sensors</li>
              </ul>
            </div>
            <div className="h-36 w-60 text-lg reveal fade-right ">
              <ul>
                <li>My profile</li>
                <li> User ID </li>
                <li> Notifications</li>
                <li> Notice in case of theft or accident</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="text-black reveal fade-bottom md:flex-center mt-20 w-full">
        <div className="h-full md:w-[30rem] md:m-8 m-2">
          <Image src={homeProduct3} alt="homeProduct3" className="h-full w-full object-contain rounded-lg" />
        </div>
        <div className="md:w-[40rem] md:h-[80%] md:text-start mt-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Discover yatri energy app</h1>
          <p className="md:p-0 p-2">
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
