import React from "react";

const Section_f = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto  grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Explore Our NFT <br /> Marketplace Solutions
          </h2>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/image-2987.png"
            alt="NFT Badge"
            className="w-[250px] md:w-[280px] mx-auto md:mx-0"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-red-300">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/nft-artist-icon.svg"
              alt="NFT Artist Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Top NFT Marketplace for Artists</h3>
            <p className="text-sm text-gray-700">
              Our NFT marketplaces are designed to cater to artists, supplying them with a platform
              to show off and sell their virtual creations. Features encompass artist profiles,
              virtual galleries, and steady payment alternatives.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-blue-300">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/nft-trading-icon.svg"
              alt="NFT Trading Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Best NFT Trading Platform</h3>
            <p className="text-sm text-gray-700">
              We broaden high-overall performance NFT buying and selling systems that help diverse
              digital currencies and provide capabilities like real-time buying and selling,
              auction capabilities, and steady transactions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-yellow-300">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/nft-custom-icon.svg"
              alt="Custom NFT Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Custom NFT Marketplace Development</h3>
            <p className="text-sm text-gray-700">
              Webblaze offers custom NFT marketplace improvement offerings, tailoring the platform
              to fulfill your unique enterprise desires. Our solutions are designed to offer a
              unique and attractive person enjoy.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-5 border-b-4 border-teal-300">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/nft-polygon-icon.svg"
              alt="Polygon Icon"
              className="w-10 h-10 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Polygon NFT Marketplace</h3>
            <p className="text-sm text-gray-700">
              For customers interested in leveraging the Polygon community, we provide specialised
              Polygon NFT market development. Our structures make certain rapid and fee-effective
              transactions, making them best for excessive-extent buying and selling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
