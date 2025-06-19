
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
    <div className="w-full mx-auto bg-[#0F172A] text-white py-16 px-6 sm:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our React.Js Development Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#172B47] border border-blue-500/20 rounded-xl p-6 shadow-md hover:shadow-blue-600/30 transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-sm text-blue-100 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_c
