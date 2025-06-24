import React from 'react';
import seoImage from "../../../assets/seoImage.png"

const seoServices = [
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Build strong relationships along with your clients through our CRM gear. Track possibilities, manage loyalty applications, and send personalised promotions to enhance patron retention and pride.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/01/image-11.png",
    border: "border-yellow-400",
  },
  {
    title: "Kitchen and Order Management",
    description:
      "Our software ensures powerful communication among the the front of the house and the kitchen. Real-time order monitoring reduces mistakes and complements service speed, whilst kitchen inventory control guarantees the provision of important substances.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/01/image-12.png",
    border: "border-red-400",
  },
  {
    title: "Food Costing and Procurement Solutions",
    description:
      "Manage meals charges and menu profitability with precision the usage of our meals costing and procurement gear. These capabilities provide insights into element costs and help you put accurate menu charges.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/01/image-13.png",
    border: "border-yellow-400",
  },
   {
    title: "Staff and HR Management",
    description:
      "Our gear for HR and staff management simplify scheduling, payroll, and performance monitoring. Ensure highest quality staffing ranges and employee pride with capabilities tailored for eating place operations.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/01/image-14.png",
    border: "border-red-400",
  },
];

const Section_d = () => {
  return (
    <div className="relative bg-[#F9FAFB] py-20 px-6 sm:px-12 overflow-hidden">
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg"
        alt="plane"
        className="absolute right-10 top-10 w-25"
      />
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp"
        alt="dots"
        className="absolute bottom-10 right-10 w-20"
      />
      <img
        src={seoImage}
        className="absolute bottom-0 left-0 w-40"
      />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Explore Our Range of Services
        </h2>
      
      </div>

      <div className="mt-16 space-y-20 max-w-5xl mx-auto">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-14`}
          >
            <div className={`w-[140px] sm:w-[160px] h-[260px] sm:h-[300px] border-4 ${service.border} rounded-[70px] overflow-hidden flex-shrink-0`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="max-w-2xl">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 mt-4 whitespace-pre-line">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section_d;