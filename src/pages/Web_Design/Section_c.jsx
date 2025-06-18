import React from 'react'
import competitivePricing from "../../assets/competitivePricing.png"
import watchIcon from "../../assets/watchIcon.png"
import experienceIcon from "../../assets/experienceIcon.png"
import clientIcon from "../../assets/clientIcon.png"

const Section_c = () => {
  const services = [
    {
      icon: experienceIcon,
      title: "Experience and Expertise",
      desc: "Our team comprises some of the high-quality WordPress builders within the enterprise, with years of revel in in delivering wonderful WordPress web sites.",
      bgColor: "bg-blue-600",
    },
    {
      icon: clientIcon,
      title: "Client-Centric Approach",
      desc: "We prioritize our customers' needs and work intently with them to make certain their vision is found out.",
      bgColor: "bg-red-400",
    },
    {
      icon: competitivePricing,
      title: "Competitive Pricing",
      desc: "Our offerings are priced competitively, offering notable cost for your investment.",
      bgColor: "bg-yellow-300",
    },
    {
      icon: watchIcon,
      title: "Timely Delivery",
      desc: "We adhere to strict timelines and make sure your mission is added on time, on every occasion.",
      bgColor: "bg-yellow-300",
    },
  ]
  return (
    <section className="w-full bg-[#0B1120]  overflow-hidden py-16">
      <div className="text-center px-4 pt-2">
        <h1 className="font-medium text-2xl text-white">Why Choose Webblaze for Web Design?</h1>
        <h4 className='text-white text-base'>Choosing the right net format business enterprise may be a frightening task. Here’s why Webblaze stands proud</h4>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-3 gap-6 place-items-center mt-9">
          {
            services.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500 transition-colors rounded-xl p-10 max-w-sm w-full text-left text-white">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} mb-4`}
                >
                  <img src={item.icon} alt="icon" className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            ))
          }
        </div>
      </div>

    </section>
  )
}

export default Section_c;