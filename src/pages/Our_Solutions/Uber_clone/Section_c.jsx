import React from "react";


const Section_c = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center">
        <div className="text-center">
          <div className="rounded-xl overflow-hidden border-b-[6px] border-[#f25f5c] mb-6 max-w-md mx-auto">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Customizable-Solutions-2.webp'}
              alt="Customizable Solutions"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Customizable Solutions</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            At Webblaze, we recognize that every industrial organization has
            precise needs. Our Uber clone script is extraordinarily customizable,
            permitting you to tailor the app for your specific requirements. Whether
            you need additional capabilities or a unique interface, our group can supply.
          </p>
        </div>

        <div className="text-center">
          <div className="rounded-xl overflow-hidden border-b-[6px] border-[#f25f5c] mb-6 max-w-md mx-auto">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Cost-powerful-Development.webp'}
              alt="Cost-powerful Development"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Cost-powerful Development</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            We provide competitive pricing for our Uber clone app improvement.
            Our apparent pricing version guarantees you get the brilliant fee in your
            investment. Explore our Uber clone app charge alternatives to find out a
            answer that fits your price range.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_c;
