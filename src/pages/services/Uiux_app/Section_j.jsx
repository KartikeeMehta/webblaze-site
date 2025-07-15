import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Section_j = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div>
          <p className="text-red-500 font-semibold mb-2 text-base sm:text-lg">Get In Touch</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to convert your virtual presence with our UI and UX improvement offerings
          </h2>
          <p className="text-gray-700 mb-8 text-sm sm:text-base">
            Our dedicated team is committed to providing prompt and effective support to ensure your needs are met.
            We believe in open communication and are always ready to listen. Reach out to us via phone, email, or live chat,
            or visit our office during business hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-base sm:text-lg">+91 90414 77720</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-base sm:text-lg">hello@webblazesofttech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-medium text-base sm:text-lg leading-relaxed">
                  Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,<br />
                  Sahibzada Ajit Singh Nagar, Punjab 160055.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Schedule */}
        <div className="bg-white p-6 sm:p-8 shadow-lg rounded-2xl text-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/schedule-meetign.svg"
            alt="Meeting Illustration"
            className="w-full max-w-xs h-52 object-contain mx-auto mb-6"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Schedule Meeting</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6">
            Welcome to our easy-to-use meeting scheduler! Planning and organizing meetings has never been simpler.
          </p>
          <button
            onClick={() =>
              window.open('https://calendly.com/rajenderkashyap87/30min?month=2025-07', '_blank')
            }
            className="bg-[#1C92FF] text-white px-6 py-3 rounded-xl hover:border-blue-500 border-[2px] hover:bg-white hover:text-[#1C92FF] transition-all duration-200"
          >
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_j;
