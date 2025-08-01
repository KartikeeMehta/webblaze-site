
import React from 'react';

const Section_f = () => {
  const reasons = [
    {
      title: 'Proven Track Record',
      description: 'Our portfolio includes a hill tasks for numerous customers, from startups to established groups in the crypto industry.',
      borderColor: 'border-b-red-500',
    },
    {
      title: 'Dedicated Team of Experts',
      description: 'Our group contains skilled developers, designers, and protection experts committed to handing over awesome answers.',
      borderColor: 'border-b-yellow-500',
    },
    {
      title: 'Competitive Pricing',
      description: 'We offer competitive pricing without compromising on satisfactory. Our flexible pricing models cater to exceptional budget desires.',
      borderColor: 'border-b-teal-500', 
    },
    {
      title: 'Customer-Centric Approach',
      description: 'We prioritize our customers wishes and work carefully with them for the duration of the development manner to make sure delight.',
      borderColor: 'border-b-blue-500',
    },
  ];

  return (
    <div className="min-h-fit bg-gray-100  py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-[1200px] mx-auto px-5">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12 leading-tight">
          Why Webblaze?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-b-4 ${reason.borderColor} flex flex-col`}
            >
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{reason.title}</h3>

                <p className="text-gray-600 leading-relaxed text-base">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_f;