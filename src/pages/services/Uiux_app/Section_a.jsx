import React from "react";
import { useNavigate } from "react-router-dom";

function Section_a() {
  const navigate = useNavigate();

  return (
    <div
      className="remove_bg relative w-full min-h-[650px] flex items-center justify-center bg-no-repeat bg-cover bg-right-top py-20 px-4 lg:bg-origin-content"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/08/UI-and-UX-Development-Services-through-way-of-Webblaze-Background.webp')",
      }}
    >
      <div className="max-w-[1200px] w-full flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 gap-8">
        <div className="w-full lg:w-[50%] text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            <span className="text-red-500">UI and UX Development</span>
          </h2>
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
            Services through way of Webblaze
          </h3>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At Webblaze, a renowned internet development corporation, we provide
            incredible UI and UX improvement offerings that cater to agencies
            aiming to decorate their virtual presence. Our expertise spans a
            wide range of character-centric designs that not only captivate but
            convert. By blending creativity with capability, we make certain
            that your digital platforms offer a first-rate consumer experience.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>

        <div className="hidden lg:block w-[50%]" />
        <img src="https://webblazesofttech.com/wp-content/uploads/2024/07/ui-ux-page-banner.webp" className="block lg:hidden" alt="" />
      </div>
    </div>
  );
}

export default Section_a;
