import React, { useState } from "react";

const slides = [
  {
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/NFT-non-fungible-token.webp",
    description:
      "We evolved a custom NFT artwork maket for an Austrailian customer, allowing artists to sell their virtual artwork globally. The platform capabilities advanced search options , steady price gateways , and a vibrant network of artists and creditors",
  },
  {
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/NFT-non-fungible-token.webp",
    description:
      "We helped scale a fashion eCommerce brand with a seamless mobile-first interface, integrated payment systems, and real-time inventory tracking.",
  },
  {
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/NFT-non-fungible-token.webp",
    description:
      "Our AI-driven platform empowered a healthcare startup to deliver personalized treatment plans, improving patient outcomes and engagement.",
  },
];

const Section_e = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = slides[activeIndex];

  return (
    <section className="bg-[#0d1117] bg-[url('background-lines.webp')] py-16 px-4 md:px-8 text-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Client Success Stories</h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 transition-all duration-500">
          <div className="bg-white p-2 rounded-md">
            <img
              src={currentSlide.image}
              alt={`Slide ${activeIndex + 1}`}
              className="w-[300px] h-auto rounded-sm object-cover"
            />
          </div>

          <div className="max-w-xl text-left text-gray-300 text-base leading-relaxed">
            {currentSlide.description}
          </div>
        </div>

        {/* Slider Dots */}
        <div className="mt-10 flex justify-center items-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-red-500 scale-110" : "bg-white opacity-60"
              }`}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_e;
