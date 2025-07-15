import React from 'react';

const Section_d = () => {
  const benefits = [
    {
      title: 'Expertise inside the Crypto Market',
      description:
        'With years of experience in the crypto market, our team understands the nuances and challenges of developing successful crypto platforms. We stay updated with the latest trends and technologies to provide you with the best solutions.',
    },
    {
      title: 'User-Friendly Interfaces',
      description:
        'We prioritise the user experience in our designs. Our platforms feature intuitive interfaces that make cryptocurrency trading accessible to everyone, from beginners to experts.',
    },
    {
      title: 'Regulatory Compliance',
      description:
        'Navigating the complex regulatory landscape is crucial for any crypto enterprise. Our systems are built with compliance in mind, ensuring adherence to global standards and local regulations.',
    },
  ];

  return (
    <div className="min-h-fit bg-gray-900 bg-[url('/background-lines.webp')] bg-no-repeat bg-cover py-12 px-4 sm:px-6 lg:px-8 font-inter text-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 leading-tight">
          Benefits of Choosing Webblaze for Your Crypto Exchange Development
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-6 sm:p-8 text-center border border-gray-700 hover:border-blue-500"
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{benefit.title}</h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_d;
