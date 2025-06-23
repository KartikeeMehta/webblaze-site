import React from 'react'

const Section_b = () => {
  return (


<section className="bg-white bg-cover bg-center py-16 px-4 md:px-12 text-black">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-xl md:text-4xl font-bold text-center mb-12">
    Enhance Customer Engagement
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "24/7 Availability",
        desc: "Implementing a chatbot to your internet site guarantees that your clients get preserve of immediately responses at any time of the day. This improves client pride and loyalty.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "Personalized Experience",
        desc: "AI chatbots can provide a customised revel in through know-how consumer alternatives and delivering custom designed responses.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "Interactive Features",
        desc: "With a live chatbot to your net web site, customers can enjoy a greater interactive and tasty experience, main to better conversion charges.",
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
