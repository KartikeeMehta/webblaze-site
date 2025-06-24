import React from 'react';

function Section_a() {
  return (
    <div className="bg-white">
      <div
        id="txtbtnimg"
        className="flex flex-col-reverse md:flex-row items-center gap-10 px-4 sm:px-8 md:px-12 py-12 max-w-[1200px] mx-auto"
      >
        <div className=''></div>
        {/* TEXT + BUTTON */}
        <div id="txtbtn" className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug">
            Build Your Perfect<span className='text-red-500'> Dating App </span> with Webblaze
          </h1>
          <p className='text-3xl font-bold'>Introduction</p>
          <p className="text-gray-600 text-base sm:text-lg lg:text-lg leading-relaxed">
            Creating a courting app tailor-made on your precise imaginative and prescient is essential in brand new competitive market. At Webblaze, a web development agency, we specialize in growing relationship apps that stand out. Whether you’re aiming for a Tinder clone or a unique relationship platform, we have the know-how to show your thoughts into a successful app. Our purpose is to help you build a fascinating, person-pleasant, and worthwhile dating app that draws customers and continues them coming back.
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
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275754-1.png"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_a;
