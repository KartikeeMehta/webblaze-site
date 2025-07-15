import React from 'react';
import { FaCogs } from 'react-icons/fa';

const Section_d = () => {
  const cards = [
    {
      icon: <FaCogs className="text-blue-500 text-3xl sm:text-4xl" />,
      title: 'Expertise and Experience',
      bg: 'bg-blue-100'
    },
    {
      icon: <img src="UiUx_5.png" alt="Comprehensive Services" className="w-8 sm:w-10" />,
      title: 'Comprehensive Services',
      bg: 'bg-red-100'
    },
    {
      icon: <img src="UiUx_6.png" alt="User-Centric Approach" className="w-8 sm:w-10" />,
      title: 'User-Centric Approach',
      bg: 'bg-yellow-100'
    },
    {
      icon: <img src="UiUx_7.png" alt="Collaborative Process" className="w-8 sm:w-10" />,
      title: 'Collaborative Process',
      bg: 'bg-red-100'
    },
    {
      icon: <img src="UiUx_8.png" alt="Proven Track Record" className="w-8 sm:w-10" />,
      title: 'Proven Track Record',
      bg: 'bg-yellow-100'
    },
  ];

  return (
    <section className="bg-gray-100 text-center py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Webblaze for UI and UX Development?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base mb-12">
          Choosing the proper partner for UI and UX development is critical to the success of your digital product. Here’s why Webblaze stands out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-12 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 ${card.bg}`}>
                {card.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
