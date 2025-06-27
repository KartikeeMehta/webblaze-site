import React from "react";

const Section_c = () => {
  return (
    <section className="max-w-[1200px] mx-auto py-16 px-4 md:px-12 bg-white text-center">
      <p className="text-red-500 text-2xl font-medium">Our Services</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
        Smart Contract Development
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="border rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all border-blue-400">
          <div className="text-blue-500 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-3-3v6m-7 4h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Blockchain Smart Contract Development
          </h3>
          <p className="text-lg text-gray-600">
            We amplify robust and steady smart contracts using Solidity and different programming languages. Our smart agreement blockchain builders make sure the very first-class requirements of safety and efficiency.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Blockchain-Smart-Contract-Development.webp"
            alt="Team"
            className="w-[550px] h-[450px] object-cover rounded-lg"
          />
        </div>

        <div className="border rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-2">
            NFT Smart Contract Development
          </h3>
          <p className="text-gray-600">
            Specializing in creating NFT smart contracts, we assist you tokenize digital belongings securely and successfully. Our nft smart agreement development corporation offers quit-to-surrender answers for growing and coping with NFTs.
          </p>
        </div>

        <div className="border rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all">
          <h3 className="text-xl font-semibold mb-2">
            DeFi Smart Contract Development
          </h3>
          <p className="text-gray-600">
            We offer whole DeFi smart agreement development services, assisting you create decentralized economic packages. Our information consists of growing smart contracts for lending, borrowing, staking, and additional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_c;