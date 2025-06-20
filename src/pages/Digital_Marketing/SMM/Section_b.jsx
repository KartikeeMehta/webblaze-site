import React from 'react'

const Section_b = () => {
  return (
    <div>
      <section>
        <div id="txtimg"className="flex pb-14 flex-col-reverse md:flex-row gap-8 w-full px-6 md:px-16 pt-12 items-center">
           <div id="txt" className="w-full md:w-1/2 space-y-5">
             <p className="text-red-500 text-lg font-semibold mb-2">Why Choose Webblaze for Social Media Management?</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Expertise in Social Media Management
          </h2>
          <p className="text-gray-700 mb-8">
            At Webblaze, we focus on social media control, coping with everything from content cloth introduction to community engagement. Our crew of experts leverages the current system and techniques to make certain your social media structures are energetic, engaging, and aligned along with your emblem’s voice.
          </p>
              
                <ul class="list-disc list-inside">
                  <li><span className='font-bold'>Social Media Management Companies:</span> We are most of the pinnacle social media manage groups, ensuring your logo gets the eye it merits. </li>
                  <li><span className='font-bold'>Instagram Management Services:</span> Our Instagram control offerings beautify your visibility and engagement.</li>
                  <li> <span className='font-bold'>Facebook Management Services:</span>  With our Facebook control services, we make sure your posts acquire the right target audience on the right time.</li>
                </ul>
              
    
           </div>

           <div id="img" className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
               <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/expertise-in-social-media-management.webp"alt="Graphic Design"
               className="w-full h-auto object-contain rounded-md shadow-md"/>
              </div>
           </div>
         </div>
      </section>
    </div>
  )
}

export default Section_b
