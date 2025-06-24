import React from 'react';

const Section_f = () => {
  return (
    <section>
      <h1 className='text-4xl text-black text-center font-bold pt-5 pb-10 m-auto'>Additional Services</h1>
    <div className="flex justify-center px-4">

      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-6">
        
        {/* Card 1 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/11/E-trade-Mobile-App-Development-1.webp" // replace with actual image path
            alt="Factors Influencing the Cost"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">E-trade Mobile App Development</h3>
            <p className="text-gray-700 text-md">
              In addition to ecommerce net web page development, we also offer ecommerce cell app development services. Our group can create a mobile app that enhances your net website and offers a continuing buying enjoy in your clients.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/11/E-commerce-Website-Optimization-1.webp" // replace with actual image path
            alt="Affordable Solutions"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">E-commerce Website Optimization</h3>
            <p className="text-gray-700 text-md">
              To make certain that your internet site plays at its excellent, we offer ecommerce internet website online optimization services. This consists of enhancing web page load speeds, improving person enjoy, and enforcing SEO first-rate practices.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Section_f;
