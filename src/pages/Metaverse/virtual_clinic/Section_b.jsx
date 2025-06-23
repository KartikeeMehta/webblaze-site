import React from "react";

function Section_b() {
  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/high-tech-travel-future-time_6_11zon-768x768.jpg" // Replace with your actual image
            alt="Virtual Clinic"
            className="rounded-xl object-cover w-[420px] h-[260px] bg-gray-100"
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            What is a Virtual Clinic?
          </h2>
          <p className="text-gray-700">
            A digital health facility is a digital platform that connects
            patients with healthcare providers using virtual reality era. This
            carrier allows sufferers to have on-line doctor visits, digital
            health practitioner appointments, and telehealth pressing care,
            making healthcare more on hand and convenient.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
