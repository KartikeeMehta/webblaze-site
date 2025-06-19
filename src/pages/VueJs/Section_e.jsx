
import React from 'react';

const features = [
  {
    title: 'Consultation and Planning',
    description:
      'We begin with an in-intensity session to recognize your necessities, dreams, and demanding situations. Based on this, we create a detailed venture plan and timeline.',
  },
  {
    title: 'Design and Prototyping',
    description:
      'Our layout group crafts intuitive and visually attractive interfaces. We expand prototypes to offer you a preview of the final product.',
  },
  {
    title: 'Development and Testing',
    description:
      'Our builders use the latest gear and techniques to construct sturdy Vue.Js applications. We conduct rigorous testing to make certain the very best nice and performance.',
  },
  {
    title: 'Deployment and Launch',
    description:
      'Once the utility is ready, we take care of the deployment method, ensuring the whole thing is installation efficaciously. We also provide submit-launch assist to deal with any issues.',
  },
  {
    title: 'Maintenance and Updates',
    description:
      'After the launch, we provide upkeep services to preserve your utility updated and walking easily. We also offer regular updates and characteristic improvements.',
  },
  {
    title: 'Comprehensive Ecosystem',
    description:
      'Vue.Js boasts a rich atmosphere, consisting of equipment like Vue CLI, Vue Devtools, and numerous component libraries and plugins.',
  },
];

const Section_e = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
         Our Development Process
        </h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300 border-b-4 border-b-blue-500"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_e;
