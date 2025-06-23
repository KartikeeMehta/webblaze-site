import React from 'react';

const Section_h = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-20 py-12">
      <div className="wrap_section_f max-w-[1200px] m-auto">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            Figma Design and Development
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg mb-12 max-w-3xl mx-auto">
            Webblaze offers complete Figma design and development services to enhance your social media presence.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-App-Design.webp"
                alt="Figma to Website"
                className="w-full h-auto object-cover rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  Figma to Website
                </h3>
                <p className="text-sm sm:text-base text-black">
                  Convert your Figma designs into fully functional websites.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-to-HTML-CSS.webp"
                alt="Figma to HTML CSS"
                className="w-full h-auto object-cover rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  Figma to HTML CSS
                </h3>
                <p className="text-sm sm:text-base text-black">
                  Create responsive designs with our Figma to HTML/CSS services.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-to-Website.webp"
                alt="Figma App Design"
                className="w-full h-auto object-cover rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  Figma App Design
                </h3>
                <p className="text-sm sm:text-base text-black">
                  Design intuitive and user-friendly apps with our Figma app design services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_h;
