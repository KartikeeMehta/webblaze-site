import React from 'react';

const Section_f = () => {
  return (
    <section className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')]">
      <div className="wrap_section_f max-w-[1200px] m-auto">
        <h1 className="text-white text-3xl text-center pt-12">Our SMM Services</h1>

        {/* First Block: Text + Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full px-4 sm:px-6 md:px-16 py-12">
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Instagram Management
            </h2>
            <p className="text-white">
              Boost your brand’s presence on Instagram with our specialised management offerings.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li><span className="font-bold">Instagram Ads Manager:</span> We create focused ads to increase your reach and engagement.</li>
              <li><span className="font-bold">Instagram Management Services:</span> We enhance your visibility and engagement.</li>
              <li><span className="font-bold">Facebook Management Services:</span> We ensure your posts reach the right audience at the right time.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Instagram-Management-2.webp"
                alt="Instagram Management"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Second Block: Image + Text */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full px-4 sm:px-6 md:px-16 py-12">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Facebook-Management-2.webp"
                alt="Facebook Management"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center md:text-left">
              Facebook Management
            </h2>
            <p className="text-white text-center md:text-left">
              Our Facebook management services are designed to enhance your brand’s visibility and engagement.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white text-sm sm:text-base text-center md:text-left">
              <li><span className="font-bold">Facebook Campaign Manager:</span> We plan and execute ad campaigns to achieve your business goals.</li>
              <li><span className="font-bold">Facebook Ads Management Services:</span> We handle everything from ad creation to performance tracking.</li>
              <li><span className="font-bold">Facebook Business Manager:</span> We manage your business profile and ensure it aligns with your brand goals.</li>
            </ul>
          </div>
        </div>

        {/* Third Block: Text + Image */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 w-full px-4 sm:px-6 md:px-16 py-12">
          <div className="w-full md:w-1/2 space-y-5">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
              Social Media Post Creation
            </h2>
            <p className="text-white">
              Creating engaging social media posts is vital for maintaining an active online presence.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white">
              <li><span className="font-bold">Content Creation Packages:</span> Our packages include everything needed for effective social media management.</li>
              <li><span className="font-bold">Content Creators:</span> Our creative team designs content that connects with your audience.</li>
              <li><span className="font-bold">Content Creation Services:</span> From ideation to execution, we handle it all.</li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              <img
                src="https://webblazesofttech.com/wp-content/uploads/2024/08/Social-Media-Post-Creation-1.webp"
                alt="Social Media Post Creation"
                className="w-full h-auto object-contain rounded-md shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
