import React from "react";

function Section_g() {
  return (
    <div className="w-full flex justify-center py-16">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto relative">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How to Get Started with <br />
            Webblaze's Virtual Clinic
          </h2>
          <p className="text-gray-700 mb-4">
            Getting started out with our digital health facility offerings is
            straightforward. Follow those steps to get right of entry to great
            healthcare from the comfort of your private home:
          </p>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              <b>Visit Our Website :</b> Go to our website and explore our
              digital health facility services.
            </li>
            <li>
              <b>Schedule an Appointment :</b> Use our online reserving system
              to agenda a digital doctor appointment or urgent care visit.
            </li>
            <li>
              <b>Connect with a Doctor :</b> Use our online reserving system to
              agenda a digital doctor appointment or urgent care visit.
            </li>
          </ul>
        </div>
        {/* Right: Image with dots */}
        <div className="flex-shrink-0 relative">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/side-view-woman-working-digital-monitors_5_11zon-2048x2048.jpg" // Replace with your actual image
            alt="Virtual Clinic"
            className="rounded-xl object-cover w-[420px] h-[260px] bg-gray-100"
          />
          {/* Decorative Dots */}
          <div className="absolute left-0 bottom-0 translate-x-[-30%] translate-y-[30%] opacity-30 pointer-events-none">
            <svg width="120" height="60">
              {Array.from({ length: 6 }).map((_, row) =>
                Array.from({ length: 12 }).map((_, col) => (
                  <circle
                    key={row * 12 + col}
                    cx={10 * col + 5}
                    cy={10 * row + 5}
                    r="3"
                    fill="#d1d5db"
                  />
                ))
              )}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_g;
