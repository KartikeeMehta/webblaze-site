import React from "react";

const Section_i = () => {
  return (
    <section className="bg-[#0B1021] bg-[url('/background-lines.webp')] bg-cover bg-center text-white py-16 px-4">
      
      <div className="max-w-[1200px] mx-auto">
              <h2 className=" text-center text-3xl md:text-4xl font-bold md:text-left mb-4">
            Why Choose Webblaze?
          </h2>
        <div className="wrap_inner flex flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/09/Rectangle-42573-2.png" // 
            alt="Why Choose Webblaze"
            className="w-full rounded-[30px] border-[10px] border-red-500"
          />
        </div>

        {/* Right Side Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">

          {/* Box 1 */}
          <div className="border border-white/40 rounded-xl p-5">
            <p>
              <span className="font-semibold text-white">Expertise and Experience :</span>{" "}
              With years of enjoy in chatbot development, Webblaze presents exquisite,
              reliable solutions tailor-made on your industrial employer needs..
            </p>
          </div>

          {/* Box 2 */}
          <div className="border border-white/40 rounded-xl p-5">
            <p>
              <span className="font-semibold text-white">Comprehensive Support :</span>{" "}
              We offer ongoing useful resource and renovation to make sure your chatbot
              keeps to perform optimally.
            </p>
          </div>

          {/* Box 3 */}
          <div className="border border-white/40 rounded-xl p-5">
            <p>
              <span className="font-semibold text-white">Innovative Solutions :</span>{" "}
              Our group remains up to date with the state-of-the-art advancements in AI
              technology, ensuring your chatbot is prepared with cutting-edge abilities.
            </p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Section_i;
