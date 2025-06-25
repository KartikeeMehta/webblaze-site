import React from 'react';

const features = [
  {
    title: 'User-Friendly Interface',
    description:
      "Our real estate control device is designed quite simply of use in mind. The intuitive interface of our property management platform allows customers to navigate effects, whether they are tech-savvy or now not. Our property management app and property management app unfastened versions ensure that you may control your properties on the cross.",
    icon: '/RealStateUser_Friendly.png',
  },
  {
    title: 'Scalability',
    description:
      "Webblaze's property management software is scalable to fulfill the desires of developing companies. Whether you're looking for assets management software for small commercial enterprise or answers for large business portfolios, our platform adapts on your requirements. Our great assets management software program for small enterprise gives flexibility and growth capacity.",
    icon: '/RealStateIndustry_Leading.png',
  },
  {
    title: 'Industry-Leading Support',
    description:
      "At Webblaze, we pleasure ourselves on offering great customer service. Our responsive customer service team is available to help you with any questions or problems you can come across. We additionally offer massive resources, along with tutorials and publications, that will help you make the maximum of our property control applications.",
    icon: '/RealStateIndustry_Leading.png',
  },
];

const Section_d = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-12 lg:px-24">
        <div className='max-w-[1200px] mx-auto px-6'>

     
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
        Why Choose Webblaze?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 text-center flex flex-col items-center space-y-4"
          >
            <img
              src={feature.icon}
              alt={feature.title}
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-900">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
         </div>
    </section>
  );
};

export default Section_d;
