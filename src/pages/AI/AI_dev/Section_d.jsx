import React from 'react'

const Section_d = () => {
  return (
    <section className="max-w-[1200px] bg-white py-16 px-4 md:px-12">
      <div className='wrap_section_d max-w-[1200px] m-auto'>
  <div className="flex flex-col md:flex-row items-center gap-10 ">
    
    {/* Left: Image */}
    <div className="w-full md:w-1/2">
      <div className="flex justify-center">
        <img
          src="https://webblazesofttech.com/wp-content/uploads/2024/09/Key-Services-We-Offer-2.webp"
          alt="AI Services"
          className="w-3/4 min-h-[600px] object-cover"
        />
      </div>
    </div>

    {/* Right: Text */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Key Services We Offer
      </h2>
      <ul className="space-y-4 text-black">
        <li>
          <span className="font-bold">AI Application Development :</span> We specialise in AI utility improvement, growing clever packages that streamline tactics and improve consumer reviews.
        </li>
        <li>
          <span className="font-bold">AI Development Software :</span> Our AI improvement software program answers are designed to meet the particular necessities of your business, supplying effective gear for facts analysis, automation, and choice-making.
        </li>
        <li>
          <span className="font-bold">AI Website Development :</span> AI website improvement is considered one of our core services. We construct AI-driven websites that deliver customized consumer reviews and beautify customer engagement.
        </li>
        <li>
          <span className="font-bold">Machine Learning Development :</span> Our gadget learning improvement offerings harness the power of AI to create structures that learn and adapt, supplying you with sensible answers that develop along with your enterprise.
        </li>
        <li>
          <span className="font-bold">AI Development Cost :</span> Understanding the AI development value is vital. We provide transparent pricing and flexible applications to ensure you get the satisfactory cost to your investment.
        </li>
      </ul>
    </div>
  </div>
  </div>
</section>


  )
}

export default Section_d
