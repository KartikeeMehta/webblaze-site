import React from "react";

const Section_g = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Innovative NFT Marketplace Features
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          With Webblaze’s NFT market improvement offerings, you can launch a characteristic-wealthy
          and secure platform that caters to the growing call for for virtual property.
          <br className="hidden md:block" />
          Contact us today to learn greater approximately our offerings and begin your NFT
          marketplace journey.
        </p>
      </div>

      <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-md p-6 border-b-4 border-red-400">
          <img
            src="/ecomerceGrowthIcon.png"
            alt="Auction"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Auction and Bidding Systems</h3>
          <p className="text-sm text-gray-700">
            Our NFT marketplaces feature superior auction and bidding structures, allowing
            customers to participate in stay auctions and region bids on their favorite NFTs.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-md p-6 border-b-4 border-blue-400">
          <img
            src="/ecomerceGrowthIcon.png"
            alt="Royalty"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Royalty Management</h3>
          <p className="text-sm text-gray-700">
            We enforce sturdy royalty management systems, ensuring artists and creators get hold of
            royalties from secondary sales of their NFTs.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-md p-6 border-b-4 border-yellow-400">
          <img
            src="/ecomerceGrowthIcon.png"
            alt="Multi-Currency"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Multi-Currency Support</h3>
          <p className="text-sm text-gray-700">
            Our structures support numerous digital currencies, providing users with the power to
            exchange NFTs the usage of their preferred currency.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-md p-6 border-b-4 border-green-400">
          <img
            src="/ecomerceGrowthIcon.png"
            alt="User Interface"
            className="w-12 h-12 mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">User-Friendly Interfaces</h3>
          <p className="text-sm text-gray-700">
            We design intuitive and user-friendly interfaces that make it smooth for customers to
            navigate the marketplace, find out new NFTs, and whole transactions resultseasily.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
