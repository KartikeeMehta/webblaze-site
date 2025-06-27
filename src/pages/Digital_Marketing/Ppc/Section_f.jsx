
import React from "react";

const features = [
  {
    title: "1. Increased Visibility",
    desc: "PPC advertising increases your brand’s visibility on Google and other platforms. Our services help ensure your business is seen by potential customers.",
    img: "https://webblazesofttech.com/wp-content/uploads/2025/02/company-research-results-diagrams-pie-charts-laptop-screen-african-american-female-remote-corporate-worker-analyzing-business-statistics-home-office-evening-focus-computer_11zon-scaled.jpg", // Replace with your image
  },
  {
    title: "2. Targeted Advertising",
    desc: "We focus on audience targeting through keyword ideas, demographics, and user behavior. This ensures your ads reach the right people with better results.",
    img: "https://webblazesofttech.com/wp-content/uploads/2025/02/1015494_OJ91CD0.jpg", // Replace with your image
  },
  {
    title: "3. Measurable Results",
    desc: "We offer precise data like CTR, impressions, and cost-per-click. This helps you track ROI and improve performance effectively.",
    img: "https://webblazesofttech.com/wp-content/uploads/2025/02/computer-dark-room-with-graphs-screen_11zon-scaled.jpg", // Replace with your image
  },
];

const Section_f = () => {
  return (
    <section className="relative bg-[#0F1123] bg-[url('background-lines.webp')] text-white py-24 px-6 md:px-16">
      <div className="absolute inset-0 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/waves.png')] opacity-10 z-0 bg-cover bg-repeat"></div>

      <div className="max-w-[1200px] mx-auto  relative z-10 ">
        <h2 className="text-center text-2xl md:text-4xl font-semibold mb-16">
          Why PPC with Webblaze?
        </h2>

        <div className="flex flex-col gap-28">
          {features.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Oval Image */}
              <div className="w-[240px] h-[440px] rounded-full overflow-hidden relative border-[4px] border-yellow-400">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-3/5 text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-lg text-gray-200">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_f;
