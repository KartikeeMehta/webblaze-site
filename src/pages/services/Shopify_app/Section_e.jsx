import React from "react";

const cardContents = [
  {
    title: "Shopify Wholesale and B2B Solutions",
    description:
      "Expand your enterprise to new markets with our Shopify wholesale app and B2B solutions. These apps help you manage wholesale customers and orders efficiently. With features like bulk pricing and order management, you can cater to your wholesale clients effectively.",
  },
  {
    title: "Shopify Returns and Loyalty Programs",
    description:
      "Manage returns seamlessly with our Shopify returns app. This simplifies the return process for your customers, enhancing their shopping experience. Our Shopify loyalty apps also help you build rewarding programs that drive repeat purchases and brand loyalty.",
  },
  {
    title: "Advanced Analytics and Reporting",
    description:
      "Get deep insights into your store’s performance with our analytics apps. These tools provide comprehensive reports on sales, customer behavior, and more — empowering you to make informed business decisions with real-time, easy-to-use dashboards.",
  },
];

function Section_e() {
  return (
    <div
      className="w-full bg-[#fafbfc] bg-no-repeat bg-contain bg-right-top py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')",
      }}
    >
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Specialized Shopify Apps for Enhanced Functionality
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center items-stretch">
          {cardContents.map((card, idx) => (
            <div
              key={idx}
              className="w-full sm:w-[80%] md:w-[45%] lg:w-[30%] bg-white rounded-xl shadow-md p-6 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_e;
