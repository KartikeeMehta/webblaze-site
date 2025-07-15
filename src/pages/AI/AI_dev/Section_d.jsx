import React from 'react';

const Section_d = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="flex justify-center md:justify-start">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/09/Key-Services-We-Offer-2.webp"
                alt="AI Services"
                className="w-full sm:w-3/4 h-auto max-h-[600px] object-cover rounded-xl"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-black">
              Key Services We Offer
            </h2>
            <ul className="space-y-4 text-black text-sm sm:text-base">
              <li>
                <span className="font-bold">AI Application Development:</span> We specialise in AI utility improvement, creating smart applications that streamline processes and improve user experiences.
              </li>
              <li>
                <span className="font-bold">AI Development Software:</span> Our AI software solutions are tailored to your business needs, offering tools for data analysis, automation, and decision-making.
              </li>
              <li>
                <span className="font-bold">AI Website Development:</span> We build AI-powered websites that offer personalised experiences and boost customer engagement.
              </li>
              <li>
                <span className="font-bold">Machine Learning Development:</span> We leverage ML to build systems that adapt and evolve, providing intelligent solutions that grow with your business.
              </li>
              <li>
                <span className="font-bold">AI Development Cost:</span> We provide clear pricing and flexible packages to ensure the best return on your investment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_d;
