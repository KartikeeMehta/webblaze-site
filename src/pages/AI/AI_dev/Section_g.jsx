import React from 'react'

const Section_g = () => {
  return (
    <section
  className="bg-cover bg-center py-16 px-4 md:px-20 text-white"
  style={{ backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/09/Frame-1171275642-2.webp')" }}
>
  <div className="wrap_section_g max-w-[1200px] m-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Our Commitment
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Latest Developments in AI",
        desc: "We are dedicated to integrating the modern-day developments in AI into our answers, making sure which you benefit from the maximum superior technologies.",
      },
      {
        title: "AI for Sustainable Development",
        desc: "Our AI for sustainable improvement initiatives are designed to create tremendous social and environmental effect, aligning with worldwide desires.",
      },
      {
        title: "Top AI Developers",
        desc: "We satisfaction ourselves on having a crew of pinnacle AI builders who're obsessed with growing progressive answers that drive achievement.",
      },
      {
        title: "AI Framework",
        desc: "Utilizing the exceptional AI framework on your tasks, we ensure that your answers are constructed on a solid foundation.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-black bg-opacity-50 rounded-xl p-6 w-full md:w-[45%] text-white border border-gray-400"
      >
        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-200">{item.desc}</p>
      </div>
    ))}
  </div>
  </div>
</section>

  )
}

export default Section_g
