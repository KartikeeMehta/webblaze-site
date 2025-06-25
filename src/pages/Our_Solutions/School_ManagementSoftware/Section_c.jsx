import React from "react";


const features = [
  {
    title: "Dance Studio Management",
    iconBg: "bg-blue-500",
    icon: <img src="/School_5.png"  />, // Replace with proper icon if using icon components
    description:
      "Webblaze also caters to specialised instructional establishments like dance studios. Our dance studio software consists of capabilities for sophistication scheduling, scholar registration, and fee processing. The dance studio management software program helps streamline studio operations, making sure green elegance control and economic transactions.",
  },
  {
    title: "Computer Monitoring for Schools",
    iconBg: "bg-red-500",
    icon: <img src="/School_6.png"  />,
    description:
      "To keep a secure and productive digital environment, our computer monitoring software for colleges gives gear for monitoring pupil activity on college computers. This feature is important for preventing misuse of technology and ensuring that scholars remain centered on their research.",
  },
  {
    title: "Visitor Management",
    iconBg: "bg-blue-500",
    icon: <img src="/School_7.png"  />,
    description:
      "Safety and security are paramount in educational institutions. Our raptor traveller control machine helps colleges control and tune traffic effectively. This system complements school security through making sure that all visitors are registered and monitored all through their live on campus.",
  },
];

const Section_c = () => {
  return (
    <section className="bg-[#121726] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp)] text-white py-16 md:py-24 px-4 md:px-20">
     <div className="max-w-[1200px] mx-auto  px-5">

   
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
        Specialized Solutions for Various Educational Needs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1A2238] rounded-xl p-6 md:p-8 border border-blue-500 shadow-lg transition transform hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 flex items-center justify-center text-2xl rounded-full ${feature.iconBg} mb-6`}
            >
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
        </div>
    </section>
  );
};

export default Section_c;
