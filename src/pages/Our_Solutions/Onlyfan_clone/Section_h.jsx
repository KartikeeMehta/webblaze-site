import React from "react";

const Section_h = () => {
  return (
    <section
      className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/11/Frame-1171275642-2-scaled.webp')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-8">
          Join the Future of Social Media with Webblaze
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {[
            {
              title: "Innovative Solutions",
              text: "Webblaze is at the forefront of social media innovation. Our solutions, such as the great social media scheduler loose and unfastened social media equipment, are designed to preserve you ahead of the competition.",
            },
            {
              title: "User-Centric Design",
              text: "We prioritize consumer enjoy in each assignment. From social media publish management gear to social media planner apps, our designs are person-friendly and green.",
            },
            {
              title: "Industry Expertise",
              text: "With a wealth of enjoy in developing famous social media apps and first-rate apps for advertising on social media, Webblaze is your depended on companion in virtual success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-md text-white rounded-lg p-6 max-w-sm"
            >
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_h;
