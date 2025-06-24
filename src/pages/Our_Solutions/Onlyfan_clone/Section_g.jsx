import React from "react";

const services = [
  {
    id: 1,
    title: "White Label Solutions",
    description:
      "Our white label social media platform permits you to brand the app as your very own. Whether you’re growing a brand new social media platform or looking for sites like hootsuite, our white label answers offer flexibility and customization.",
  },
  {
    id: 2,
    title: "Social Media Marketing Tools",
    description:
      "Utilize our social media marketing structures and social media marketing apps to decorate your advertising efforts. From pleasant social media scheduling structures to social media equipment for commercial enterprise, we offer the whole lot you need to be triumphant.",
  },
  {
    id: 3,
    title: "Social Media Monitoring",
    description:
      "Stay knowledgeable with our social media monitoring systems and social media tracking equipment. Monitor mentions, song overall performance, and engage together with your audience correctly.",
  },
  {
    id: 4,
    title: "Content Scheduling",
    description:
      "Use our content scheduling app and loose content material scheduler to make certain your posts are well timed and tasty. Whether it’s an instagram scheduling app or a social media calendar app, our gear are designed to simplify your workflow.",
  },
];

const Section_g = () => {
  return (
    <section className="w-full bg-white text-[#1e293b] py-20 px-4">
      <div className="max-w-[1200px] mx-auto px-6 ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Additional Services
        </h2>

        <div className="space-y-10">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col md:flex-row md:items-start md:justify-between border-b border-gray-300 pb-6"
            >
              <div className="flex items-start md:w-1/3 mb-4 md:mb-0">
                <span className="text-lg font-medium mr-2">{service.id}.</span>
                <span className="text-lg font-medium border-l border-black pl-4">
                  {service.title}
                </span>
              </div>

              <p className="md:w-2/3 text-sm text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_g;
