import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Section_e = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <p className="text-red-500 font-semibold mb-2">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            How To Get Started
          </h2>
          <p className="text-gray-700 mb-8">
            Talk to our expert to learn more about how Webblaze’s EV charging app can enhance your EV charging enjoy.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-semibold">+91 90414 77720</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="font-semibold">hello@webblazesofttech.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 text-red-600 p-3 rounded-full mt-1">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="font-medium">
                  Cyber cube, C201-202, Phase 8B, Industrial Area, Sector 74,<br />
                  Sahibzada Ajit Singh Nagar, Punjab 160055.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 shadow-lg rounded-2xl text-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/schedule-meetign.svg"
            alt="Meeting Illustration"
            className="w-full h-52 object-contain mx-auto mb-6"
          />
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Schedule Meeting</h3>
          <p className="text-gray-600 mb-6">
            Welcome to our easy-to-use meeting scheduler! Planning and organizing meetings has been simpler.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition">
            Schedule a Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section_e;
