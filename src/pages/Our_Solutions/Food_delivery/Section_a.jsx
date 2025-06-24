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
            Food Delivery App <span className='text-red-500'>Development Services by</span> using way of Webblaze
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            In the fast-paced worldwide of on line food services, having a sturdy meals transport app ought to make all of the difference. At Webblaze, a main net development business employer, we give attention to meals delivery app development, supplying modern-day answers to fulfill your business organisation goals. From concept to deployment, we ensure that your app sticks out within the competitive marketplace.
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
              src="https://webblazesofttech.com/wp-content/uploads/2025/02/robot-fruit-stand-surrounded-by-various-citrus-fruits-market_11zon-1024x512.jpg"
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
