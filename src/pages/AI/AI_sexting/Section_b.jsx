import React from 'react'

const Section_b = () => {
  return (


<section className="bg-white bg-cover bg-center py-16 px-4 md:px-12 text-black">
<div className="wrap_section_f max-w-[1200px] m-auto">
  <h2 className="text-xl md:text-4xl font-bold text-center mb-5">
    Why Choose Our Sexting Chat Bot?
  </h2>
  <p className="text-lg md:text-3xl  text-center mb-12">Our sexting chat bot answers are tailor-made to cater to agencies searching for to combine modern generation into their offerings. Here’s why our sexting chat bot sticks out:</p>

  <div className="flex flex-wrap justify-center gap-6">
    {[
      {
        title: "Advanced AI Technology",
        desc: "Our chat bot leverages modern day artificial intelligence to offer sensible and attractive conversations. This era guarantees that the chat bot can take care of nsfw chat and sexting interactions conveniently, offering customers an proper and immersive experience.",
        icon: "/icons/ai-dev.png",
      },
      {
        title: "Customizable Features",
        desc: "We recognize that each enterprise has precise wishes. Our sexting chat bot may be customized to suit your particular necessities, whether you need a intercourse chat bot, a sexting app bot, or nsfw chat bots. This flexibility guarantees that the bot aligns perfectly with your logo's voice and tone.",
        icon: "/icons/ai-learn.png",
      },
      {
        title: "High Engagement Rates",
        desc: "Our sexting chat bot is designed to maintain customers engaged. With features like sext bot on line and sext bot with photographs, users are more likely to spend time interacting with the bot, growing their ordinary satisfaction and loyalty in your platform.harges.",
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
