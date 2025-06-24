import React from "react";

const services = [
  {
    title: "Consultation",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-7.png",
    points: [
      "Schedule a unfastened session to speak about your specific needs and how our software can assist.",
      "Personalized hints to optimize your enterprise operations.",
    ],
  },
  {
    title: "Implementation",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-6.png",
    points: [
      "Smooth implementation technique with minimal disruption on your business.",
      "Comprehensive onboarding to make certain all capabilities are utilized efficaciously.",
    ],
  },
  {
    title: "Maintenance",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/10/image-5.png",
    points: [
      "Regular software program protection to make certain best performance.",
      "Quick decision of any technical problems that arise.",
    ],
  },
];

const Section_f = () => {
  return (
    <section className="bg-[#f9fbfc] py-20 px-6 md:px-10 text-black">
      <div className="max-w-[1200px] mx-auto text-center px-5">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#111827]">
          Additional Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 place-items-stretch">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col text-left"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-semibold mb-4 text-[#111827]">
                  {service.title}
                </h3>
                <ul className="text-gray-800 list-disc pl-4 space-y-2 text-sm">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_f;
