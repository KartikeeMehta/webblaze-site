import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Section_f = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <div className="text-left">
          <p className="text-xl sm:text-2xl text-red-500 font-semibold mb-2">Talk To Our Expert</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Ready to harness the full potential of React.Js for your next project?
          </h2>
          <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
            Talk to our expert today to discuss your project and discover how Webblaze can help you achieve your development goals.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaPhoneAlt size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold text-base">+91 90414 77720</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaEnvelope size={18} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold text-base">hello@webblazesofttech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaMapMarkerAlt size={18} />
              </div>
              <div className="text-base text-gray-800 leading-relaxed">
                Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,<br />
                Sahibzada Ajit Singh Nagar, Punjab 160055.
              </div>
            </div>
          </div>
        </div>

        {/* Meeting Scheduler Card */}
        <div className="bg-white p-6 sm:p-8 shadow-lg rounded-2xl text-center w-full">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/schedule-meetign.svg"
            alt="Meeting Illustration"
            className="w-full h-52 object-contain mx-auto mb-6"
          />
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">Schedule Meeting</h3>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            Welcome to our easy-to-use meeting scheduler! Planning and organizing meetings has never been simpler.
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
