import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
    const navigate=useNavigate()

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
          <p className="text-lg mt-6 text-[#484B56] md:text-sm leading-relaxed">
           In today’s fast-paced virtual international, having a dependable and efficient fee utility is essential for organizations of all sizes. Webblaze, a leading net development organization, offers a pinnacle-notch  cash app clone  that caters on your unique enterprise needs. Our expertise in  wallet improvement  and  payment utility production  ensures that you get hold of a strong and scalable answer.
          </p>
           <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>


      </div>
    </div>
  );
};

export default Section_a;
