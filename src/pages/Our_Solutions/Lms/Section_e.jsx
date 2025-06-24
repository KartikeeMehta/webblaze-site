import React from 'react'

const Section_e = () => {
  return (


<section className="bg-[#0B1021] bg-[url('/public/background-lines.webp')] bg-cover bg-center py-16 px-4 md:px-12 text-white">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-5">
    Top LMS Platforms by using Webblaze
  </h2>
  <h3 className=' text-2xl text-center text-red-500 '> Comprehensive LMS Solutions</h3>
  <p className='text-center mb-12'>Webblaze offers a variety of LMS platforms to cater to one of a kind desires. Some of the most famous options encompass:</p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Open Source Learning Management System",
        desc: "Our open-supply answers provide flexibility and customization for tech-savvy users who need a tailored LMS revel in.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "Cloud-Based LMS Systems",
        desc: "Enjoy the advantages of scalability, automated updates, and faraway get right of entry to with our cloud-based gaining knowledge of management systems.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "Corporate LMS Platforms",
        desc: "These are designed to support huge-scale training initiatives within company environments, imparting robust safety features and extensive guide.",
        icon: "/icons/ai-web.png",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white border-blue-500 rounded-xl p-6 w-full sm:w-[90%] md:w-[45%] lg:w-[30%] text-white shadow-md"
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

export default Section_e
