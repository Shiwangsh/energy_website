import Navbar from '@/components/Navbar';
import Image from 'next/image';
import landingPageImage from '../public/assets/images/charging.jpg';
import trees from '../public/assets/images/trees.jpg';
import one from '../public/assets/images/1.jpg';
import two from '../public/assets/images/2.jpg';
import three from '../public/assets/images/3.jpg';
import four from '../public/assets/images/4.jpg';
import six from '../public/assets/images/6.jpg';
import map from '../public/assets/images/map.jpg';

import PageLayout from './PageLayout';
import { useEffect } from 'react';
import reveal from '../utils';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function Home() {
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
    <PageLayout>
      <main>
        <div className="h-full w-full">
          <Navbar />
          <Image src={landingPageImage} alt="landing page image" className=" border rounded-xl" />
          <div className="caption">
            <div className="caption-title">
              <h1 className="text-white text-6xl font-bold">Travel Boldly</h1>
              <button
                type="button"
                className="transition-all duration-200 ease-in-out hover:scale-110 text-white border border-white hover:bg-yatri-blue focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10 "
              >
                <span className="font-sm m-4">LEARN MORE</span>
              </button>
            </div>
          </div>

          <section className="text-black reveal fade-bottom">
            <div className="flex items-center flex-col">
              <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Helping elminate the barriers</h1>
              <p className="italic">to enable the inevitable</p>
              <hr className="w-20 mt-2 border border-yatri-blue" />
            </div>
            <div className="mt-10 text-center">
              <p>
                We make freedom of travel possible. <br />
                Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by
                end of 2022. <br />
                Ultimately, our aim is to continuously expand our partner network in all geographies to provide
                exceptional user experience.
              </p>
            </div>
            <div className="w-full h-60 mt-20">
              <Image src={trees} alt="trees" className="w-full h-full object-cover brightness-50" />

              <div className="w-full -translate-y-[10rem] items-center text-center text-white flex justify-around">
                <div className="reveal fade-left">
                  <h1 className="font-normal text-5xl  mb-2">20+</h1>
                  <p>Fast Chargers</p>
                </div>
                <div className="reveal fade-bottom">
                  <h3 className="font-normal text-5xl  mb-2">40+</h3>
                  <p>AC Chargers</p>
                </div>
                <div className="reveal fade-right">
                  <h3 className="font-normal text-5xl mb-2">15+</h3>
                  <p>Stations</p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-black reveal fade-bottom">
            <div className="flex items-center flex-col">
              <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Learn more about charging</h1>
              <p className="italic">with Yatri Energy</p>
              <hr className="w-20 mt-2 border border-yatri-blue" />
            </div>

            <div className="mt-2">
              <div className="w-full h-full justify-center flex flex-row">
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={one}
                      alt="2"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                  </Link>
                  <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                    Our Green City
                  </p>
                </div>
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={two}
                      alt="2"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                    <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                      Mobile App
                    </p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={three}
                      alt="2"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                    <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                      Home Products
                    </p>
                  </Link>
                </div>
              </div>
              <div className="w-full h-full justify-center flex flex-row mt-10">
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={four}
                      alt="4"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                    <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                      Become A Member
                    </p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={landingPageImage}
                      alt="5"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                    <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                      Our Vision/Mission/About Us
                    </p>
                  </Link>
                </div>
                <div className="text-center group">
                  <Link href="/">
                    <Image
                      src={six}
                      alt="6"
                      className="m-2 w-[30rem] h-[25rem] object-cover group-hover:brightness-50 transition ease-in-out"
                    />
                    <p className="group-hover:-translate-y-[10rem] transition ease-in-out group-hover:text-white font-bold">
                      Support & Troubleshooting
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="text-black reveal fade-bottom">
            <div className="flex items-center flex-col">
              <h1 className="mt-10 mb-2 font-black text-2xl leading-relaxed">Locate Our Charging Station</h1>
              <p className="italic">with Yatri Energy</p>
              <hr className="w-20 mt-2 border border-yatri-blue" />
            </div>
            <div className="mt-10 text-center">
              <p>
                We make freedom of travel possible. <br />
                Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by
                end of 2022. <br />
                Ultimately, our aim is to continuously expand our partner network in all geographies to provide
                exceptional user experience.
              </p>
            </div>
            <div className="flex items-center flex-col mt-10">
              {/* <h1>HLLO WORLD</h1> */}
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
      </main>
    </PageLayout>
  );
}
