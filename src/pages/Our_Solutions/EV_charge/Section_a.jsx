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
            Discover the <span className='text-red-500'>Ultimate EV</span> Charging <span className='text-red-500'>App with</span> Webblaze
          </h1>

          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
            Welcome to Webblaze, your relied on associate in net development, and author of the contemporary-day EV charging app. Our revolutionary solution is designed to enhance the electrical automobile (EV) charging experience, making it extra available and person-pleasant. Below, you’ll find out special insights into our EV charging technology, at the side of the many benefits of using our app. If you’re searching for to growth your EV charging revel in, you’re in the right area.
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
              src="https://webblazesofttech.com/wp-content/uploads/2024/11/Group-1171275879.png"
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
