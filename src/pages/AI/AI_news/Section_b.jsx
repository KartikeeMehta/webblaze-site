import React from "react";

const HeroAISection = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-12">
      <div classsName='wrap_section_a max-w-[1200px] m-auto'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI-Powered News Anchors <br />
            with Webblaze Technology
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to Webblaze, a top of the line net development organisation
            that specialize in present day answers to keep your business at the
            vanguard of generation. Our state-of-the-art providing, the AI News
            Anchor provider, revolutionizes how information is brought,
            integrating the modern-day improvements in synthetic intelligence to
            offer seamless, engaging, and personalized news reports.
          </p>
        </div>

        {/* Right Image Section */}
        <div className="relative">
          <div className="w-full max-w-md mx-auto">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/ai-anchor.webp"
              alt="AI News Anchor"
              className="w-full h-auto object-cover rounded-[60%_40%_60%_40%/50%_60%_40%_50%]"
            />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default HeroAISection;
