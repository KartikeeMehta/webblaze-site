import React from "react";

const services = [
  {
    title: "Comprehensive Keyword Research",
    desc: "Effective PPC campaigns start with thorough keyword studies. Our specialists use advanced tools to discover high-appearing keyword ideas, making sure your advertisements appear for applicable searches. Whether you are focused on Google PPC, Pay-Per-Click marketing, or Amazon PPC, we tailor our method to suit your unique needs.",
    tagColor: "bg-blue-100 text-blue-800",
  },
  {
    title: "PPC Protect and Optimization",
    desc: "Protecting your PPC campaigns from fraud is important. Our shield solutions ensure your ads are secure from click fraud, maximizing your budget's effectiveness. We also provide ongoing PPC optimization to continuously improve overall campaign performance.",
    tagColor: "bg-red-100 text-red-800",
  },
  {
    title: "Amazon PPC Management",
    desc: "For e-commerce brands, our Amazon PPC services are designed to boost your product visibility. We manage everything from campaign setup to optimization, ensuring your listings stand out in a competitive marketplace.",
    tagColor: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "PPC for Various Platforms",
    desc: "Our expertise goes beyond Google and Amazon. We manage PPC campaigns across Bing, LinkedIn, and more. Whether targeting Bing Ads or small business audiences, we deliver results through tailored strategies.",
    tagColor: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Google PPC Campaigns",
    desc: "We create and manage Google PPC campaigns that maximize your ROI. From search ads to display ads, our team ensures your business reaches the right audience. We also monitor your ad spend closely to get the most out of your budget.",
    tagColor: "bg-blue-100 text-blue-800",
  },
];

const Section_c = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <div className="max-w-[1200px] mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-12">Our PPC Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-b-4 border-blue-300 p-6 text-left hover:shadow-md transition-all duration-300"
            >
              <div className={`text-xl font-semibold mb-3 p-2 rounded ${service.tagColor}`}>
                {service.title}
              </div>
              <p className="text-gray-700 text-md leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_c;
