import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaPencilRuler, FaUserEdit, FaCode } from 'react-icons/fa';

const services = [
  {
    title: "UI UX Design",
    description:
      "Our UI UX design offerings cover the whole lot from preliminary idea development to final implementation. We create designs which can be visually attractive, user-friendly, and aligned collectively with your logo identification.",
    icon: <img src="UiUx_9.png" alt="" />,
    bg: "bg-blue-500",
    tagBg: "bg-blue-100",
  },
  {
    title: "UX Design",
    description:
      "Our UX layout services focus on growing seamless and fun man or woman critiques. We conduct person research, create person personas, and expand wireframes and prototypes to ensure that every problem of the user journey is optimized.",
    icon: <img src="UiUx_10.png" alt="" />,
    bg: "bg-red-400",
    tagBg: "bg-red-100",
  },
  {
    title: "UI Design",
    description:
      "Our UI layout services embody designing the visual additives of your digital product. We create layouts, pick coloration schemes, and design icons and typography to create a cohesive and appealing interface.",
    icon: <img src="UiUx_11.png" alt="" />,
    bg: "bg-yellow-400",
    tagBg: "bg-yellow-100",
  },
  {
    title: "UI UX Design Services",
    description:
      "We offer complete UI UX layout offerings that cover all factors of the layout method. From individual research to final design implementation, we make sure that your digital product gives an first-rate individual revel in.",
    icon: <img src="UiUx_12.png" alt="" />,
    bg: "bg-yellow-400",
    tagBg: "bg-yellow-100",
  },
  {
    title: "UI UX Developer",
    description:
      "Our group of UI UX developers works cautiously with our designers to convey the designs to lifestyles. We use the current day technology and brilliant practices to ensure that the final product is not simplest visually attractive but moreover fantastically practical and responsive.",
    icon: <img src="UiUx_13.png" alt="" />,
    bg: "bg-blue-500",
    tagBg: "bg-blue-100",
  },
];

const Section_e = () => {
  return (
    <section className="bg-white py-20 px-6 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base mb-12">
          Choosing the proper accomplice for UI and UX improvement is critical to the achievement of your digital product. Here’s why Webblaze sticks out
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 text-left relative transition-all duration-300 hover:shadow-lg"
              style={{ boxShadow: '0 8px 0 #3b82f6' }} // blue bottom border feel
            >
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-md font-bold mb-4 ${service.tagBg}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${service.bg}`}>
                  {service.icon}
                </div>
                <span className="text-sm sm:text-base text-gray-800">{service.title}</span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_e;
