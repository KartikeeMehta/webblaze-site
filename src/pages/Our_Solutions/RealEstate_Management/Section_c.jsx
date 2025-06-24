import React from 'react';

const features = [
  {
    title: 'Property Maintenance and Inspections',
    description:
      '• Webblaze’s property preservation software program guarantees that preservation requests are treated right away and efficiently. Our assets inspection software lets you in to schedule and music inspections, making sure that your houses continue to be in pinnacle condition. With our property management upkeep software program, you could lessen downtime and keep your tenants happy.',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/52861fef898e70e9e776244fd8ec71d5-1.png',
  },
  {
    title: 'Financial Management and Accounting',
    description:
      '• Our assets control accounting software program integrates seamlessly with tools like QuickBooks for condominium property, imparting a comprehensive solution to your economic wishes. Whether you want condo property bookkeeping software program or certain economic reviews, our best accounting software for condo homes guarantees accuracy and transparency in your financial operations.',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/29e643ba0666312f33dd3ab6eedb641a.png',
  },
  {
    title: 'Real Estate Transaction Management',
    description:
      '• Managing transactions can be complex, however our real estate transaction control software program simplifies the method. Our transaction coordinator software and real estate transaction coordinator software provide tools to manage every step of the transaction, from settlement generation to last. Our exceptional real property transaction control software guarantees that you stay organized and compliant.',
    image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/f2fc441ad53ed79cf307f7a679e1603a-1.png',
  },
];

const Section_c = () => {
  return (
    <section className="bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center py-20 bg-black px-4 md:px-16 lg:px-28 text-white">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-16">
        Enhance Efficiency with Integrated Solutions
      </h2>

      <div className="grid gap-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            } items-center gap-10 md:gap-16`}
          >
            {/* Text */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-200 whitespace-pre-line">
                {feature.description}
              </p>
            </div>

            {/* Image with rounded + red top-left & bottom-right border */}
            <div className="md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg w-full max-w-md">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto object-cover"
                />
                {/* Accent corners */}
                <div className="absolute top-0 left-0 w-4 h-4 bg-red-500 rounded-br-md" />
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-red-500 rounded-tl-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_c;
