import React from 'react';

const Section_b = () => {
  const features = [
    {
      title: 'Comprehensive Trading Platforms',
      description: 'Our trading systems are designed to aid various buying and selling types, consisting of spot trading and futures buying and selling. These platforms provide seamless and secure transactions for each novices and seasoned traders.',
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      borderColor: 'border-b-blue-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
    {
      title: 'Customizable Solutions',
      description: 'We provide bespoke crypto trading platform answers that cater on your particular business requirements. From white-label exchange options to precise customizations, our services are tailored to fit your needs',
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-600',
      borderColor: 'border-b-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 21v-7m.618 0M17 14V9.663c0-1.66-1.34-3-3-3H9.663c-1.66 0-3 1.34-3 3V14m2.818-11.994L15.618 3H12V2.201l-1.42 1.42L8 4l-1.407-.492c-1.58-.553-3.127.35-3.127 1.932v2.873c0 .878.528 1.644 1.304 1.954L1.5 10.5h16.5l-1.5-1.5c.776-.31 1.304-1.076 1.304-1.954V5.439c0-1.58-1.547-2.483-3.127-1.932L8.799 4l-1.42-1.42z" />
        </svg>
      ),
    },
    {
      title: 'High Security Standards',
      description: 'Security is paramount in the cryptocurrency exchange world. Our systems are fortified with advanced security protocols to guard in opposition to fraud, hacking, and different cyber threats.',
      iconBgColor: 'bg-yellow-100',
      iconTextColor: 'text-yellow-600',
      borderColor: 'border-b-yellow-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: 'Scalability',
      description: 'Our answers are scalable, permitting your platform to grow along with your commercial enterprise. Whether you\'re starting with a small person base or aiming for tens of millions, our infrastructure supports your increase.',
      iconBgColor: 'bg-green-100',
      iconTextColor: 'text-green-600',
      borderColor: 'border-b-green-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-800 text-center mb-12 leading-tight">
          Key Features of Our Crypto Exchange Development
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-b-4 ${feature.borderColor}`}
            >
              <div className="p-8">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${feature.iconBgColor} mb-6`}>
                  <span className={`text-3xl ${feature.iconTextColor}`}>{feature.icon}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h3>

                <p className="text-gray-600 leading-relaxed text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_b;