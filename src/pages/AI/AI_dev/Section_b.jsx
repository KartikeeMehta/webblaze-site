import React from 'react';

const Section_b = () => {
  return (
    <div className="py-16 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline">
          Why Choose Webblaze for AI Development?
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Leading-AI-Developers.webp"
              alt="Decentralized App"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              24/7 Availability
            </h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              AI information anchors function round the clock, ensuring that audiences receive updates without interruption.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Comprehensive-AI-Development-Services.webp"
              alt="Custom Dapp"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Comprehensive AI Development Services
            </h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              From software to application development, we offer customised AI solutions that align with your business goals.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Top-AI-Development-Companies.webp"
              alt="Web3 dapp Creation"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Top AI Development Companies
            </h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              Webblaze stands out with a proven track record of delivering innovative and effective AI solutions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[48%] md:w-[45%] lg:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Advanced-AI-Frameworks.webp"
              alt="Smart Contracts"
              className="rounded-xl mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">
              Advanced AI Frameworks
            </h3>
            <p className="text-sm md:text-base text-gray-700 text-center">
              We use cutting-edge AI frameworks to build scalable, modern solutions tailored to your needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
