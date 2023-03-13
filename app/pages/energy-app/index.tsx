/* eslint-disable @next/next/no-img-element */
import sectionImage1 from '../../public/assets/images/mobile-app-1.jpg';
import sectionImage2 from '../../public/assets/images/mobile-app-2.jpg';
import mobileTemplate1 from '../../public/assets/images/mobile-template1.png';
import mobileTemplate2 from '../../public/assets/images/mobile-template2.png';
import mobileSingle from '../../public/assets/images/mobile-single1.jpg';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import { useEffect } from 'react';
import TitleSide from '@/components/TitleSide';
import 'transition-style';
import { useInView } from 'react-intersection-observer';

const MobileAppPage = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

  const ref2 = useInView({
    threshold: 0,
    // triggerOnce: true,
  });

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
      <div className="parallax m-2 bg-[url('../public/assets/images/mobile-app-banner.jpg')] brightness-50"></div>

      <div className="caption">
        <div className="caption-title">
          <h1 className="text-white text-6xl font-bold">Yatri Energy App</h1>
        </div>
      </div>
      <TitleSide
        title="Discover Yatri Energy App"
        subTitle=""
        paragraph=<p>
          Use the Yatri energy mobile app to schedule your home charging and find a public charging station. Sign up for
          an account to enjoy exclusive, members-only public charging features and pricing.
        </p>
      />

      <section
        className="text-black reveal fade-bottom md:flex md:items-center md:justify-center bg-green-200"
        ref={ref}
      >
        {inView ? (
          <div className="md:flex">
            <div className="mt-10 md:w-[30rem] md:m-20 md:pl-0 pl-10" transition-style="in:wipe:right">
              <h1 className="text-6xl font-bold mb-4">Discover yatri energy app</h1>
              <p className="leading-relaxed">
                We make freedom of travel possible. <br />
                Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by
                end of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to
                provide exceptional user experience.
              </p>
            </div>
            <Image
              src={mobileTemplate1}
              alt="section-image-1"
              className="md:w-[60rem] md:h-[30rem] object-cover border rounded-md reveal "
              transition-style="in:wipe:left"
            />
          </div>
        ) : (
          'loading..'
        )}
      </section>
      <Image
        src={mobileTemplate2}
        alt="section-image-1"
        className="w-[30rem] h-[30rem] object-cover border rounded-md"
      />

      {/* third section  - Banner */}
      <section className="text-black md:flex mt-10 " ref={ref2.ref}>
        {ref2.inView ? (
          <div className="md:flex md:items-center md:flex-col w-full" transition-style="in:circle:center">
            <h1 className="text-4xl font-bold mb-4 text-center">Lorem Ispsum</h1>
            <Image
              src={mobileTemplate1}
              alt="section-image-1"
              className="w-full h-full border rounded-xl image3  circle-grow"
            />

            <div className="mt-10 md:w-[30rem] text-center">
              <p>
                We make freedom of travel possible. <br />
                Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by
                end of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to
                provide exceptional user experience.
              </p>
            </div>
          </div>
        ) : null}
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
          <div className="md:flex md:items-start md:flex-col md:w-[30rem] md:h-[30rem] ">
            <Image
              // src="https://www.transparentpng.com/thumb/-iphone-x/jPIkq8-iphone-glass-lens-screen-replacement-fixez.png"
              src={mobileSingle}
              alt="Flat white phone iphone x screen"
              className="h-full w-full object-contain bg-red-900"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default MobileAppPage;
