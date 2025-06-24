import React from 'react';

const Section_c = () => {
  const options = [
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/User-friendly-Design.png',
      title: 'User-Friendly Interface',
      desc: 'A extraordinary ecommerce website begins with an intuitive and client-pleasant layout. Our ecommerce net website online developers consciousness on creating visually appealing and clean-to-navigate web sites that decorate the person enjoy and drive conversions.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Mobile-Optimization.png',
      title: 'Mobile Optimization',
      desc: 'With the increasing use of cell gadgets for on-line purchasing, having a cell-optimized ecommerce internet website online is crucial. Our ecommerce net builders make sure that your net website is absolutely responsive and offers a continuing buying revel in throughout all gadgets.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Secure-Payment-Integration.png',
      title: 'Secure Payment Integration',
      desc: 'Security is a pinnacle precedence for any ecommerce internet site. We combine strong price gateways and implement sturdy safety features to shield your customers facts and assemble take delivery of as authentic with.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Advanced-Analytics-and-Reporting.png',
      title: 'Advanced Analytics and Reporting',
      desc: ' Understanding your customers behavior and tracking your profits normal performance is important for making knowledgeable business picks. Our ecommerce development services encompass advanced analytics and reporting tools to help you gain precious insights.',
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Key Features of Our E-commerce Development Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {options.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden text-black shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_c;
