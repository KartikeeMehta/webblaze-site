import React from "react";

const Section_f = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
            Explore Our NFT <br /> Marketplace Solutions
          </h2>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/image-2987.png"
            alt="NFT Badge"
            className="w-48 sm:w-56 md:w-72 mx-auto md:mx-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-red-300">
            <img
              src="/ecomerceGrowthIcon.png"
              alt="NFT Artist Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Top NFT Marketplace for Artists
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Our NFT marketplaces empower artists with features like virtual galleries, artist profiles, and secure payments.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-blue-300">
            <img
              src="/ecomerceGrowthIcon.png"
              alt="NFT Trading Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Best NFT Trading Platform
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              We develop high-performance trading platforms with real-time trading, auction features, and secure crypto transactions.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-yellow-300">
            <img
              src="/ecomerceGrowthIcon.png"
              alt="Custom NFT Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Custom NFT Marketplace Development
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              We build tailored NFT marketplaces based on your business goals, delivering a unique and user-friendly experience.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-teal-300">
            <img
              src="/ecomerceGrowthIcon.png"
              alt="Polygon Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg md:text-xl mb-2">
              Polygon NFT Marketplace
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              Specialised for the Polygon network, our solutions ensure fast, cost-effective NFT trading with high scalability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
