import React from "react";

const cardContents = [
  {
    icon: "https://cdn-icons-png.flaticon.com/512/726/726476.png", // Replace with your icon
    title: "Ongoing Support",
    description:
      "Webblaze affords ongoing guide and preservation on your PHP packages. Our team guarantees your applications are updated, secure, and performing optimally. We provide worm fixes, security patches, and feature upgrades to preserve your application walking easily.",
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4359/4359873.png", // Replace with your icon
    title: "PHP Debugging and Testing",
    description:
      "Our PHP developers use superior debugging equipment like Xdebug and PHPStan to identify and resolve problems efficiently. We behavior thorough testing, including unit testing and integration checking out, to make sure your application capabilities perfectly. Our purpose is to deliver a computer virus-loose and reliable solution.",
  },
];

function Section_d() {
  return (
    <div
      className="relative min-h-[60vh] w-full flex flex-col items-center justify-center bg-[#fafbfc] overflow-hidden py-12"
      style={{
        backgroundImage: "url('/bg_section_b_shopify.png')", // Use your background image if needed
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top right",
      }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 mt-8 text-gray-900">
        PHP Maintenance and Support
      </h2>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-center items-stretch px-4">
        {cardContents.map((card, idx) => (
          <div
            key={idx}
            className="flex-1 bg-white rounded-xl shadow-md p-8 border-b-4 border-blue-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-blue-400 min-w-[260px] max-w-full flex items-start gap-4"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-12 h-12 object-contain flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                {card.title}
              </h3>
              <p className="text-gray-600 text-base">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section_d;
