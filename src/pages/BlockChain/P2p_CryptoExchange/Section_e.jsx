import React from 'react';

const Section_e = () => {
  const services = [
    {
      title: 'Custom Crypto Exchange Development',
      description: 'Tailored solutions in your unique business wishes, along with centralized and decentralized trade structures.',
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      borderColor: 'border-b-blue-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      title: 'White-Label Exchange Solutions',
      description: 'Quick-to-deploy white-label change platforms that provide comprehensive features and customization alternatives.',
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-600',
      borderColor: 'border-b-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      title: 'Crypto Wallet Integration',
      description: 'Educational establishments can benefit from our custom net formal offerings. We create interactive and appealing net web sites that decorate the gaining knowledge of revel in.',
      iconBgColor: 'bg-yellow-100',
      iconTextColor: 'text-yellow-600',
      borderColor: 'border-b-yellow-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.592 1L21 12l-1.572 1.174C19.97 12.892 19 12.723 19 12c0-1.78.892-3.354 2.298-4.306C20.763 6.726 18.064 5 12 5c-6.065 0-8.763 1.726-9.298 2.694C2.107 8.647 2 10.007 2 12c0 2.434 2.227 4.457 5 4.908V21l3-3 3 3v-3.092c2.773-.451 5-2.474 5-4.908 0-.497-.076-.97-.22-1.423-.153-.48-1.488-1.523-2.616-1.954C14.07 9.533 13.08 9 12 9zm-2 2h2v2h-2v-2z" />
        </svg>
      ),
    },
    {
      title: 'Liquidity Solutions',
      description: 'Ensuring your exchange has the essential liquidity to operate efficiently and attract greater users.',
      iconBgColor: 'bg-blue-100',
      iconTextColor: 'text-blue-600',
      borderColor: 'border-b-blue-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 21h18" />
        </svg>
      ),
    },
    {
      title: 'Mobile App Development',
      description: 'Development of robust crypto apps for Android and iOS, allowing customers to exchange on-the-go.',
      iconBgColor: 'bg-red-100',
      iconTextColor: 'text-red-600',
      borderColor: 'border-b-red-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Ongoing Maintenance and Support',
      description: 'Continuous help and protection to preserve your platform running easily and effectively.',
      iconBgColor: 'bg-yellow-100',
      iconTextColor: 'text-yellow-600',
      borderColor: 'border-b-yellow-500',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v2m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-inter">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 text-center mb-12 leading-tight">
          Services We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border-b-4 ${service.borderColor}`}
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center ${service.iconBgColor} mb-6`}>
                  <span className={`text-3xl ${service.iconTextColor}`}>{service.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_e;
