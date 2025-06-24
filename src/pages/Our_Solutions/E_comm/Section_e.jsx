import React from 'react';

const Section_e = () => {
  const options = [
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Magento-E-trade-Development.webp',
      title: 'Magento E-trade Development',
      desc: 'Magento is a powerful and bendy e-alternate platform appropriate for companies of all sizes. Our Magento ecommerce developers will allow you to assemble a characteristic-wealthy on-line store with superior functionalities',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/WooCommerce-Development.webp',
      title: 'WooCommerce Development',
      desc: 'WooCommerce is a popular e-trade plugin for WordPress. Our WooCommerce builders can create a continuing and customizable on line preserve that integrates flawlessly with your modern-day WordPress internet site.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Custom-E-alternate-Platforms.webp',
      title: 'Custom E-alternate Platforms',
      desc: 'If you need a unique ecommerce solution, we provide custom ecommerce platform development. Our crew can build a bespoke ecommerce platform tailored to your unique agency wishes.',
    },
    {
      image: 'https://webblazesofttech.com/wp-content/uploads/2024/11/Shopify-Development.webp',
      title: 'Shopify Development',
      desc: 'Shopify is a first-rate e-trade platform diagnosed for its ease of use and scalability. Our Shopify ecommerce builders can help you construct an appealing and useful on-line hold fast and efficiently.',
    },
  ];

  return (
    <div className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Our Expertise in Various E-change Platforms
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

export default Section_e;
