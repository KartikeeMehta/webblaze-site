import React from "react";

function Section_a() {
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
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
