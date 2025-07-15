import React from 'react';

const Section_c = () => {
  return (
    <section className="bg-[#1b1e2f] bg-[url('background-lines.webp')] bg-no-repeat bg-cover text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-[1200px] mx-auto text-center space-y-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our Approach to UI and UX Design
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          At Webblaze, we observe a whole approach to UI and UX design. Our
          manner starts off evolved with know-how your industrial agency desires
          and audience. We conduct thorough research and analysis to collect
          insights that inform our format approach. Our crew of professional UI
          designers and UX developers then collaborate to create designs that
          aren’t only visually appealing but additionally quite sensible.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-[#1e2133]">
            <div className="mb-4">
              <img src="UiUx_1.png" alt="User-Centric Design" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold mb-2">User-Centric Design</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Our user experience design process revolves around the goals and needs of your users. We conduct research and gather insights to drive decisions, ensuring the final product delivers the best possible experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-[#1e2133]">
            <div className="mb-4">
              <img src="UiUx_2.png" alt="Visual Design Excellence" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visual Design Excellence</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Our UI designers specialise in crafting visually stunning, brand-aligned interfaces. We focus on colours, typography, and layout to build captivating, consistent designs for web or mobile platforms.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300 bg-[#1e2133]">
            <div className="mb-4">
              <img src="UiUx_3.png" alt="Seamless Interaction Design" className="w-14 h-14" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Interaction Design</h3>
            <p className="text-gray-300 text-sm sm:text-base">
              We ensure every interaction is smooth and intuitive. Using usability best practices and real user feedback, we optimise flows that keep your audience engaged and satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_c;
