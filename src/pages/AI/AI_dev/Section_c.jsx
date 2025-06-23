import React from 'react'

const Section_c = () => {
  return (


<section className="bg-[#0B1021] bg-[url('/public/background-lines.webp')] bg-cover bg-center py-16 px-4 md:px-12 text-white">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Our AI Development Expertise
  </h2>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Artificial Intelligence Software Development",
        desc: "Our synthetic intelligence software program development services cowl a wide variety of programs, from gadget learning algorithms to herbal language processing. We leverage AI to enhance your software program solutions.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "AI in Learning and Development",
        desc: "Integrating AI in studying and development, we create wise structures that adapt to person getting to know patterns, offering customized training and training stories.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "AI for Web Development",
        desc: "Web improvement with AI is our specialty. Our AI for internet development answers ensures your internet site isn't best purposeful but additionally wise and attentive to consumer needs.",
        icon: "/icons/ai-web.png",
      },
      {
        title: "Generative AI AWS",
        desc: "By leveraging generative AI AWS, we create revolutionary AI answers that automate content material creation, layout, and more, improving efficiency and creativity.",
        icon: "/icons/ai-web.png",
      },
      {
        title: "NVIDIA Jetson AGX Orin",
        desc: "Our AI development offerings consist of the usage of superior hardware like NVIDIA Jetson AGX Orin, permitting high-overall performance AI packages in various industries.",
        icon: "/icons/ai-web.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-blue-400 bg-opacity-20 border border-blue-500 rounded-xl p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] text-white shadow-md"
      >
        <div className="flex justify-center mb-4">
          <img src={item.icon} alt="icon" className="w-14 h-14" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-300 text-center">{item.desc}</p>
      </div>
    ))}
  </div>
  </div>
</section>



  )
}

export default Section_c
