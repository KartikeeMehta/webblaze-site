import React from "react";

function Section_b() {
  return (
    <section className="bg-[#fafbfc] py-[85px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:flex lg:items-center lg:gap-16">
        <div className="relative mb-10 lg:mb-0 lg:w-1/2">
          <div className="absolute top-5 w-35 h-20 rounded-lg  flex items-center justify-center">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/04/rocket-in-pocket-1.gif"
              alt="rocket icon"
              className="w-[100%] h-[100px] object-contain"
            />
          </div>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/About.webp"
            alt="Team working"
            className="rounded-[3rem] w-[511px] h-[588px] shadow-xl"
          />
        </div>

        <div className="lg:w-1/2">
          <h3 className="text-red-500 font-medium text-2xl  mb-2">About Us</h3>
          <h2 className="font-bold text-gray-900 mb-4 leading-tight text-3xl">
            Premier Code Crafting Agency
          </h2>
          <p className="text-[#484b56] text-base font-normal  mb-6">
            WebBlaze Softtech is the ultimate hub for all things digital! As a
            top-tier web development agency, we are experts in creating
            breathtaking websites and dynamic web applications that deliver
            real results.
          </p>
          <p className="text-[#484b56] text-base font-normal mb-6">
            Our team of professionals specializes in SEO, branding, and digital
            marketing, guaranteeing that your online presence shines above the
            rest. Whether you need a custom e-commerce platform or a
            sophisticated corporate website, we have the expertise and
            innovation to turn your ideas into reality.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow transition-all duration-300"
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
}

export default Section_b;
