import React from "react";

const steps = [
  {
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your necessities and expectations.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-2024-11-18T105140.982-1024x669.webp",
    imageLabel: "Exploring Your Vision",
  },
  {
    title: "Editing",
    description:
      "Using system like Adobe Premiere, Filmora, and Photoshop, our team works diligently to edit your movement pix and photographs.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-99-1024x669.webp",
    imageLabel: "Designing for Success",
  },
  {
    title: "Review",
    description:
      "We provide a draft for your evaluation and make any critical adjustments based to your feedback.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/image-100-1024x669.webp",
    imageLabel: "Bringing Ideas to Life",
  },
  {
    title: "Final Delivery",
    description:
      "Once you are satisfied, we deliver the very last edited content material, ready to be used.",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/11/Image-2024-11-18T102817.896-1024x669.webp",
    imageLabel: "Growing Together",
  },
];

function Section_f() {
  return (
    <div className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
          Our Editing Process
        </h2>
        {/* Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-0">
          {steps.map((step, idx) => (
            <div key={idx} className="contents">
              {/* Left column: text or image */}
              <div className={`flex justify-end items-center m-auto`}>
                {idx % 2 === 0 ? (
                  <div className="max-w-xs text-left m-auto">
                    <h3 className="pb-2  text-2xl font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="pb-2 text-gray-700 text-lg ">{step.description}</p>
                  </div>
                ) : (
                  <div className="flex justify-end w-full">
                    <div className="bg-white rounded-xl shadow pt-2 border border-gray-200 mt-28">
                      <div className=" text-lg text-black m-auto">
                        {step.imageLabel}
                      </div>
                      <img
                        src={step.image}
                        alt={step.imageLabel}
                        className="w-80 h-50 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
              {/* Center column: timeline */}
              <div className="flex flex-col items-center relative">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-lg z-10">
                  {idx + 1}
                </span>
                {idx < steps.length - 1 && (
                  <div className="w-1 h-full bg-gray-300 absolute left-1/2 top-8 -translate-x-1/2 z-0"></div>
                )}
              </div>
              {/* Right column: image or text */}
              <div className={`flex items-center m-auto`}>
                {idx % 2 === 0 ? (
                  <div className="flex w-full m-auto">
                    <div className="bg-white rounded-xl shadow p-2 border border-gray-200 m-auto">
                      <div className="text-lg text-black mb-2 ">
                        {step.imageLabel}
                      </div>
                      <img
                        src={step.image}
                        alt={step.imageLabel}
                        className="w-80 h-50  object-cover rounded-lg m-auto"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="max-w-xs m-auto">
                    <h3 className="pb-5 text-2xl font-semibold text-gray-900 m-auto">
                      {step.title}
                    </h3>
                    <p className="pb text-gray-700 text-lg m-auto">{step.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Mobile */}
        <div className="md:hidden flex flex-col items-center">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center mb-10 w-full">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white font-bold text-lg mb-2">
                {idx + 1}
              </span>
              <div className="bg-white rounded-xl shadow p-2 mb-2 border border-gray-200">
                <div className="text-xs text-gray-500 mb-1">
                  {step.imageLabel}
                </div>
                <img
                  src={step.image}
                  alt={step.imageLabel}
                  className="w-40 h-28 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-700 text-sm max-w-xs text-center">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Section_f;
