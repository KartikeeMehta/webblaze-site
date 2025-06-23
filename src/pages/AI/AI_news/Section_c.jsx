import React from 'react'

const Section_c = () => {
  return (


<section className="bg-white bg-cover bg-center py-16 px-4 md:px-12 text-black">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-xl md:text-4xl font-bold text-center mb-12">
    Benefits of AI News Anchors
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "24/7 Availability",
        desc: "AI information anchors function spherical the clock, ensuring that audiences receive updates without interruption. This is essential in a international where the modern day AI news and artificial intelligence updates are usually breaking.",
        icon: "/AI_news1.png",
      },
      {
        title: "Cost-Effective",
        desc: "Utilizing AI generation for information delivery significantly reduces operational fees. Compared to conventional news anchors, AI-generated news anchors require no salaries, blessings, or downtime, making them a fee-powerful solution for information corporations.",
        icon: "/AI_news2.png",
      },
      {
        title: "Personalization",
        desc: "AI news anchors can be tailor-made to meet the choices of person visitors. Whether your target market is interested in the cutting-edge AI generation, synthetic intelligence articles, or quantum AI news involving Elon Musk on Reddit, our AI news anchors deliver content material that caters to their specific hobbies.",
        icon: "/AI_news3.png",
      },
      {
        title: "Consistency",
        desc: "With AI information anchors, you may make certain regular best and shipping. These anchors can relay the today's on AI with out the variations that come with human anchors, maintaining a steady and dependable information presentation.",
        icon: "/AI_news4.png",
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

export default Section_c
