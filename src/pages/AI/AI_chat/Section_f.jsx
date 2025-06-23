import React from 'react'

const Section_b = () => {
  return (


<section className="bg-white bg-cover bg-center py-16 px-4 md:px-12 text-black">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-xl md:text-4xl font-bold text-center mb-12">
    Advanced AI Capabilities
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Conversational AI",
        desc: "Our conversational AI for commercial business enterprise solutions provide natural language processing, permitting chatbots to apprehend and reply to complex queries.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "Custom Solutions",
        desc: "We create custom chatbots for websites tailor-made for your particular needs, making sure a great healthy for your enterprise.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "Integration with Existing Systems",
        desc: "Whether you want a chatbot for a Squarespace website online or Wix chatbot integration, we ensure easy compatibility with your current structures.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] text-black shadow-md"
      >
        <div className="flex justify-center mb-4">
          <img src={item.icon} alt="icon" className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-700 text-center">{item.desc}</p>
      </div>
    ))}
  </div>
  </div>
</section>



  )
}

export default Section_b
