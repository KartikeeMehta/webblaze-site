import React from 'react'

const Section_d = () => {
  return (
    <div className="py-16 px-4 bg-white text-center">
  {/* Heading */}
  <h2 className="text-4xl font-bold mb-12">How We Work</h2>

  {/* Main Flex Div */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">

    {/* Left Section */}
    <div className="lg:w-1/3">
      <h3 className="text-3xl font-semibold text-red-500 mb-4">Consultation and Planning</h3>
      <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
        Our dapp development procedure starts with an extensive consultation to understand your dreams. We work with you to plan and layout your decentralized software, making sure that it aligns together with your enterprise goals.
      </p>
    </div>

    {/* Center Icon */}
    <div className="w-40 h-40">
      <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/unity-icon.svg" alt="Workflow Icon" className="w-full h-full object-contain mx-auto" />
    </div>

    {/* Right Section */}
    <div className="lg:w-1/3">
      <h3 className="text-3xl font-semibold text-blue-500 mb-4">Development and Testing</h3>
      <p className="text-gray-700 text-lg leading-relaxed max-w-md mx-auto">
        Our crew of dapp developers makes use of agile methodologies to broaden your decentralized software program. We conduct rigorous testing to ensure your dapp is stable, reliable, and optimized.
      </p>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="mt-12 max-w-2xl mx-auto">
    <h3 className="text-3xl font-semibold text-teal-500 mb-4">Deployment and Support</h3>
    <p className="text-gray-700 leading-relaxed text-lg">
      Once your dapp is advanced, we assist with deployment and offer ongoing support. We ensure that your decentralized software is efficiently integrated and operating without issues. Our resource crew is always available for help.
    </p>
  </div>
</div>

  )
}

export default Section_d
