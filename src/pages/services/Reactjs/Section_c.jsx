import React from "react";

const services = [
  {
    title: "Custom React.Js Development",
    description:
      "Our crew of experienced React developers excels in growing bespoke web packages that align flawlessly with your enterprise goals. From conceptualization to deployment, we make certain every element of your project is meticulously crafted for best overall performance and person engagement.",
  },
  {
    title: "React.Js Consulting",
    description:
      "Navigating the complexities of React.Js development may be daunting. Our professionals provide strategic consulting offerings that will help you make informed selections, optimize your utility’s structure, and reap your improvement goals efficaciously.",
  },
  {
    title: "React.Js Maintenance and Support",
    description:
      "Ensuring your React.Js software runs easily is crucial for sustained achievement. We offer complete upkeep and assist offerings to hold your application secure, updated, and acting at its best.",
  },
  {
    title: "React.Js Integration",
    description:
      "Integrating React.Js with different technologies and platforms is seamless with our knowledge. Whether it is integrating APIs, 0.33-birthday party services, or databases, we make sure clean interoperability without compromising on overall performance or safety.",
  },
];

const Section_c = () => {
  return (
    <section className="w-full bg-[#0F172A] bg-[url('background-lines.webp')] bg-cover bg-center text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Our React.Js Development Services
        </h2>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#172B47] border border-blue-500/20 rounded-2xl p-6 md:p-8 shadow-md hover:shadow-blue-600/30 transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
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
