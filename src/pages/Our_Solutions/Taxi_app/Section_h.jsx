import React from 'react';

const Section_h = () => {
  const features = [
    {
      title: 'iOS and Android',
      desc: 'Develop nearby apps for each structure, making sure ultimate performance and man or woman revel in.',
      borderColor: 'border-red-300',
    },
    {
      title: 'Web Portal',
      desc: 'Provide an internet-based totally absolutely portal for customers who determine upon reserving rides online.',
      borderColor: 'border-blue-300',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
          Expand Your Reach with Multi-Platform Support
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          To maximize your app’s obtain, it’s critical to resource multiple structures. Webblaze develops taxi apps well suited with each iOS and Android, making sure accessibility for all customers.
        </p>

        {/* Section Subheading */}
        <h3 className="text-2xl font-semibold mb-10 text-slate-900">
          Multi-Platform Development
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-2xl shadow-sm border ${feature.borderColor} transition hover:shadow-md max-w-[500px] mx-auto`}
            >
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-base text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_h;
