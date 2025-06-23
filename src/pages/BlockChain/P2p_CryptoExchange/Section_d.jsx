import React from 'react';

const Section_d = () => {
  const benefits = [
    {
      title: 'Expertise inside the Crypto Market',
      description: 'With years of enjoy within the crypto market, our team is aware the nuances and demanding situations of developing a hit crypto structures. We live up to date with the contemporary developments and technology to provide you the exceptional solutions.',
    },
    {
      title: 'User-Friendly Interfaces',
      description: 'We prioritize user-level it in our designs. Our structures function intuitive interfaces that make cryptocurrency trading accessible to every person, from beginners to experts.',
    },
    {
      title: 'Regulatory Compliance',
      description: 'Navigating the complex regulatory landscape is crucial for any crypto enterprise. Our systems are constructed with compliance in thoughts, ensuring adherence to global requirements and neighborhood regulations.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-inter text-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-5 leading-tight text-white">
          Benefits of Choosing Webblaze for Your Crypto Exchange Development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center text-center border-2 border-transparent hover:border-blue-500"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-300 leading-relaxed text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_d;
