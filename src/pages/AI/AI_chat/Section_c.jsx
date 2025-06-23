import React from 'react'

const Section_b = () => {
  return (
    <div className="bg-[#0B1021] bg-[url('/public/background-lines.webp')] bg-cover bg-center py-16 px-6 md:px-12 text-white">
      <div className="wrap_section_f max-w-[1200px] m-auto">
  {/* Heading */}
  <h2 className="text-4xl font-bold text-center mb-10 underline">Improve Business Efficiency</h2>

  {/* Card Container */}
  <div className="flex flex-wrap justify-center gap-8">
    {/* Card */}
    <div className=" bg-white rounded-xl w-full sm:w-[48%] lg:w-[30%]">
      <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Improve-Business-Efficiency.png" className="rounded-xl mb-4 w-full h-48 object-cover" />
      <h3 className="text-xl text-black mb-2 text-center">Automated Customer Support</h3>
      <p className="text-md text-gray-700 text-center pb-5">
        Using chatbots for enterprise allows automate repetitive responsibilities, liberating up your staff to attention on more complex issues.


      </p>
    </div>

    <div className="bg-white rounded-xl w-full sm:w-[48%] lg:w-[30%]">
      <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Seamless-Integration.png" alt="Custom Dapp" className="rounded-xl mb-4 w-full h-48 object-cover" />
      <h3 className="text-xl text-black  mb-2 text-center">Seamless Integration</h3>
      <p className="text-md text-gray-700 text-center pb-5">
        Chatbot integration together together with your net website online is seamless, contemplating a smooth transition and minimal disruption on your operations.
      </p>
    </div>

    <div className="bg-white rounded-xl w-full sm:w-[48%] lg:w-[30%]">
      <img src="https://webblazesofttech.com/wp-content/uploads/2024/09/Improve-Business-Efficiency.png" className="rounded-xl mb-4 w-full h-48 object-cover" />
      <h3 className="text-black text-xl  mb-2 text-center">Cost-Effective Solution</h3>
      <p className="text-md text-gray-700 text-center pb-5">
        A free chatbot in your internet site may be a reasonably-priced answer for small corporations, decreasing the need for a huge customer support crew.
      </p>
    </div>

  </div>
  </div>
</div>

  )
}

export default Section_b
