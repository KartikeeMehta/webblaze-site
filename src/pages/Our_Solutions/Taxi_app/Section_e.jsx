import React from 'react';

const Section_e = () => {
  const features = [
    {
      title: 'Smart Matching',
      desc: 'Efficiently in shape passengers with nearby drivers, just like the Uber Taxi Near Me function',
      borderColor: 'border-red-400',
    },
    {
      title: 'Ride Scheduling',
      desc: 'Allow customers to time table rides earlier, like Uber Taxi Booking and Careem Taxi Booking.',
      borderColor: 'border-blue-400',
    },
    {
      title: 'In-App Messaging',
      desc: 'Enable communication between drivers and passengers in the app.',
      borderColor: 'border-yellow-400',
    },
    {
      title: 'Loyalty Programs',
      desc: 'Implement reward structures to hold clients, just like the Lyft Taxi Service and Free Now Taxi App.',
      borderColor: 'border-green-400',
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Integrate Popular Features for Enhanced User Experience
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10">
          To compete with main apps like Uber and Lyft, your taxi app must provide pinnacle-notch capabilities.
          At Webblaze, we combine advanced functionalities to beautify purchaser experience and streamline operations.
        </p>

        <h3 className="text-2xl font-semibold mb-8">Popular Features</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`bg-white p-6 rounded-2xl shadow-sm border-2 ${feature.borderColor} transition-transform hover:scale-[1.03] duration-300`}
            >
              <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-slate-700">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_e;
