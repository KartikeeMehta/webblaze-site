import React from "react";

const Section_e = () => {
  return (
    <section className="bg-[#0d1117] py-16 px-4 md:px-8 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Client Success Stories
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Image */}
          <div className="bg-white p-2 rounded-md">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/NFT-non-fungible-token.webp"
              alt="NFT Success"
              className="w-[300px] h-auto rounded-sm object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-xl text-left text-gray-300 text-base leading-relaxed">
            ...enabling artists to sell their digital artwork globally. The platform
            capabilities advanced search options, steady price gateways, and a
            vibrant network of artists and creditors.
          </div>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center items-center gap-3">
          <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span className="w-3 h-3 bg-white rounded-full inline-block"></span>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
