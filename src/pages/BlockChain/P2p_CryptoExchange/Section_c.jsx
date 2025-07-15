import React from "react";

const Section_c = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#121826] mb-12 sm:mb-16">
          Our Expertise in Crypto Exchange Development
        </h2>

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 mb-12">
          <div className="w-full md:w-[240px] h-[400px] shrink-0 overflow-hidden rounded-none md:rounded-[190px] border-[6px] border-yellow-400 mx-auto">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Diverse-Platform-Integration.webp"
              alt="Diverse Platform Integration"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#121826] mb-3">
              Diverse Platform Integration
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              We concentrate on integrating various buying and selling structures along with Binance clone, Bitget change, and more. This ensures that your platform has the ability and functionality to compete with leading exchanges.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 sm:gap-10 mb-12">
          <div className="w-full md:w-[240px] h-[400px] shrink-0 overflow-hidden rounded-none md:rounded-[190px] border-[6px] border-red-400 mx-auto">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/P2P-Exchange-Development.webp"
              alt="P2P Exchange Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#121826] mb-3">
              P2P Exchange Development
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Peer-to-peer exchange structures are increasingly popular. We build secure and efficient P2P platforms that enable direct transactions between users—ensuring privacy and low transaction costs.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10">
          <div className="w-full md:w-[240px] h-[400px] shrink-0 overflow-hidden rounded-none md:rounded-[190px] border-[6px] border-yellow-400 mx-auto">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Automated-Trading-Features.webp"
              alt="Automated Trading Features"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#121826] mb-3">
              Automated Trading Features
            </h3>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-2xl">
              Automated crypto trading features are essential for modern traders. Our platforms support auto trading, demo trading, and AI crypto tools—offering users advanced features for smarter trading.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_c;
