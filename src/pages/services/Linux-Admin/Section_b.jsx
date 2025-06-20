import React from 'react'

const Section_b = () => {
  return (
    <div id='imgtxt' className='pb-14 flex flex-col-reverse md:flex-row gap-8 w-full px-6 md:px-16 pt-12 items-center"' >
      <div id="img" className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
               <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"alt="Graphic Design"
               className="w-full h-auto object-contain rounded-md shadow-md"/>
              </div>
           </div>
           <div id="txtbtn" className="w-full md:w-1/2 space-y-5">
             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
              Why Linux Administration?
             </h1>

             <p className="text-gray-600 text-base md:text-lg text-center md:text-left leading-relaxed">
               Linux powers a tremendous majority of servers worldwide because of its stability, security, and open-source nature. Mastering Linux administration opens doorways to profitable career opportunities in IT infrastructure management.
              </p>
              </div>
    </div>
  )
}

export default Section_b
