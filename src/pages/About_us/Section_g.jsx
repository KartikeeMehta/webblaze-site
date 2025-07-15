import React, { useEffect, useRef } from "react";

const teamMembers = [
  {
    name: "Simranjit Kaur",
    role: "Sr.BDE",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/simran.png",
  },
  {
    name: "Gagan Thakur",
    role: "PHP Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/gagan.png",
  },
  {
    name: "Kapil Badyal",
    role: "Sr. UI/UX Designer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/kapil.png",
  },
  {
    name: "Abhishek",
    role: "Digital Marketing Executive",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/abhishek.png",
  },
  {
    name: "Ruchika Sharma",
    role: "PHP Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/ruchika.png",
  },
  {
    name: "Nitish Aujla",
    role: "Front End Developer",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/nitish.png",
  },
];

const Section_g = () => {
  const scrollRef = useRef(null);
  const indexRef = useRef(0);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.firstChild.offsetWidth + 32; // 32px for gap
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      indexRef.current =
        container.scrollLeft + cardWidth >= maxScrollLeft
          ? 0
          : indexRef.current + 1;
    } else {
      indexRef.current =
        container.scrollLeft - cardWidth <= 0
          ? teamMembers.length - 1
          : indexRef.current - 1;
    }

    container.scrollTo({
      left: indexRef.current * cardWidth,
      behavior: "smooth",
    });
  };

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      scroll("right");
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="text-red-500 text-lg font-medium mb-2">Our Team</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Meet our creative staff
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm md:text-base px-4">
          We pride ourselves on delivering a value proposition that goes beyond expectations.
          Our approach is centered on understanding your business inside.
        </p>

        <div className="relative">
          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto no-scrollbar px-2 scroll-smooth snap-x snap-mandatory"
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 snap-start bg-white p-4 sm:p-6 rounded-2xl shadow text-center 
                w-[85vw] sm:w-[48vw] md:w-[32vw] lg:w-[270px]"
              >
                <div className="rounded-xl overflow-hidden w-full h-[300px] mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Arrows: Always visible */}
          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-200 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-blue-200 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
