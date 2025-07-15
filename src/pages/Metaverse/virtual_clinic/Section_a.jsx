import React from "react";
import { useNavigate } from "react-router-dom";

function Section_a() {
  const navigate = useNavigate()
  return (
    <div
      className="relative w-full min-h-[630px] flex items-center"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2025/02/images-that-simulate-x-rays-with-neon-colors-scaled.jpg')", // Replace with your actual image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0a1440]/70"></div>
      <div className="relative w-full max-w-[1200px] mx-auto px-4 py-16 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Virtual Clinic Services <br />
            via Webblaze: <br />
            Revolutionizing Healthcare
          </h1>
          <p className="text-white text-lg mb-8">
            Welcome to Webblaze, a leading internet improvement enterprise
            committed to innovating the healthcare industry with our modern day`
            digital medical institution offerings. Our answers are designed to
            provide seamless and reachable healthcare through digital reality
            generation, making sure that patients receive top-notch hospital
            therapy without leaving the consolation of their houses.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] 
             text-white border-2 border-[#1C92FF] hover:border-[#1C92FF] 
             font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>

        </div>
      </div>
    </div>
  );
}

export default Section_a;
