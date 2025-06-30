
import React from "react";

const industries = [
  {
    title: "E-commerce",
    desc: "Our ecommerce PPC offerings help online stores grow income and reach a wider target market. We manage Amazon PPC marketing, Amazon PPC optimization, and Shopify PPC campaigns to drive traffic and conversions.",
  },
  {
    title: "B2B Businesses",
    desc: "For B2B companies, our PPC services are designed to generate high-quality leads. We focus on paid search advertising and Google Ads management to help your business connect with other companies successfully.",
  },
  {
    title: "Local Businesses",
    desc: "Local organizations benefit from PPC advertising. Our local PPC services help your ads reach nearby customers. We manage everything from Google Ads to targeted local PPC campaigns.",
  },
];

const Section_e = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-start gap-12">
        <div className="w-full lg:w-1/2 relative">
          <div className="border-l-[10px] border-yellow-500 h-full absolute top-0 left-[-10px] z-[-1]"></div>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/PPC-Advertising-Across-Industries-2.webp"
            alt="PPC Advertising"
            className="rounded shadow-lg object-cover w-full max-h-[500px]"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-900">
            PPC Advertising Across Industries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow border border-gray-100 text-center"
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-md text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-100">
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {industries[2].title}
              </h3>
              <p className="text-md text-gray-700">{industries[2].desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
