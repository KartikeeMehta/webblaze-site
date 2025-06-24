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
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275558.png"
              alt="Graphic Design"
              className="w-full h-auto object-contain rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div id="txt" className="w-full md:w-1/2 space-y-5">
          <h1 className="text-white text-xl sm:text-4xl lg:text-4xl font-bold leading-snug text-center md:text-left">
            Popular Dating App Trends
          </h1>

          <ul className="list-disc list-inside text-white text-sm sm:text-base space-y-4">
            <li>
              <span className="font-bold">Inclusivity and Diversity:</span> Modern relationship apps want to cater to diverse audiences. Whether it’s gay dating apps, lesbian dating apps, or apps for unique ethnic groups, inclusivity is a widespread trend.
            </li>
            <li>
              <span className="font-bold">Safety Features:</span> Incorporating protection functions inclusive of historical past exams and secure photo verification facilitates construct accept as true with amongst customers.
            </li>
            <li>
              <span className="font-bold">AI and Machine Learning:</span> Utilizing AI for better matchmaking and user conduct analysis enhances the general consumer revel in.
            </li>
            <li>
              <span className="font-bold">Video Profiles and Dating: </span>Video profiles and stay video chats are becoming an increasing number of popular, offering a more non-public contact to on-line courting.
            </li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Section_c;
