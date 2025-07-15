import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Section_f = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-xl sm:text-2xl text-red-500 font-medium mb-2">
            Talk To Our Expert
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            Ready to elevate your <br className="hidden sm:block" />
            WordPress website with <br className="hidden sm:block" />
            Webblaze?
          </h2>
          <p className="text-gray-600 mb-6 mt-4 text-sm sm:text-base">
            Talk to our professional nowadays to speak about your mission and find out how <br className="hidden sm:block" />
            Webblaze will let you reap your format dreams.
          </p>

          {/* Phone Numbers */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            {[
              { number: '+91 90414 77720' },
              { number: '+91 62398 82306' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="bg-red-100 text-red-500 p-3 rounded-full">
                  <FaPhoneAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-700">Phone Number</p>
                  <p className="font-semibold text-gray-800">{item.number}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 mb-6 mt-6">
            <div className="bg-red-100 text-red-500 p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <p className="font-semibold text-gray-800 text-sm sm:text-base leading-relaxed">
              Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,<br />
              Sahibzada Ajit Singh Nagar, Punjab 160055.
            </p>
          </div>

          {/* Footer Description */}
          <p className="text-gray-600 mt-12 text-sm sm:text-base">
            With Webblaze, you may count on top-tier graphic design services that
            elevate your brand and captivate your target audience. Let us help you
            create a visual identity that stands out and drives success.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-6 sm:p-10 flex flex-col items-center text-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/schedule-meetign.svg"
            alt="Schedule Meeting"
            className="w-full max-w-xs mb-6"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Schedule Meeting
          </h3>
          <p className="text-gray-600 mb-5 text-sm sm:text-base">
            Welcome to our easy-to-use meeting scheduler! <br />
            Planning and organizing meetings has never been simpler.
          </p>

          <button
            onClick={() =>
              window.open('https://calendly.com/rajenderkashyap87/30min?month=2025-07', '_blank')
            }
            className="bg-[#1C92FF] text-white px-6 py-3 rounded-xl hover:border-blue-500 border-2 hover:bg-white hover:text-[#1C92FF] transition-all duration-200"
          >
            Schedule a Meeting
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
