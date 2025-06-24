import React from 'react'

const Section_e_2 = () => {
  return (


<section className="bg-[#0B1021] bg-[url('/public/background-lines.webp')] bg-cover bg-center pt-5 px-4 md:px-12 text-white">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h3 className='pt-0 text-2xl text-center text-red-500 mb-10 '> Specialized LMS Solutions</h3>
  
  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Free LMS for Teachers",
        desc: "Designed to aid educators, our unfastened LMS platforms provide essential tools for route creation, pupil evaluation, and collaborative gaining knowledge of.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "Healthcare LMS Systems",
        desc: "Tailored to satisfy the particular needs of healthcare schooling, our healthcare LMS systems make sure compliance with industry requirements and offer specialized education modules.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "LMS for Employee Training",
        desc: "Enhance team of workers competencies with our committed LMS for corporate education, which includes employee education tracking software and compliance control features.",
        icon: "/icons/ai-web.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white mb-12 border-blue-500 rounded-xl p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] text-white shadow-md"
      >
        <div className="flex justify-center mb-4">
          <img src={item.icon} alt="icon" className="w-14 h-14" />
        </div>
        <h3 className=" text-black text-xl font-bold mb-2 text-center">{item.title}</h3>
        <p className="text-gray-700 text-center">{item.desc}</p>
      </div>
    ))}
  </div>
  </div>
</section>



  )
}

export default Section_e_2
