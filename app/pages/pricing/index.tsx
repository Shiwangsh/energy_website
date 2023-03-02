import landingPageImage from '../../public/assets/images/landingPage.jpg';
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
      <Image
        src={landingPageImage}
        alt="landing page image"
        className="p-2 rounded-2xl w-full h-screen object-cover brightness-50"
      />
      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">
            Expand your options with a <br /> subscription.
          </h1>
        </div>
      </div>
      <div className="md:flex md:justify-center md:items-center md:w-full w-auto md:m-0 mt-10 reveal fade-bottom">
        <div className="md:w-[28rem] md:h-[35rem] md:ml-20 md:relative md:top-[-5rem] md:m-0 mb-10 rounded-md border-yatri-blue p-2 shadow-2xl shadow/50 bg-white example">
          <h1 className="text-2xl font-bold p-2 md:mt-4">Lorem Ipsum</h1>
          <p className="mb-4 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio doloremque architecto corrupti
            consequuntur ea fuga labore eos ipsam nihil culpa
          </p>

          <h1 className="text-4xl font-bold mb-4 flex-start m-2">Free</h1>
          <button className="border-2 border-yatri-blue w-[90%] h-10 m-2 text-yatri-blue">Get Started</button>
          <h4 className="m-2">Benifits:</h4>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>

        <div className="md:w-[25rem] md:h-[40rem] md:ml-20 md:relative md:top-[-6rem]  border-2 rounded-md border-yatri-blue bg-white p-4 shadow-lg shadow-yatri-blue/25">
          <h1 className="text-2xl font-bold p-2 md:m-4">Pass + member</h1>
          <p className="m-4 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus optio doloremque architecto corrupti
            consequuntur ea fuga labore eos ipsam nihil culpa
          </p>
          <h1 className="text-4xl font-bold mb-4 md:flex md:items-center m-2 md:flex-wrap ">
            Rs. 99<p className="font-normal text-sm mt-4">/month</p>
          </h1>
          <button className="border-2 bg-yatri-blue w-[90%] h-12 m-2 text-white ">Get Started</button>
          <h4 className="m-2">Benifits:</h4>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="flex text-lg text-yatri-blue">
            <BsFillCheckCircleFill className="m-2" />
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
      <section className="w-full md:h-[30rem] md:flex md:items-center md:justify-center mt-10 md:mb-10 reveal fade-bottom">
        <div className="md:w-[30rem] md:h-[30rem] bg-[#1F1F1F]">
          <div className="flex items-center justify-center flex-col">
            <Image src={logo} alt="yatri logo" className="object-cover w-40 h-20" />
            <h1 className="mt-10 text-white text-2xl">A Very Interesting Title</h1>
            <p className="m-10 text-center text-white">
              We make freedom of travel possible. <br />
              Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
              Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by end
              of 2022.
            </p>
            <button className="bg-yatri-blue w-[70%] h-12 text-white mb-10">Apply Now</button>
          </div>
        </div>
        <div className="md:w-[40rem] md:h-[30rem] bg-[#272727] flex items-center md:justify-center flex-col">
          <div className="m-4 flex text-lg text-yatri-blue w-full">
            <BsFillCheckCircleFill className="m-2 " />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit</p>
          </div>
          <div className="m-4 flex text-lg text-yatri-blue w-full">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit</p>
          </div>
          <div className="m-4 flex text-lg text-yatri-blue items-start  w-full">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="m-4 flex text-lg text-yatri-blue w-full">
            <BsFillCheckCircleFill className="m-2" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PricingPage;
