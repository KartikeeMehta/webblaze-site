import React from 'react';

const Section_d = () => {
  return (
    <section className="bg-[#f3f3f4] w-full px-4 sm:px-6 lg:px-20 py-12">
      <div className="wrap_section_d max-w-[1200px] m-auto">
        <div className='wrap_section_a max-w-[1200px] m-auto'>
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-4 leading-snug">
            Advanced Advertising Solutions
          </h2>
          <p className="text-black text-sm sm:text-base lg:text-lg mb-12 max-w-3xl mx-auto">
            Webblaze offers advanced advertising and marketing solutions, utilizing platforms like Facebook Ads Manager and Meta Ads Manager to maximise your ROI.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            {/* Card 1 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Facebook-Ads-Manager.webp"
                alt="Facebook Ads Manager"
                className="w-full h-auto object-contain rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  Facebook Ads Manager
                </h3>
                <p className="text-sm sm:text-base text-black">
                  We create and manage effective ad campaigns using Facebook Ads Manager.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Meta-Business-Manager.webp"
                alt="Meta Business Manager"
                className="w-full h-auto object-contain rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  Meta Business Manager
                </h3>
                <p className="text-sm sm:text-base text-black">
                  Our expertise with Meta Business Manager ensures your ads reach the right audience.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col bg-white bg-opacity-50 rounded-xl shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/FB-Ads-Manager.webp"
                alt="FB Ads Manager"
                className="w-full h-auto object-contain rounded-t-xl"
              />
              <div className="px-5 py-5">
                <h3 className="text-lg lg:text-xl font-semibold text-black mb-2">
                  FB Ads Manager
                </h3>
                <p className="text-sm sm:text-base text-black">
                  We optimize your ad spend and boost conversions with FB Ads Manager.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Section_d;
