import React from 'react';

const Section_b = () => {
  return (
    <section className="bg-[#f7f9fb] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative rounded-xl overflow-hidden object-contain">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275697.png"
              alt="Food delivery woman"
              className="w-full h-auto rounded-md"
            />
          </div>    
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Why Choose Our Doordash Clone?
          </h2>
          <ul className="text-gray-800 text-base space-y-4 list-disc pl-5">
            <li>
              <span className="font-semibold">Comprehensive Food Delivery Solution:</span> Our Doordash clone is a comprehensive food shipping app that guarantees seamless order placement, monitoring, and transport. With features much like Uber Eats clone and Zomato clone, your customers will revel in a top-notch food delivery experience.
            </li>
            <li>
              <span className="font-semibold">Customizable and Scalable:</span> At Webblaze, we understand that each enterprise has unique needs. Our Doordash clone app is highly customizable and scalable, allowing you to tailor it for your specific requirements. Whether you're searching for a Swiggy clone app or a Talabat clone, we have you covered.
            </li>
            <li>
              <span className="font-semibold">User-Friendly Interface:</span> The interface of our Doordash clone is intuitive and easy to use. Users can quickly browse eating place menus, place orders, and track deliveries. The consumer-friendly design offers an experience similar to JustEat or Grubhub clone apps.
            </li>
          </ul>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-blue-600 hover:border-blue-600 border border-transparent transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_b;
