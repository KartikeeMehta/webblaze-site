import React from "react";

const services = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921826.png",
    title: "Professional Video Editing",
    description:
      "Our video enhancing services cater to a huge sort of needs, from business enterprise movement pix to private tasks. We use enterprise-fashionable software like Adobe Premiere Pro, Sony Vegas, and Wondershare Filmora to ensure your films are edited to perfection.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    title: "Movie Editing",
    description:
      "We offer complete movie enhancing offerings, making sure your pics is seamlessly edited and visually appealing.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921817.png",
    title: "YouTube Editing",
    description:
      "Enhance your YouTube movies with our expert enhancing offerings. We attention on developing engaging and dynamic content material material that stands out.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921820.png",
    title: "Song Editing",
    description:
      "Our organization can edit your music motion photos, ensuring outstanding audio and visible synchronization.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921819.png",
    title: "AI Video Editing",
    description:
      "Utilizing AI generation, we provide superior editing services that encompass automatic enhancements and corrections for superior video great.",
  },
];

function Section_b() {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Comprehensive Video Editing Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 justify-items-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center max-w-xs mx-auto"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-20 h-20 mb-4"
                loading="lazy"
              />
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_b;
