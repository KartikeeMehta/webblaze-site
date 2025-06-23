import React from 'react';

const Section_b = () => {
  return (
    <div className="bg-white w-full px-4 py-12">
      <div className="wrap_section_b max-w-[1200px] m-auto">
        <section>
          <div
            id="txtimg"
            className="flex flex-col-reverse md:flex-row gap-8 w-full items-center"
          >
            {/* Text Section */}
            <div id="txt" className="w-full md:w-1/2 space-y-5">
              <p className="text-red-500 text-base sm:text-lg font-semibold mb-2">
                Why Choose Webblaze for Social Media Management?
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Expertise in Social Media Management
              </h2>
              <p className="text-sm sm:text-base text-gray-700">
                At Webblaze, we focus on social media control, coping with everything from content creation to community engagement. Our team of experts leverages modern systems and strategies to ensure your platforms are active, engaging, and aligned with your brand’s voice.
              </p>

              <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-2">
                <li>
                  <span className="font-bold">Social Media Management Companies:</span> We are among the top agencies ensuring your brand gets the attention it deserves.
                </li>
                <li>
                  <span className="font-bold">Instagram Management Services:</span> Our services enhance your visibility and engagement.
                </li>
                <li>
                  <span className="font-bold">Facebook Management Services:</span> We ensure your posts reach the right audience at the right time.
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div id="img" className="w-full md:w-1/2 flex justify-center">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <img
                  src="https://webblazesofttech.com/wp-content/uploads/2024/08/expertise-in-social-media-management.webp"
                  alt="Expertise in Social Media Management"
                  className="w-full h-auto object-contain rounded-md shadow-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section_b;
