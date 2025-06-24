import React from 'react'

const Section_c = () => {
  return (
    <div className="bg-[#0e1120] text-white py-16 px-4">
      <div className='wrap_section_a max-w-[1200px] m-auto'>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 justify-between items-center">

    {/* logo */}
    <div className="flex-shrink-0 w-full lg:w-[30%] flex justify-center lg:justify-start">
      <img src="https://webblazesofttech.com/wp-content/uploads/2024/08/Group-1171275490.svg" alt="Blaze Softtech Logo" className="w-48 h-auto" />
    </div>

    {/* Right  Section */}
    <div className="flex flex-col gap-8 w-full lg:w-[65%]">

      <h2 className="text-4xl font-bold text-center lg:text-left">Why Choose Webblaze?</h2>

      {/* point 1 */}
      <div className="flex items-start gap-4">
        <img src="Dapp_1.png" alt="Expertise Icon" className="w-10 h-10 mt-1" />
        <div>
          <h3 className="text-3xl font-semibold">Expertise in dapp Development</h3>
          <p className="text-white mt-1">
            Webblaze is a main dapp improvement enterprise with big enjoy in developing decentralized apps. Our organization of dapp developers is professional in constructing dapps on various blockchain structures, ensuring that your application is powerful and green.
          </p>
        </div>
      </div>

      {/* point 2 */}
      <div className="flex items-start gap-4">
        <img src="Dapp_2.png" className="w-10 h-10 mt-1" />
        <div>
          <h3 className="text-3xl font-semibold">Comprehensive Services</h3>
          <p className="text-white mt-1">
            We offer a complete variety of dapp development offerings, from concept to deployment. Our offerings encompass developing decentralized packages, web3 dapp improvement, and constructing decentralized web apps.
          </p>
        </div>
      </div>

      {/* point 3 */}
      <div className="flex items-start gap-4">
        <img src="Dapp_3.png" className="w-10 h-10 mt-1" />
        <div>
          <h3 className="text-3xl font-semibold">Cutting-Edge Technology</h3>
          <p className="text-white mt-1">
            We use the cutting-edge generation and fine practices in dapp development. Our decentralized packages are constructed using advanced blockchain era, ensuring your app is scalable, consistent, and efficient.
          </p>
        </div>
      </div>

      {/* point 4 */}
      <div className="flex items-start gap-4">
        <img src="Dapp_4.png" className="w-10 h-10 mt-1" />
        <div>
          <h3 className="text-3xl font-semibold">Client-Focused Approach</h3>
          <p className="text-white mt-1">
            We prioritize clear communication and personalized service to ensure every client's needs are met with precision and professionalism.
          </p>
        </div>
      </div>

    </div>
  </div>
  </div>
</div>

  )
}

export default Section_c
