
import React from 'react';

const features = [
  {
    title: 'Custom Node.Js Solutions',
    description:
      'Tailored solutions to satisfy your unique business wishes, ensuring scalability and performance.',
  },
  {
    title: 'Node.Js API Development',
    description:
      'Creating strong APIs for seamless integration with your present structures and third-birthday party services.',
  },
  {
    title: 'Real-time Applications',
    description:
      'Building interactive and real-time packages using frameworks like Socket.Io and WebRTC.',
  },
  {
    title: 'Microservices Architecture',
    description:
      'Implementing microservices to enhance agility and scalability of your packages.',
  },
  {
    title: 'Node.Js Consulting',
    description:
      'Expert steering to leverage Node.Js effectively in your tasks.'
  },
  {
    title: 'Legacy System Migration',
    description:
      'Migrating legacy systems to Node.Js for progressed performance and maintainability.',
  },
    {
    title: '  Node.Js Support and Maintenance',
    description:
      'Ongoing aid and maintenance offerings to make certain your packages run easily.',
  },

];

const Section_c = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Node.Js Development Services Offered
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 border-b-4 border-b-blue-500"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-md leading-9">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_c;
