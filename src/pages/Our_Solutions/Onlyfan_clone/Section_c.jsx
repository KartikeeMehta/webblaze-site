import React from 'react';

const Section_c = () => {
  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
      <div className='wrap_section_a max-w-[1200px] m-auto'>
      <div className="max-w-[1200px] m-auto flex flex-col-reverse md:flex-row gap-8 items-center">
        
        {/* Image Section */}
        <div id="img" className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2025/01/Group-1-2.png"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div id="txt" className="w-full md:w-1/2 space-y-5">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug text-center md:text-left">
          Features of Our OnlyFans Clone
          </h1>


          <ul className="list-disc list-inside text-white text-sm sm:text-base space-y-4">
            <li>
              <span className="font-bold">Customizable Interface: </span>Tailor the app to suit your logo’s aesthetics and capability. Whether you’re trying to create an instagram clone, whatsapp clone, fb clone, linkedin clone, or snapchat clone, our platform is absolutely adaptable.
            </li>
            <li>
              <span className="font-bold">Secure Payment Integration:</span>With a couple of charge gateways, make certain seamless transactions on your subscribers.
            </li>
            <li>
              <span className="font-bold">Content Management: :</span> Effortlessly upload, agenda, and manage your content material with our intuitive dashboard.
            </li>
            <li>
              <span className="font-bold">User Management:</span> Gain control over your subscriber base with superior user management tools.
            </li>
             <li>
              <span className="font-bold">Analytics and Reporting:</span> Track your performance with precise analytics, assisting you are making data-driven selections.
            </li>
          </ul>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                        Contact Us
                    </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section_c;
