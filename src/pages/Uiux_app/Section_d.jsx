import React from 'react';
import { FaCogs, FaLayerGroup, FaUserCog, FaProjectDiagram, FaChartLine } from 'react-icons/fa';

const Section_d = () => {
  const cards = [
    {
      icon: <FaCogs className="text-blue-400 text-4xl" />,
      title: 'Expertise and Experience',
      bg: 'bg-blue-100'
    },
    {
      icon: <FaLayerGroup className="text-red-300 text-4xl" />,
      title: 'Comprehensive Services',
      bg: 'bg-red-100'
    },
    {
      icon: <FaUserCog className="text-yellow-400 text-4xl" />,
      title: 'User-Centric Approach',
      bg: 'bg-yellow-100'
    },
    {
      icon: <FaProjectDiagram className="text-red-300 text-4xl" />,
      title: 'Collaborative Process',
      bg: 'bg-red-100'
    },
    {
      icon: <FaChartLine className="text-yellow-400 text-4xl" />,
      title: 'Proven Track Record',
      bg: 'bg-yellow-100'
    },
  ];

  return (
    <section className="bg-gray-100 text-center py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Webblaze for UI and UX Development?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base mb-12">
          Choosing the proper accomplice for UI and UX improvement is critical to the achievement of your digital product. Here’s why Webblaze sticks out.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full mb-4 ${card.bg}`}>
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_d;
