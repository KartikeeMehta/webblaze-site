import React from 'react';

const Section_g = () => {
  const integrations = [
    {
      title: 'Crypto Trading Platform',
      description: 'We develop functions with crypto trading structures that can interchange UI/UX choices.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Crypto-Trading-Platform.webp',
    },
    {
      title: 'Crypto Market',
      description: 'Stay ahead within the competitive crypto market with our modern and delightful user experiences.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Crypto-Market.webp',
    },
    {
      title: 'Digital Asset Exchange',
      description: 'Our platforms support the buying and selling of various digital assets, promoting a seamless and dynamic trading environment.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Digital-Asset-Exchange.webp',
    },
    {
      title: 'Crypto App',
      description: 'Our custom crypto apps provide seamless trading directly on mobile gadgets.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Crypto-App.webp',
    },
    {
      title: 'Crypto Platform',
      description: 'We construct robust crypto systems that aid various buying and selling types and ensure security and scalability.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Crypto-Platform.webp',
    },
    {
      title: 'Cryptocurrency Exchange',
      description: 'From centralized to decentralized exchanges, we provide all elements of an operational crypto platform.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Cryptocurrency-Exchange.webp',
    },
    {
      title: 'Best Crypto Trading Platform',
      description: 'Our structures are designed to be the best-in-class, providing advanced functionality and user-friendliness.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Best-Crypto-Trading-Platform.webp',
    },
    {
      title: 'Crypto Broker',
      description: 'We offer integrated solutions for crypto brokers, ensuring efficient and secure trading operations.',
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/Crypto-Broker.webp',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-6">
          Popular Keywords and Our Integration
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          At Webblaze, we improve the integration of various key phases to boost the visibility and capabilities of your crypto trading platform. Here are some of the key phrases seamlessly included into our offerings.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 w-full h-[180px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/180x100/cccccc/000000?text=Image+Missing";
                  }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_g;
