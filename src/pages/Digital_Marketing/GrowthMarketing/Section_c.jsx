import React from "react";

const services = [
  {
    title: "Digital Growth Agency",
    icon: "/digitalGrowth.png",
    description:
      "As a leading digital growth corporation, Webblaze offers complete offerings to beautify your online presence. From SEO to social media increase hacking, we implement strategies that drive organic traffic and boom logo visibility.",
  },
  {
    title: "Ecommerce Growth Agency",
    icon: "/ecomerceGrowthIcon.png",
    description:
      "For ecommerce companies, our specialized ecommerce growth company offerings are designed to enhance sales and enhance client engagement. We leverage ecommerce marketplace developments to create focused campaigns that resonate together with your audience.",
  },
  {
    title: "Social Media Growth Agency",
    icon: "/socialMediaGrowthIcon.png",
    description:
      "Social media is a effective device for commercial enterprise increase. Our social media growth corporation offerings include strategic making plans, content material introduction, and influencer advertising boom to construct a strong online community and power engagement.",
  },
  {
    title: "YouTube Growth Agency",
    icon: "/seoSearchIcon.png",
    description:
      "Video content material is increasingly critical in ultra-modern advertising landscape. Our YouTube growth business enterprise offerings help you create compelling video content material, optimize your channel, and grow your subscriber base.",
  },
  {
    title: "B2B Growth Marketing Agency",
    icon: "/b2bGrowthIcon.png",
    description:
      "Webblaze additionally focuses on B2B growth advertising. We broaden techniques tailor-made to business clients, that specialize in lead technology, account-based totally marketing, and enhancing income conversion costs.",
  },
];

const Section_c = () => {
  return (
    <section className="bg-[#0D1321] py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center text-white px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Growth Marketing Services We Offer
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full max-w-sm bg-[#172132] text-white rounded-xl border border-blue-500 p-6 shadow-md"
            >
              <div className="mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-3xl font-semibold mb-3">{service.title}</h3>
              <p className="text-md text-gray-50 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_c;
