import React from "react";

function Section_d() {
  return (
    <section className="w-full bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-[#1c202d] bg-cover bg-center py-16 flex items-center justify-center min-h-[500px]">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1 text-white w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Partner Success
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
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
          <button className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow transition">
            Explore More
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-1 flex justify-center items-center w-1/2">
          <div className="relative">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/07/Partner-success-image.webp"
              alt="Partner Success"
              className="rounded-2xl border-8 border-white shadow-2xl max-w-full md:max-w-[575px] md:max-h-[415px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_d;
