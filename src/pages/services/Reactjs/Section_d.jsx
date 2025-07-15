
import React from "react";

const Section_d = () =>  {
  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            Our React.Js answers cater to numerous industries together with
            e-commerce, healthcare, education, finance, and greater. Whatever
            your industry niche, we’ve the information to deliver tailor-made
            answers that meet your precise necessities and exceed your
            expectations.
          </p>
        </div>

        <div>
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/02/side-view-attractive-hispanic-software-developer-programming-using-computer-while-working-from-home_11zon-scaled.jpg" // Replace with your actual image path
            alt="Developer working at desk"
            className="rounded-2xl w-full object-cover shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
export default Section_d;

