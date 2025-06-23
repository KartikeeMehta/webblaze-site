import React from 'react';

const Section_e = () => {
  return (
    <div className="bg-white w-full px-4 sm:px-6 lg:px-20 py-10">
      <div className="wrap_section_f max-w-[1200px] m-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Text + Cards */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Tailored Social Media Strategies
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            We understand that each enterprise is unique. That’s why Webblaze offers tailored social media strategies to meet your specific needs.
          </p>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {/* Card 1 */}
            <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
              <img src="/images/pricing-icon.png" alt="Pricing" className="w-10 h-10" />
              <div>
                <h3 className="font-semibold text-base">Social Media Marketing Agency Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Our competitive pricing ensures you get the best value for your investment.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
              <img src="/images/nearby-icon.png" alt="Nearby" className="w-10 h-10" />
              <div>
                <h3 className="font-semibold text-base">Social Media Marketing Agency Near Me</h3>
                <p className="text-gray-600 text-sm">
                  We offer local and customized services to meet your business goals.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-start gap-4 p-4 border rounded-lg shadow-sm bg-white">
              <img src="/images/top-agency-icon.png" alt="Top Companies" className="w-10 h-10" />
              <div>
                <h3 className="font-semibold text-base">Top Social Media Marketing Companies</h3>
                <p className="text-gray-600 text-sm">
                  As one of the top social media marketing agencies, we deliver results that matter.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center gap-4">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/youtube.webp"
            alt="YouTube"
            className="rounded-[2rem] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/iphone.webp"
            alt="Social Apps"
            className="rounded-[2rem] w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_e;
