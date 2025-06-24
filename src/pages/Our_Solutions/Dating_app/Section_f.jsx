import React from 'react'

const Section_f = () => {
  return (
    <section className=" bg-[#efeff1] text-black py-12 px-4 md:px-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Get Started with Webblaze
  </h2>
<div className="wrap_section_f max-w-[1200px] m-auto">
  <div className="space-y-8 ">
    {[
      {
        title: "1. AI Development for Beginners",
        desc: "Whether you are new to AI or looking to amplify your existing skills, our AI improvement for beginners offerings provide the steerage and support you want to get began.",
      },
      {
        title: "2. AI in Research and Development",
        desc: "Our AI in research and development offerings help you explore new possibilities and live beforehand of the competition.",
      },
      {
        title: "3. AI Development Using Python",
        desc: "We specialize in AI improvement the use of Python, one of the maximum effective and versatile programming languages for AI initiatives.",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row border-b border-gray-600 pb-6"
      >
        {/* Left title */}
        <div className="md:w-1/3 font-semibold text-lg pr-4">{item.title}</div>

        {/* Vertical divider and description */}
        <div className="md:w-2/3 border-l border-gray-400 pl-4 text-gray-600">
          {item.desc}
        </div>
      </div>
    ))}
  </div>
  </div>
</section>

  )
}

export default Section_f
