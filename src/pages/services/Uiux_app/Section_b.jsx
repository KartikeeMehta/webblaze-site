import React from "react";

const Section_b = () => {
  return (
    <section className="bg-[#fdfbfb] py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto space-y-20">

        {/* Section 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/Understanding-UI-and-UX-Design.webp"
              alt="UI/UX Explanation"
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-4 border-yellow-400"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Understanding <span className="text-red-500">UI</span> and <span className="text-blue-600">UX Design</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              User Interface (UI) and User Experience (UX) design are pivotal in shaping how users engage with digital merchandise. UI focuses on the visible elements, inclusive of layout, colours, and typography, making sure that the interface is aesthetically stunning and intuitive. UX, on the other hand, delves into the overall experience of the user journey, aiming to create seamless and meaningful interactions. At Webblaze, our UI UX layout services are meticulously crafted to enhance every component.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/professional-ui-ux-design.webp"
              alt="Professional UI/UX"
              className="rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 object-cover border-4 border-red-400"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              The Importance of Professional <br />
              <span className="text-red-500">UI</span> and <span className="text-blue-600">UX Design</span>
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Our UI UX design services aim to enhance your digital product’s look and feel by crafting visually stunning and user-friendly interfaces. At Webblaze, we focus on clarity, simplicity, and user engagement, ensuring every detail improves the user journey. We help you leave a memorable professional impact.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section_b;
