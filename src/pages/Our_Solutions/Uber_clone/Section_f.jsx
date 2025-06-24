import React from "react";


const Section_f = () => {
  return (
    <section className="bg-[#0f1227] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover py-20 px-4 md:px-10 text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Additional Offerings</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
          <div className="bg-[#5ca5b5] p-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Careem-Clone-App.webp'}
              alt="Careem Clone App"
              className="mx-auto w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div className="p-6 text-black">
            <h3 className="text-xl font-bold mb-3">Careem Clone App</h3>
            <p className="text-sm leading-relaxed">
              If you’re seeking to offer services just like Careem, our Careem clone
              app is the correct answer. It comes with features tailored to the Middle
              Eastern market, making sure a aggressive element.
            </p>
          </div>
        </div>

        {/* Flutter Uber Clone Card */}
        <div className="bg-white rounded-xl overflow-hidden shadow-md text-center">
          <div className="bg-[#f57c00] p-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Flutter-Uber-Clone.webp'}
              alt="Flutter Uber Clone"
              className="mx-auto w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div className="p-6 text-black">
            <h3 className="text-xl font-bold mb-3">Flutter Uber Clone</h3>
            <p className="text-sm leading-relaxed">
              For corporations who pick Flutter, our flutter uber clone app offers a
              persevering with move-platform experience. It’s optimized for every
              Android and iOS, making sure huge obtain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
