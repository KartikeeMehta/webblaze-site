import React from "react";

const reasons = [
  {
    title: "Expert Healthcare Providers",
    description:
      "Our digital clinic is staffed with skilled and qualified healthcare specialists, making sure you acquire the nice possible care.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We use the brand new virtual truth era to create an immersive and powerful healthcare revel in.",
  },
  {
    title: "User-Friendly Platform",
    description:
      "Our platform is designed to be easy to use, permitting sufferers to quick hook up with healthcare carriers and schedule appointments.",
  },
  {
    title: "Comprehensive Care",
    description:
      "From urgent care to number one care and specialized services, our digital clinic offers a extensive range of healthcare answers.",
  },
];

function Section_f() {
  return (
    <div className="w-full py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900">
          Why Choose Webblaze's Virtual Clinic Services?
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Webblaze is dedicated to presenting innovative and reliable virtual
          healthcare solutions. Here are a few motives why our digital hospital
          offerings stand out:
        </p>
        <div className="w-full">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 md:grid-cols-2 items-center py-4 border-b border-gray-300 last:border-b-0`}
            >
              <div className="flex items-center md:justify-left pr-0 md:pr-8 text-gray-800 font-medium">
                <span className="mr-2 text-gray-600">{idx + 1}.</span>
                {reason.title}
              </div>
              <div className="border-l border-gray-300 pl-0 md:pl-8 mt-2 md:mt-0 text-gray-700">
                {reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_f;
