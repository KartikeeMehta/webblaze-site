import React from 'react';

const Section_d = () => {
  const features = [
    {
      title: 'Marketing Tools Integration',
      desc: 'Our automobile rental app consists of integrated advertising and marketing equipment to assist sell your vehicle lease enterprise. This consists of special gives for reasonably-priced vehicle leases close to me and the pleasant automobile rental offers.',
      img: '/icons/user-interface.png',
    },
    {
      title: 'Advanced Analytics',
      desc: 'Gain insights into purchaser conduct with our advanced analytics equipment. Understand trends, choices, and optimize your offerings thus.',
      img: '/icons/tracking.png',
    },
    {
      title: 'Multiple Location Management',
      desc: 'Manage more than one locations effortlessly with our app. Whether you have got car apartment offerings at fll airport, automobile apartment in first-rate, or organization near me, our app helps green area management',
      img: '/icons/payment.png',
    },
    {
      title: 'Flexible Rental Periods',
      desc: 'Our app helps flexible rental intervals, together with short term automobile condominium, weekly automobile condominium, and lease a car for a month for three hundred options. This ensures you may cater to clients with varying needs.',
      img: '/icons/analytics.png',
    },
    {
      title: 'Special Vehicle Rentals',
      desc: 'Offer unique motors along with convertible automobile condominium, electric vehicle apartment, and 12 seater van condominium. Enhance your provider offerings with niche automobiles that entice unique client segments.',
      img: '/icons/customize.png',
    },
  ];

  return (
    <div className="bg-gray-50 px-4 py-12 flex justify-center">
      <div className="max-w-[1200px] w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Additional Services Offered through Webblaze
        </h2>

        {/* Top Row (3 Cards) */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 mb-6">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[380px] bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row (2 Cards) */}
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {features.slice(3).map((feature, index) => (
            <div
              key={index}
              className="flex-1 min-w-[280px] max-w-[380px] bg-white rounded-2xl shadow-md p-6 text-center"
            >
              <img src={feature.img} alt={feature.title} className="w-20 h-20 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_d;
