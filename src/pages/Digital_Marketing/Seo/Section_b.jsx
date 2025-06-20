import React from 'react';
import seoImage from "../../../assets/seoImage.png"

const seoServices = [
  {
    title: "SEO Analysis and Strategy",
    description:
      "Utilizing tools like Semrush and Surfer SEO, we conduct in-depth keyword and competitor analysis to devise a robust SEO strategy that ensures higher search engine rankings.\n\nWe offer particular search engine optimization keyword research to pick out excessive-traffic, applicable key phrases with a purpose to force natural traffic on your website.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/02/research-analysis-ideas-strategy-information-concept_11zon-scaled.jpg",
    border: "border-yellow-400",
  },
  {
    title: "On-Page and Off-Page Search Engine Optimization",
    description:
      "Our on-page search engine marketing offerings include meticulous optimization of your website’s content material, meta tags, and URL systems to enhance seek engine visibility.\n\nOff-web page SEO is equally crucial; we build fantastic oneway links and manage back-link offerings to reinforce your website’s authority and ranking.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/02/online-search-tablet_3_11zon-scaled.jpg",
    border: "border-red-400",
  },
  {
    title: "Local Search Engine Optimization Services",
    description:
      "Targeting local customers? Our nearby search engine marketing strategies are designed to enhance your visibility in nearby seek consequences, ensuring your commercial enterprise shows up whilst customers search for offerings close to them.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Local-search-engine-optimization-Services.webp",
    border: "border-yellow-400",
  },
];

const Section_b = () => {
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
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Our <span className="text-red-500">SEO</span> Services
        </h2>
        <p className="text-base text-gray-500 mt-2">
          Comprehensive search engine optimisation Solutions
        </p>
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

export default Section_b;