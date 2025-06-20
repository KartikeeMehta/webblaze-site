import React from 'react'

const Section_h = () => {
  return (


<section class=" w-full px-4 sm:px-6 lg:px-20 py-12">
  <div class=" bg-max-w-7xl mx-auto text-center">
   
    <h2 class="text-2xl text-black sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
      Figma Design and Development
    </h2>
    <p class="text-black text-sm sm:text-base lg:text-lg mb-12 max-w-3xl mx-auto">
      Webblaze offers whole Figma format and development offerings to decorate your social media presence.
    </p>


    <div class="flex flex-wrap justify-center gap-6">
      
               {/*card 1*/}
      <div class="flex flex-col bg-white bg-opacity-50 rounded-xl  shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
        <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-App-Design.webp" alt="" />
        <div className='px-5 py-5'>
        <h3 class="text-lg text-black lg:text-xl font-semibold mb-2">Figma to Website</h3>
        <p class=" text-black text-sm sm:text-base">
          Convert your Figma designs into absolutely practical web web sites.</p>
        </div>
      </div>
                        {/*card 2*/}
      <div class="flex flex-col bg-white bg-opacity-50 rounded-xl  shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
        <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-to-HTML-CSS.webp" alt="" />
        <div className='px-5 py-5'>
        <h3 class="text-lg text-black lg:text-xl font-semibold mb-2">Figma to HTML CSS</h3>
        <p class=" text-black text-sm sm:text-base">
          Create responsive designs with our Figma to HTML CSS offerings.
        </p>
        </div>
      </div>
                    {/*card 3*/}
      <div class="flex flex-col bg-white bg-opacity-50 rounded-xl  shadow hover:shadow-lg transition w-full sm:w-[48%] lg:w-[30%]">
        <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Figma-to-Website.webp" alt="" />
        <div className='px-5 py-5'>
        <h3 class="text-lg text-black lg:text-xl font-semibold mb-2">Figma App Design</h3>
        <p class="text-black  text-sm sm:text-base">
          Design intuitive and character-friendly apps with our Figma app format offerings.
        </p>
        </div>
      </div>

    </div>
  </div>
</section>


  )
}

export default Section_h
