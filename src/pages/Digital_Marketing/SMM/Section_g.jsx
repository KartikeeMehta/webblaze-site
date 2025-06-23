import React from 'react';

const Section_g = () => {
  return (
    <section className="bg-[#f3f3f4]">
      <div className="wrap_section_f max-w-[1200px] m-auto">
        {/* First Block: Two Images + Text */}
        <div className="flex flex-col-reverse md:flex-row gap-8 w-full px-4 sm:px-6 md:px-16 py-12 items-center">
          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4">
            <div className="w-[45%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Banner-and-Ad-Creation.webp"
                alt="Banner and Ad 1"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
            <div className="w-[45%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Banner-and-Ad-Creation-2.webp"
                alt="Banner and Ad 2"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              Banner and Ad Creation
            </h2>
            <p className="text-black">
              Creating compelling banners and advertisements is crucial for effective social media advertising.
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                <span className="font-bold">Banner Design Online:</span> Our online banner design services ensure your social profiles stand out.
              </li>
              <li>
                <span className="font-bold">Social Media Advertising Companies:</span> As a leading company, we ensure your ads perform well.
              </li>
              <li>
                <span className="font-bold">Banner Custom Design:</span> We create custom banners tailored to your brand’s needs.
              </li>
            </ul>
          </div>
        </div>

        {/* Second Block: Text + Two Images */}
        <div className="flex flex-col-reverse md:flex-row gap-8 w-full px-4 sm:px-6 md:px-16 py-12 items-center">
          {/* Text */}
          <div className="w-full md:w-1/2 space-y-5">
            <h3 className="text-xl md:text-4xl text-red-500">Enhanced Tools and Management</h3>
            <h2 className="text-2xl md:text-4xl font-bold text-black">
              Facebook Ads Manager and Meta Business Manager
            </h2>
            <p className="text-black">
              Utilize the power of Facebook Ads Manager and Meta Business Manager for efficient ad management and performance monitoring.
            </p>
            <ul className="list-disc list-inside space-y-2 text-black">
              <li>
                <span className="font-bold">Meta Ad Manager:</span> Optimize your ad campaigns with our expert services.
              </li>
              <li>
                <span className="font-bold">Facebook Audience Manager:</span> Target the right audience with precision.
              </li>
              <li>
                <span className="font-bold">Facebook Ads Manager Billing:</span> We manage all aspects of ad billing and budgeting.
              </li>
            </ul>
          </div>

          {/* Images */}
          <div className="w-full md:w-1/2 flex flex-wrap justify-center gap-4">
            <div className="w-[45%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Facebook-Ads-Manager-and-Meta-Business-Manager-1.webp"
                alt="Ads Manager 1"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
            <div className="w-[45%]">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Facebook-Ads-Manager-and-Meta-Business-Manager-2.webp"
                alt="Ads Manager 2"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
