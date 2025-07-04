import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Section_f = () => {
  return (
    <div className="bg-gray-50 py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row justify-between gap-10 px-6">
        <div className="flex-1">
          <p className="text-2xl text-red-500 font-medium mb-2">Talk To Our Expert</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Ready to elevate your <br />
            WordPress website with <br />
            Webblaze?
          </h2>
          <p className="text-gray-600 mb-6 mt-8">
            Talk to our professional nowadays to speak about your mission and find out how <br />
            Webblaze will let you reap your format dreams.
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-700">Phone Number</p>
                <p className="font-semibold text-gray-800">+91 90414 77720</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-red-100 text-red-500 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-700">Phone Number</p>
                <p className="font-semibold text-gray-800">+91 6239882306</p>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-6 mt-7">
            <div className="bg-red-100 text-red-500 p-3 rounded-full">
              <FaMapMarkerAlt />
            </div>
            <p className="font-semibold text-gray-800">
              Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,<br />
              Sahibzada Ajit Singh Nagar, Punjab 160055.
            </p>
          </div>

          <p className="text-gray-600 mt-20">
            With Webblaze, you may count on pinnacle-tier picture layout services that
            increase your brand and captivate your target market. Let us assist you create a
            visible identity that stands out and drives fulfillment.
          </p>
        </div>

        <div className="flex-1 bg-white rounded-2xl shadow-md p-6 py-10 flex flex-col items-center text-center">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/video-call-4268426-3551765.png"
            alt="Schedule Meeting"
            className="w-full max-w-xs mb-6"
          />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Schedule Meeting</h3>
          <p className="text-gray-600 mb-4">
            Welcome to our easy-to-use meeting scheduler! Planning and <br />
            organizing meetings has been simpler.
          </p>

          <button
            onClick={() => window.open('https://calendly.com/rajenderkashyap87/30min?month=2025-07', '_blank')}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_f;
