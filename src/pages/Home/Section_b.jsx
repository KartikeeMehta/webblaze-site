import React from "react";

function Section_b() {
  return (
    <section className="bg-[#fafbfc] py-[60px] sm:py-[85px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center lg:gap-16">
        {/* Left Image Section */}
        <div className="relative mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
          <div className="absolute top-0 left-0 w-[100px] h-[100px] z-10">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/04/rocket-in-pocket-1.gif"
              alt="rocket icon"
              className="w-full h-full object-contain"
            />
          </div>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/About.webp"
            alt="Team working"
            className="rounded-[3rem] w-full max-w-[500px] h-auto object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-red-500 font-medium text-xl sm:text-2xl mb-2">About Us</h3>
          <h2 className="font-bold text-gray-900 text-2xl sm:text-3xl mb-4 leading-snug">
            Premier Code Crafting Agency
          </h2>
          <p className="text-[#484b56] text-base font-normal mb-4">
            WebBlaze Softtech is the ultimate hub for all things digital! As a top-tier web development agency, we are experts in creating breathtaking websites and dynamic web applications that deliver real results.
          </p>
          <p className="text-[#484b56] text-base font-normal mb-6">
            Our team of professionals specializes in SEO, branding, and digital marketing, guaranteeing that your online presence shines above the rest. Whether you need a custom e-commerce platform or a sophisticated corporate website, we have the expertise and innovation to turn your ideas into reality.
          </p>
          <a
            href="/About_us"
            className="inline-block bg-[#1c92ff] py-[10px] px-[24px] rounded-[12px] hover:bg-white text-white hover:text-[#1c92ff] shadow-md border-[2px] border-blue-500 transition min-w-[150px] text-center"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section_b;
