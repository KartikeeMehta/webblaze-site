import React from "react";

const Section_c = () => {
  return (
    <div className="bg-[#f9f9f9] py-20 px-4 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-14 relative z-10">
        <div className="relative w-full lg:w-[50%] border-l-[10px] border-yellow-400 rounded-l-[25px] overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/career-page.webp"
            alt="Office setup"
            className="w-full h-full object-cover rounded-l-[25px]"
          />
        </div>

        <div className="w-full lg:w-[50%] relative max-w-[580px]">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg"
            alt="plane"
            className="w-24 absolute -top-12 -right-14 hidden lg:block"
          />

          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5 leading-snug">
            If you believe you'd fit well with our team, we'd be happy to talk!
          </h2>

          <p className="text-slate-600 text-base leading-relaxed mb-8">
            We are looking for energetic, enthusiastic, and imaginative individuals who enjoy
            coding, designing, digital marketing and creating fantastic user experiences.
            Making things happen requires a committed team of talented folks. If you are
            seeking a workplace that challenges you, where you can learn from others and be
            encouraged to try new things, then you’ve come to the right place. Join us at
            Webblaze Softtech, and let’s achieve great things together!
          </p>

          <button className="bg-blue-500 hover:border-blue-600 border-[2px] hover:bg-white hover:text-blue-600  text-white font-semibold px-6 py-3 rounded-2xl shadow-lg">
            Let's Talk!
          </button>
        </div>
      </div>

      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp"
        alt="dots"
        className="absolute bottom-6 right-6 w-16 h-16 hidden lg:block z-0"
      />
    </div>
  );
};

export default Section_c;
