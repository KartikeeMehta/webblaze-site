import React from 'react';

const Section_f = () => {
  const features = [
    {
      img: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-3048-1.webp', // Replace with actual image paths
      title: 'Real-Time Data',
      desc: 'Access real-time records on journey requests, cause strain availability, and greater.',
    },
    {
      img: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-3049.webp',
      title: 'Revenue Tracking',
      desc: 'Monitor your earnings and find out developments over time.',
    },
    {
      img: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-3050.webp',
      title: 'User Insights',
      desc: 'Analyze person conduct to decorate offerings and advertising strategies.',
    },
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Advanced Analytics and Reporting
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          Gain insights into your organisation normal performance with complete analytics and reporting gear.
          Our taxi app gives unique critiques on rides, income, and character conduct, helping you’re making informed decisions.
        </p>

        <h3 className="text-2xl font-semibold mb-8 text-slate-900">Analytics Features</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl text-center transition-transform hover:scale-[1.02] duration-300"
            >
              <img
                src={item.img}
                alt={item.title}
                className="mx-auto h-28 mb-4 object-contain"
              />
              <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
              <p className="text-sm text-slate-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_f;
