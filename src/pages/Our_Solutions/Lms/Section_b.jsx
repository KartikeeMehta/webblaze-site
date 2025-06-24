import React from 'react';

function Section_b() {
  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
      <div
        id="txtbtnimg"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto"
      >
        <div className=''></div>
        {/* TEXT + BUTTON */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Why Choose Webblaze LMS?</h1>
          

          <p className="text-white text-lg sm:text-lg lg:text-xl leading-relaxed">
            At Webblaze, we apprehend that a sturdy LMS is critical for effective training and education. Our LMS software offers an intuitive consumer interface, powerful analytics, and seamless integration skills, making it one of the excellent LMS platforms available nowadays.


          </p>

          <div id="btn">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-md transition duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* IMAGE */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Why-Choose-Webblaze-LMS-2.webp"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
