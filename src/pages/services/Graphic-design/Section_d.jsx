import React from 'react'

const Section_f = () => {
  return (
    <section className='bg-[#181C2E] bg-[url(https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp)]'>
       <h1 className='text-white text-3xl text-center pt-12'>Our SMM Services</h1>


                          {/*First*/}
                          {/*TEXT _IMAGE*/}
       <div id="txtimg"className="flex pb-14 flex-col-reverse md:flex-row gap-8 w-full px-6 md:px-16 pt-12 items-center">
           <div id="txt" className="w-full md:w-1/2 space-y-5">
             
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Instagram Management
          </h2>
          <p className="text-white mb-8">
            Boost your brand’s presence on Instagram with our specialised management offerings.
          </p>
              
                <ul class="list-disc list-inside">
                  <li className='text-white'><span className='font-bold'>Instagram Ads Manager:</span>We create focused commercials to growth your reach and engagement. </li>
                  <li className='text-white'><span className='font-bold'>Instagram Management Services:</span> Our Instagram control offerings beautify your visibility and engagement.</li>
                  <li className='text-white'> <span className='font-bold'>Facebook Management Services:</span>  With our Facebook control services, we make sure your posts acquire the right target audience on the right time.</li>
                </ul>
           </div>

           <div id="img" className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
               <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Instagram-Management-2.webp"alt="Graphic Design"
               className="w-full h-auto object-contain rounded-md shadow-md"/>
              </div>
           </div>
         </div>

                          {/*Second*/}
                          {/*IMAGE _TEXT*/}
         
    <div id='imgtxt' className='bg-[#181C2E] bg-[url(https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp)] pb-14 flex flex-col-reverse md:flex-row gap-8 w-full px-6 md:px-16 pt-12 items-center"' >
      <div id="img" className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
              
               <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Facebook-Management-2.webp"alt="Graphic Design"
               className="w-full h-auto object-contain rounded-md shadow-md"/>
              </div>
           </div>
           <div id="txt" className="w-full md:w-1/2 space-y-5">
             <h1 className=" text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-left">
              Facebook Management
             </h1>
             
              <ul className="text-white text-base md:text-lg text-center md:text-left leading-relaxed">
                Our Facebook management offerings are designed to decorate your emblem’s visibility and engagement.
                
                <li className='pb-5'><span className='font-bold'>Facebook Campaign Manager:</span> We plan and execute effective ad campaigns to gain your enterprise dreams.</li>
                <li className='pb-5'><span className='font-bold'>Facebook Ads Management Services:</span> From advert creation to performance monitoring, we take care of it all.</li>
                <li className='pb-5'><span className='font-bold'>Facebook Business Manager:</span> We manipulate your company profile and make sure it aligns together together with your emblem’s goals.</li>
              </ul>
              </div>
            </div>

                          {/*Third*/}
                          {/*TEXT _IMAGE*/}

            <div id="txtimg"className="flex pb-14 flex-col-reverse md:flex-row gap-8 w-full px-6 md:px-16 pt-12 items-center">
           <div id="txt" className="w-full md:w-1/2 space-y-5">
             
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
           Social Media Post Creation
          </h2>
          <p className="text-white mb-8">
            Creating engaging social media posts is vital for retaining an lively online presence.
          </p>
              
                <ul class="list-disc list-inside">
                  <li className='text-white'><span className='font-bold'>Social Media Content Creation Packages:</span>Our packages embody the whole lot you need for effective social media manage.</li>
                  <li className='text-white'><span className='font-bold'>Social Media Content Creator:</span> Our creative group designs and produces content material material that resonates in conjunction with your target audience.</li>
                  <li className='text-white'> <span className='font-bold'>Social Media Content Creation Services:</span>We provide complete services, from ideation to execution.</li>
                </ul>
           </div>

           <div id="img" className="w-full md:w-1/2 flex justify-center">
             <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
               <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Social-Media-Post-Creation-1.webp"alt=''
               className="w-full h-auto object-contain rounded-md shadow-md"/>
              </div>
           </div>
         </div>


    </section>
  )
}

export default Section_f
