import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
  return (
    <div
      className="py-10 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="flex-1 ">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/smiling-girl-using-mobile-app-smartphone-shopping-credit-card-standing-beige-background-ord_11zon-scaled.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[400px] object-cover"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug text-black">
           Enhance Your <span className="text-red-500">Business with</span> a Custom
            <br />
            <span className="text-red-500">Cash App Clone</span> by way of Webblaze
          </h2>
          <p className="mt-6 text-[#484B56] text-sm md:text-sm leading-relaxed">
           In today’s fast-paced virtual international, having a dependable and efficient fee utility is essential for organizations of all sizes. Webblaze, a leading net development organization, offers a pinnacle-notch  cash app clone  that caters on your unique enterprise needs. Our expertise in  wallet improvement  and  payment utility production  ensures that you get hold of a strong and scalable answer.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>


      </div>
    </div>
  );
};

export default Section_a;
