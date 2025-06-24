import React from "react";


const Section_g = () => {
  return (
    <section className="bg-white  bg-cover py-20 px-4 md:px-10 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Additional Offerings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
          <div className="bg-[#5ca5b5] p-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Buy-Uber-Clone-App-1.webp'}
              alt="Careem Clone App"
              className="mx-auto w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div className="p-6 text-black">
            <h3 className="text-xl font-bold mb-3">Buy Uber Clone App</h3>
            <p className="text-sm leading-relaxed">
             Purchasing our Uber clone app is straightforward and clean. Contact us to speak approximately your necessities, and we are able to offer you with the extremely good solution. We additionally offer post-purchase help to ensure your app runs without problems.
            </p>
          </div>
        </div>

        {/* Flutter Uber Clone Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
          <div className="bg-[#f57c00] p-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Uber-Clone-Script-for-Sale-1.webp'}
              alt="Flutter Uber Clone"
              className="mx-auto w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div className="p-6 text-black">
            <h3 className="text-xl font-bold mb-3">Uber Clone Script for Sale</h3>
            <p className="text-sm leading-relaxed">
             Our Uber clone script is available for fast sale. It includes all of the functions you want to get started out out quickly. Our crew is to be had to help with installation and customization
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
