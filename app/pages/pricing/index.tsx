import Image from 'next/image';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import { useEffect } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import logo from '../../public/assets/images/Yatri-energy-logo-secondary.png';
import Navbar from '@/components/Navbar';
import HeroTitle from '@/components/HeroTitle';

const PricingPage = () => {
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
      <div className="parallax m-2 bg-[url('../public/assets/images/landingPage.jpg')] brightness-50 rounded-lg"></div>
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">
            Expand your options with a <br /> subscription.
          </h1>
        </div>
      </div>
      <div className="flex justify-center md:flex-row flex-col items-center md:w-full w-auto md:m-0 mt-10 reveal fade-bottom">
        <div className="w-[25rem] h-[38rem] md:ml-20 md:relative md:top-[-5rem] md:m-0 mb-10 rounded-md border-yatri-blue p-2 shadow-lg shadow/50 bg-white">
          <h1 className="text-2xl font-bold p-2 md:mt-4">Normal</h1>
          <p className="mb-4 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio doloremque architecto corrupti
            consequuntur ea fuga labore eos ipsam nihil culpa
          </p>

          <h1 className="text-4xl font-extrabold mb-4 flex-start m-2">Free</h1>
          <button className="border-2 border-yatri-blue w-[90%] h-12 m-2 text-yatri-blue">Get Started</button>

          <h4 className="m-2">Benefits:</h4>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>

        <div className="w-[25rem] h-[40rem] md:ml-20 md:relative md:top-[-6rem]  border-2 rounded-md border-yatri-blue bg-white p-2 shadow-lg shadow-yatri-blue/25">
          <h1 className="text-2xl font-bold p-2 md:m-4">Pass + member</h1>
          <p className="mb-4 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio doloremque architecto corrupti
            consequuntur ea fuga labore eos ipsam nihil culpa
          </p>
          <h1 className="text-4xl font-extrabold mb-4 flex items-center m-2 flex-wrap ">
            Rs. 999<p className="font-normal text-base mt-4">/month</p>
          </h1>
          <button className="border-2 bg-yatri-blue w-[90%] h-12 m-2 text-white ">Get Started</button>
          <h4 className="m-2">Benefits:</h4>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-md md:w-full md:h-12 mb-2">
            <BsFillCheckCircleFill className="m-2 text-yatri-blue" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </div>
      <HeroTitle
        title="Helping elminate the barriers"
        subTitle="to enable the inevitable"
        paragraph=<p>
          We make freedom of travel possible. <br />
          Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
          <br />
          Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end of
          2022. <br />
          Ultimately, our aim is to continuously expand our partner network in all geographies to provide exceptional
          user experience.
        </p>
      />

      <section className="w-full md:h-[30rem] md:flex md:items-center md:justify-center mt-20 md:mb-10 reveal fade-bottom">
        <div className="md:w-[40rem] h-[30rem] bg-[#1F1F1F] flex-center flex-col  md:rounded-none md:ml-0 md:mr-0 ml-2 mr-2">
          <div className="w-40 h-22">
            <Image src={logo} alt="yatri logo" className="object-cover" />
          </div>
          <div className="flex-center flex-col text-center w-full overflow-auto  ">
            <h1 className="text-white text-2xl mb-8">A Very Interesting Title</h1>
            <p className="text-white text-center mb-8">
              We make freedom of travel possible. Yatri Energy’s vision for the future is an open charging network that
              is accessible to every EV users. Starting with 7 kW in-house developed AC chargers, it will be
              complemented by 60 kW DC fast charger by end of 2022.
            </p>
          </div>
          <button className="bg-yatri-blue w-48  h-12 mb-8 text-white rounded-sm">Apply Now</button>
        </div>

        <div className="md:w-[40rem] h-[30rem] bg-[#272727] md:rounded-none md:ml-0 md:mr-0 ml-2 mr-2">
          <div className="flex-center text-lg md:mt-10 p-2 leading-snug text-justify">
            <BsFillCheckCircleFill className="mr-2 text-yatri-blue md:mt-0 mt-10" />
            <p className="text-white  w-[30rem] md:m-0 mt-10">Lorem ipsum dolor sit amet consectetur adipisicing</p>
          </div>
          <div className="flex-center text-lg mt-10 p-2 leading-snug text-justify">
            <BsFillCheckCircleFill className="mr-2 text-yatri-blue " />
            <p className="text-white  w-[30rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit
            </p>
          </div>
          <div className="flex-center text-lg mt-10 p-2 leading-snug text-justify">
            <BsFillCheckCircleFill className="mr-2 text-yatri-blue" />
            <p className="text-white  w-[30rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit
            </p>
          </div>
          <div className="flex-center text-lg mt-10 p-2 leading-snug text-justify">
            <BsFillCheckCircleFill className="mr-2 text-yatri-blue" />
            <p className="text-white  w-[30rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;
