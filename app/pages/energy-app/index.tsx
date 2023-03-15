/* eslint-disable @next/next/no-img-element */
import appScreenshot1 from '../../public/assets/images/app-screenshot1.png';
import appScreenshot2 from '../../public/assets/images/app-screenshot2.png';
import transparentIphone from '../../public/assets/images/iphone.png';

import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import reveal from '../../utils';
import { useEffect, useState } from 'react';
import 'transition-style';
import { useInView } from 'react-intersection-observer';

const MobileAppPage = () => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [ref2, inView2] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const [ref3, inView3] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref4, inView4] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref5, inView5] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref6, inView6] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref7, inView7] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref8, inView8] = useInView({
    threshold: 0,
    triggerOnce: true,
  });
  const [ref9, inView9] = useInView({
    threshold: 0,
    triggerOnce: true,
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

  const images = [appScreenshot1, appScreenshot2];
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);

  return (
    <>
      <div className="h-full w-full ">
        <Navbar />
        <div className="parallax m-2 bg-[url('../public/assets/images/mobile-single1.jpg')] brightness-50 rounded-md"></div>
        <div className="caption">
          <div className="caption-title">
            <h1 className="text-white text-6xl font-bold">Yatri Energy App</h1>
          </div>
        </div>
      </div>
      <div className="body-container">
        <section className="text-black md:flex md:items-center md:justify-center mt-20">
          <div className="md:flex">
            <div className="md:flex md:items-start md:flex-col md:w-[40rem] md:h-[40rem]" ref={ref}>
              {inView ? (
                // <img
                //   src="https://www.transparentpng.com/thumb/-iphone-x/jPIkq8-iphone-glass-lens-screen-replacement-fixez.png"
                //   alt="Flat white phone iphone x screen"
                //   className="h-full w-full object-contain drop-shadow-xl"
                //   transition-style="in:wipe:left"
                // />
                <Image
                  src={transparentIphone}
                  alt="Flat white phone iphone x screen"
                  className="h-full w-full object-contain drop-shadow-xl"
                  transition-style="in:wipe:left"
                />
              ) : (
                ''
              )}
            </div>
            <div className="md:w-[30rem] md:my-40 md:mx-auto md:pl-0 pl-10" ref={ref2}>
              {inView2 ? (
                <div transition-style="in:wipe:right">
                  <h1 className="text-6xl font-bold mb-4">Discover yatri energy app</h1>
                  <p className="leading-relaxed">
                    We make freedom of travel possible. <br />
                    Yatri Energy’s vision for the future is an open charging network that is accessible to every EV
                    users. Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast
                    charger by end of 2022. Ultimately, our aim is to continuously expand our partner network in all
                    geographies to provide exceptional user experience.
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>

        <section className="text-black mt-20 ">
          <div className="w-full">
            <h1 className="text-6xl font-bold mb-4 text-center">Lorem Ispsum</h1>
            <p className="text-center">We make freedom of travel possible</p>
            <div className="flex-center w-full my-0 mx-auto h-[50rem]" ref={ref3}>
              {inView3 ? (
                <>
                  <Image
                    src={appScreenshot1}
                    alt="section-image-1"
                    className=" lg:w-[20rem] lg:h-[40rem] md:w-[20rem] md:h-[40rem]  w-[25rem] h-[35rem] rounded-xl drop-shadow-xl md:pl-0 lg:pl-0 pl-20"
                    transition-style="in:wipe:right"
                  />
                  <Image
                    src={appScreenshot2}
                    alt="section-image-1"
                    className="lg:w-[20rem] lg:h-[40rem] md:w-[20rem] md:h-[40rem]  w-[25rem] h-[35rem] rounded-xl drop-shadow-xl -translate-x-20 translate-y-20 "
                    transition-style="in:wipe:left"
                  />
                </>
              ) : (
                ''
              )}
            </div>

            <div className="mx-auto flex-center p-10  md:text-center flex-center">
              <p>
                Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast charger by
                end of 2022. Ultimately, our aim is to continuously expand our partner network in all geographies to
                provide exceptional user experience.
              </p>
            </div>
          </div>
        </section>
        {/* fourth section  */}
        <section className="text-black mt-20 w-full md:h-[58rem]">
          <h1 className="text-6xl text-center font-bold mb-4 p-2">Title</h1>

          <div className="w-full h-full">
            <Image
              src={images[currentIndex]}
              alt="section-image-1"
              className="md:w-[full] border rounded-md my-0 mx-auto transition ease-in-out delay-150"
            />

            <div
              className="md:w-[20rem] my-10 mx-auto text-start md:-translate-y-[50rem] md:-translate-x-[30rem] md:p-0 p-10"
              ref={ref4}
            >
              {inView4 ? (
                <p transition-style="in:wipe:left">
                  We make freedom of travel possible. <br />
                  Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                  Starting with 7 kW in-house developed AC chargers
                </p>
              ) : (
                <p>
                  We make freedom of travel possible. <br />
                  Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                  Starting with 7 kW in-house developed AC chargers
                </p>
              )}
            </div>

            <div
              className="md:w-[20rem] my-10 mx-auto text-start md:-translate-y-[40rem] md:translate-x-[30rem] md:p-0 p-10"
              ref={ref5}
            >
              {inView5 ? (
                <p transition-style="in:wipe:right">
                  We make freedom of travel possible. <br />
                  Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                  Starting with 7 kW in-house developed AC chargers
                </p>
              ) : (
                <p>
                  We make freedom of travel possible. <br />
                  Yatri Energy’s vision for the future is an open charging network that is accessible to every EV users.
                  Starting with 7 kW in-house developed AC chargers
                </p>
              )}
            </div>
          </div>
        </section>
        {/* fifth section  */}

        <section className="text-black md:flex md:items-center md:justify-center mt-20">
          <div className="md:flex md:flex-row-reverse">
            <div className="md:flex md:items-start md:flex-col md:w-[40rem] md:h-[40rem]" ref={ref6}>
              {inView6 ? (
                <Image
                  src={transparentIphone}
                  alt="Flat white phone iphone x screen"
                  className="h-full w-full object-contain drop-shadow-xl"
                  transition-style="in:wipe:left"
                />
              ) : null}
            </div>
            <div className="md:w-[30rem] md:my-40 md:mx-auto md:pl-0 pl-10" ref={ref6}>
              {inView6 ? (
                <div transition-style="in:wipe:right">
                  <h1 className="text-6xl font-bold mb-4">Discover yatri energy app</h1>
                  <p className="leading-relaxed">
                    We make freedom of travel possible. <br />
                    Yatri Energy’s vision for the future is an open charging network that is accessible to every EV
                    users. Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast
                    charger by end of 2022. Ultimately, our aim is to continuously expand our partner network in all
                    geographies to provide exceptional user experience.
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>

        {/* sixth section  */}

        <section className="text-black md:flex md:items-center md:justify-center mt-20">
          <div className="md:flex">
            <div className="md:flex md:items-start md:flex-col md:w-[40rem] md:h-[40rem]" ref={ref7}>
              {inView7 ? (
                <Image
                  src={transparentIphone}
                  alt="Flat white phone iphone x screen"
                  className="h-full w-full object-contain drop-shadow-xl"
                  transition-style="in:wipe:left"
                />
              ) : null}
            </div>
            <div className="md:w-[30rem] md:my-40 md:mx-auto md:pl-0 pl-10" ref={ref8}>
              {inView8 ? (
                <div transition-style="in:wipe:right">
                  <h1 className="text-6xl font-bold mb-4">Discover yatri energy app</h1>
                  <p className="leading-relaxed">
                    We make freedom of travel possible. <br />
                    Yatri Energy’s vision for the future is an open charging network that is accessible to every EV
                    users. Starting with 7 kW in-house developed AC chargers, it will be complemented by 60 kW DC fast
                    charger by end of 2022. Ultimately, our aim is to continuously expand our partner network in all
                    geographies to provide exceptional user experience.
                  </p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default MobileAppPage;
