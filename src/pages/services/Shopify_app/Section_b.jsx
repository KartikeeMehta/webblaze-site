import React from "react";

const cardContents = [
  {
    title: "Shopify POS and Inventory Management",
    description:
      "Our Shopify POS apps are designed to streamline your sales approaches and stock management. The integration of Shopify POS systems with your online store enables seamless synchronization of sales and inventory levels. Our solutions are tailored to your needs, ensuring excellent Shopify POS pricing and functionality. The Shopify POS Pro offers advanced capabilities that enhance your store’s performance and customer experience.",
  },
  {
    title: "Engaging Customer Interactions with Shopify Live Chat",
    description:
      "Enhance your customer support with our Shopify live chat apps. These apps facilitate real-time communication with your customers, resolving their queries instantly and enhancing their shopping experience. Our Shopify chat solutions are intuitive and user-friendly, enabling seamless interactions between you and your customers.",
  },
  {
    title: "Customizable Themes and Integration",
    description:
      "Webblaze develops and integrates Shopify themes that reflect your brand’s identity. Our theme store offers a wide range of options. We also specialize in integrating third-party tools like Klaviyo to enhance your marketing efforts. This ensures your store is not only visually attractive but also highly functional.",
  },
];

function Section_b() {
  return (
    <div
      className="w-full bg-[#fafbfc] bg-no-repeat bg-contain bg-right-top py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')",
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Comprehensive Shopify App Development Services
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
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_b;
