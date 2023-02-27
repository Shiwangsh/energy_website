import Navbar from '@/components/Navbar-dark';
import Footer from '@/components/Footer';

const FastChargerSupportPage = () => {
  return (
    <>
      <div className="w-full h-[5rem]">
        <Navbar />
      </div>
      <div className="h-full md:ml-20 ml-2">
        <h1 className="mt-10 mb-2 font-bold text-gray-800 text-2xl leading-relaxed">Guides - Fast Charger</h1>
        <hr className="w-[95%]" />
      </div>
      <div className="flex mt-20 md:ml-20 ml-5 text-justify w-[80%] leading-relaxed">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque qui facilis dolorem, ad consectetur possimus
          iure dicta pariatur animi ut eius tempore non suscipit, architecto consequatur saepe quos commodi quisquam.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem laboriosam ullam quos, ad doloremque tempore
          nam quaerat architecto ratione fuga, iste quam. Adipisci commodi, in provident exercitationem delectus saepe
          minus?
        </p>
      </div>
      <h1 className=" text-xl font-bold text-gray-800 md:ml-20 mt-20 ml-5">Overview</h1>

      <div className="md:ml-20 ml-5  w-[80%]">
        <p className=" text-lg font-bold text-gray-800">When should I use a Supercharger?</p>
        <p className="md:mt-10 mt-2 leading-relaxed  text-justify">
          Superchargers are ideal for long distance travel and are designed to charge your Tesla quickly so you can get
          back on the road. For daily commutes or local driving needs, there are a variety of home charging options.
        </p>
      </div>

      <div className="md:ml-20 ml-5 mt-10 w-[80%]">
        <p className=" text-lg font-bold text-gray-800"> How fast can I charge my Tesla with a Supercharger? </p>
        <p className="md:mt-10 mt-2 leading-relaxed text-justify">Charging speeds vary slightly by model.</p>

        <p className="mt-5 leading-relaxed  text-justify">
          Vehicle Supercharge Speed <br />
          Model 3 Up to 275 kilometres in 15 minutes <br />
          Model Y Up to 241 kilometres in 15 minutes
        </p>
      </div>
      <div className="md:ml-20 ml-5 mt-10 w-[80%]">
        <p className=" text-lg font-bold text-gray-800"> How do I charge my vehicle with a Supercharger? </p>
        <p className="md:mt-10 mt-2 leading-relaxed text-justify">
          Plug the charging connector into your vehicle charge port. Once successfully plugged in, the charge port LED
          will flash green to indicate that charging has begun.
        </p>
        <p className="mt-5 leading-relaxed text-justify">
          You can monitor your charging progress in your Tesla app. Your payment will be processed directly from the
          payment method in your Tesla Account.
        </p>
      </div>
      <div className="md:ml-20 ml-5 mt-10 w-[80%] text-justify">
        <p className=" text-lg font-bold text-gray-800"> Should I charge to 100%?</p>
        <p className="md:mt-10 mt-2 leading-relaxed">
          Your vehicle will recommend the needed charge level to get to the next Supercharger on your route. To reduce
          congestion at high-use Superchargers, your vehicle’s charge limit may be automatically adjusted to 80%. You
          can manually increase the charge limit after plugging in by using the vehicle touchscreen or Tesla app.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FastChargerSupportPage;
