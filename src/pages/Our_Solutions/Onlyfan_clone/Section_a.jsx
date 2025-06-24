import React from "react";

const Section_a = () => {
  return (
    <section
      className="w-full h-[480px] md:h-[500px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2025/02/fashion-portrait-young-fit-sportive-woman-stylish-luxury-swimwear-gradient-perfect-body-ready-summertime-flyer-with-copyspace-scaled.jpg')",
      }}
    >
      <div className="max-w-7xl w-full px-6 md:px-12 mx-auto">
        <div className="text-white">
          <h1 className="text-3xl md:text-5xl font-bold">
            Webblaze's OnlyFans Clone
          </h1>
          <p className="text-base md:text-xl font-light mt-2">
            A Comprehensive Solution for Your Social Media Needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
