import React from 'react';

const Section_c = () => {
  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
      <div className="max-w-[1200px] m-auto flex flex-col-reverse md:flex-row gap-8 items-center">
        
        {/* Image Section */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/08/comprehensive-content-creations.png"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div id="txt" className="w-full md:w-1/2 space-y-5">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
            Comprehensive Content Creation
          </h1>

          <p className="text-white text-sm sm:text-base md:text-lg text-center md:text-left leading-relaxed">
            Creating compelling content is fundamental to successful social media management. Webblaze excels in social media content creation, ensuring your posts resonate with your target audience and drive engagement.
          </p>

          <ul className="list-disc list-inside text-white text-sm sm:text-base space-y-4">
            <li>
              <span className="font-bold">Social Media Content Creation:</span> Our team creates high-quality, relevant content that aligns with your brand’s goals.
            </li>
            <li>
              <span className="font-bold">Figma Design:</span> Using Figma tools, we craft visually stunning content for your social media channels.
            </li>
            <li>
              <span className="font-bold">Banner Creation:</span> We design attractive banners to enhance your social media profiles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section_c;
