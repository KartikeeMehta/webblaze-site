import React from "react";

const features = [
  {
    title: "Expertise in Blockchain Technology",
    description:
      "With substantial revel in in blockchain generation, Webblaze gives unprecedented knowledge in developing NFT marketplaces. Our group remains up to date with the modern-day trends and advancements to provide you with modern solutions.",
    icon: "https://webblazesofttech.com/wp-content/uploads/2025/05/Group-1171275495.png",
    borderColor: "border-b-4 border-red-500",
  },
  {
    title: "Comprehensive NFT Marketplace Services",
    description:
      "Post-release, we offer continuous aid and maintenance to make certain your NFT marketplace operates smoothly. Our crew directly addresses any troubles and implements updates to maintain your platform jogging efficiently.",
    icon: "https://webblazesofttech.com/wp-content/uploads/2025/05/Group-1171275496-1.png",
    borderColor: "border-b-4 border-blue-500",
  },
  {
    title: "Scalability and Performance",
    description:
      "We design NFT marketplaces with scalability in thoughts, allowing your platform to address accelerated site visitors and transactions as your user base grows. Our optimized solutions make sure high overall performance, presenting customers with a seamless enjoy.",
    icon: "https://webblazesofttech.com/wp-content/uploads/2025/05/Group-1171275497-1-1.png",
    borderColor: "border-b-4 border-yellow-400",
  },
  {
    title: "Support and Maintenance",
    description:
      "Post-release, we offer continuous aid and maintenance to make certain your NFT marketplace operates smoothly. Our crew directly addresses any troubles and implements updates to maintain your platform jogging efficiently.",
    icon: "https://webblazesofttech.com/wp-content/uploads/2025/05/Group-1171275498.png",
    borderColor: "border-b-4 border-green-400",
  },
];

const Section_c = () => {
  return (
    <section className="py-16 px-4 md:px-12 max-w-[1200px] mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Webblaze for NFT Marketplace Development?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-md p-6 ${feature.borderColor}`}
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-semibold text-gray-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_c;
