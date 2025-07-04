import React from "react";

function Section_e() {
  return (
    <section className="bg-gray-50 py-16 w-full">
      <div className="text-center mb-8">
        <div className="text-red-400 text-[24px] font-medium mb-2">Clients</div>
        <h2 className="text-4xl md:text-4xl font-bold mb-2">
          Serving Clients All Over The World
        </h2>
        <p className="text-gray-500 text-[16px] max-w-xl mx-auto">
          Customers in over 180 countries are growing their businesses with
          Webblaze.
        </p>
      </div>
      <div className="relative flex flex-col items-center justify-center max-w-5xl mx-auto">
        {/* Earth Image */}
        <img
          src="https://webblazesofttech.com/wp-content/uploads/2024/07/map-background-design.webp"
          alt="Earth Map"
          className="w-full max-w-3xl opacity-60 select-none pointer-events-none"
        />
        {/* Stats Cards */}
        <div className="absolute top-[30%] left-[18%]">
          <div className="flex items-center bg-white rounded-xl shadow  h-[55px] w-[220px] mt-10 p-0.5">
            <span className="bg-red-400 text-white text-sm font-bold rounded-lg h-[100%] flex items-center justify-center p-1 mr-3">
              500+
            </span>
            <span className="text-gray-700 font-medium">Created Projects</span>
          </div>
        </div>

        <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
          <div className="flex items-center bg-white rounded-xl shadow h-[55px] w-[220px] p-0.5">
            <span className="bg-red-400 text-white font-bold rounded-lg py-2 text-sm mr-3 h-[100%] p-2.5 flex items-center justify-center">
              5k+
            </span>
            <span className="text-gray-700 font-medium">Awesome Clients</span>
          </div>
        </div>

        <div className="absolute top-[50%] right-[18%]">
          <div className="flex items-center bg-white rounded-xl h-[55px] w-[220px] p-0.5">
            <span className="bg-red-400 text-white font-bold rounded-lg py-2 text-sm mr-3 h-[100%] p-2.5 flex items-center justify-center">
              12+
            </span>
            <span className="text-gray-700 font-medium">Years in Business</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section_e;
