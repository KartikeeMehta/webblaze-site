
import React from 'react';

const features = [
  {
    title: 'Reactive Data Binding',
    description:
      'Vue.Js’s reactive facts binding ensures that the consumer interface automatically updates when the underlying records adjustments. This function simplifies the improvement method and enhances the consumer experience.',
  },
  {
    title: 'Component-Based Architecture',
    description:
      'With Vue.Js, you could construct complicated packages the usage of reusable, self-contained additives. This modular method improves code maintainability and scalability.',
  },
  {
    title: 'Virtual DOM',
    description:
      'Vue.Js makes use of a virtual DOM to optimize rendering and improve application performance. This consequences in quicker updates and a smoother consumer enjoy.',
  },
  {
    title: 'Vue Router',
    description:
      'Vue Router is an official library for routing in Vue.Js programs. It allows you to create unmarried-page packages with navigation among special perspectives or pages.',
  },
  {
    title: 'Vuex',
    description:
      'For state control, Vuex presents a centralized keep for all of the components in an utility, making sure a steady and predictable state.',
  },
  {
    title: 'Comprehensive Ecosystem',
    description:
      'Vue.Js boasts a rich atmosphere, consisting of equipment like Vue CLI, Vue Devtools, and numerous component libraries and plugins.',
  },
];

const Section_c = () => {
  return (
    <div className="bg-white max-w-[1200px] mx-auto py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
         Key Features of Vue.Js
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
            <p className="text-gray-600 text-md leading-8">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_c;
