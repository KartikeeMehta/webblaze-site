import React from 'react';

function Section_a() {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text + Button */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
            Master <span className="text-red-500">Linux Administration</span> with Webblaze
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center md:text-left">
            Are you trying to beautify your career in IT with Linux management capabilities?
            At Webblaze, we provide professional Linux administration services and training
            tailor-made to help you prevail. Whether you’re a seasoned professional or simply
            starting, our complete publications and offerings cowl the whole lot from primary
            device control to advanced server configurations.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-[320px] sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Webblaze-Your-Go-To-WordPress-Development-Company.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
