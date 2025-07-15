import React from "react";
import { useNavigate } from "react-router-dom";

function Section_d() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-[#1c202d] bg-cover bg-center py-16 flex items-center justify-center min-h-[500px]">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-4">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Partner Success
          </h2>
          <p className="text-base sm:text-[16px] leading-relaxed mb-6">
            WebBlaze Softtech provides tailored solutions for businesses of any
            size, collaborating closely to comprehend objectives and surpass
            expectations.
            <br />
            We are always one step ahead, continuously evolving and adjusting to
            provide the latest solutions, ranging from web applications to SEO.
            We offer cutting-edge solutions, a customized approach, and
            outstanding customer service to propel your business to success in
            the digital realm.
          </p>
          <button
            onClick={() => navigate("/About_us")}
            className="bg-[#1c92ff] py-[10px] px-[28px] rounded-xl hover:bg-white text-white hover:text-[#1c92ff] border-2 border-blue-500 shadow-md transition-colors duration-300 min-w-[150px]"
          >
            Explore More
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/Partner-success-image.webp"
            alt="Partner Success"
            className="rounded-2xl border-8 border-white shadow-2xl w-full max-w-[500px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Section_d;
