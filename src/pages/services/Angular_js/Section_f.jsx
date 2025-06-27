import React from "react";

function Section_f() {
  return (
    <div className="w-full py-16 md:py-24 bg-[#f8f9fa]">
      <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row gap-8 md:gap-16 justify-center items-center">
        {/* Left: Info */}
        <div className="flex-1 max-w-xl">
          <div className="text-2xl text-[#F75C4E] font-medium mb-2">
            Talk To Our Expert
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to leverage the energy of Angular.Js to your next internet task?
          </h2>
          <p className="text-gray-600 mb-6">
            Talk to our professional nowadays to speak about your mission and find out how Webblaze will let you reap your format dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-2">
            <div className="flex items-center gap-2">
              <span className="text-[#F75C4E] text-2xl">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">Phone Number</div>
                <div className="font-semibold text-gray-800">
                  +91 90414 77720
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#F75C4E] text-2xl">
                <svg width="24" height="24" fill="currentColor">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
              </span>
              <div>
                <div className="text-xs text-gray-500">Phone Number</div>
                <div className="font-semibold text-gray-800">
                  +91 6239882306
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[#F75C4E] text-2xl">
              <svg width="24" height="24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
            </span>
            <div>
              <div className="font-semibold text-gray-800">
                Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,
                Sahibzada Ajit Singh Nagar, Punjab 160055.
              </div>
            </div>
          </div>
        </div>
        {/* Right: Meeting Card */}
        <div className="flex-1 max-w-md w-full">
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/07/schedule-meetign.svg" // Replace with your illustration path
              alt="Schedule Meeting"
              className="w-40 h-40 object-contain mb-4"
            />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Schedule Meeting
            </h3>
            <p className="text-gray-600 mb-6">
              Welcome to our easy-to-use meeting scheduler! Planning and
              organizing meetings has been simpler.
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
              Schedule a Meeting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_f;
