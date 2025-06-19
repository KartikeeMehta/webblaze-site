import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="flex-1">
          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-black">
            Webblaze: Expert{" "}
            <span className="text-red-500">
              Vue.Js <br className="hidden sm:block" />
              Development Services
            </span>
          </h2>
          <p className="mt-6 text-gray-700 text-base md:text-sm leading-relaxed">
            Welcome to Webblaze, your cross-to net development company focusing
            on Vue.Js development offerings. Vue.Js is a revolutionary
            JavaScript framework used to create dynamic and excessive-performing
            web packages. Whether you are looking for a single-page application
            or a complex company-degree solution, Webblaze has the knowledge to
            supply top-notch results. Our crew of seasoned builders harnesses
            the electricity of Vue.Js to build scalable, maintainable, and green
            web packages that meet your business desires.
          </p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>

        <div className="flex-1">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full max-h-[420px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
