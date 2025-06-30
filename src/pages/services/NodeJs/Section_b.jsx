import React from 'react';

export const Section_b = () => {
  return (
    <div className="relative bg-[#F9FAFB] py-16 px-6 sm:px-12 overflow-hidden">
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg" 
        alt="paper plane"
        className="absolute top-4 right-4 w-[150px] sm:w-[150px]"
      />
      <img
        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp"
        alt="dots"
        className="absolute bottom-4 right-4 w-10 sm:w-12 opacity-50"
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="w-full h-72 sm:h-96 rounded-2xl border-[6px] border-yellow-400 overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/young-man-mobile-developer-writes-program-code-computer-check-app-smartphone-programmer-work-home-office_11zon-scaled.jpg"
            alt="Vue.Js developer working"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
            Why Choose Node.Js?
          </h2>
          <p className="text-gray-700 text-lg leading-9">
            Node.Js, famend for its performance and scalability, is right for building fast and scalable community applications. Whether you’re aiming to expand real-time applications, APIs, or microservices, Node.Js offers unprecedented performance. Its non-blocking off, event-driven architecture guarantees seamless dealing with of a couple of requests, making it a top preference for excessive-traffic web sites and packages.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
