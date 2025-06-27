import React from "react";

const contentData = [
  {
    title: "Virtual Avatar Creation",
    text: "Our group specializes in virtual avatar creation, handing over sensible representations that enhance your virtual interactions. Whether for social on-line games with avatars or expert digital meetings, our avatars deliver a brand new level of realism and personalization.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/09/Virtual-Avatar-Creation.webp",
    reverse: false,
  },
  {
    title: "Metaverse Avatar Solutions",
    text: "Webblaze provides complete metaverse avatar solutions, such as metaverse avatar author, metaverse person creator, and metaverse avatar maker. Our services cater to companies seeking to establish a sturdy presence in the metaverse, supplying tools to create immersive and interactive stories.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/09/Metaverse-Avatar-Solutions.webp",
    reverse: true,
  },
  {
    title: "Interactive Virtual Worlds",
    text: "Engage your audience with 3D avatar video games like IMVU, digital avatar games, and avatar chat games. Our 3D avatars integrate seamlessly into diverse structures, enhancing consumer revel in in digital worlds and chat rooms.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/09/Interactive-Virtual-Worlds.webp",
    reverse: false,
  },
  {
    title: "Custom 3D Avatar Design",
    text: "Webblaze provides tailored 3D avatar design services to give your business or product a unique edge in the metaverse and digital space. Stand out with avatars that reflect your brand personality and resonate with your audience.",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/09/Custom-3-D-Avatar-Design.webp",
    reverse: true,
  },
];

const Section_b = () => {
  return (
    <div className="bg-[#f4f4f4] w-full py-20 px-4">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          Transform Your Online Identity
        </h2>

        <div className="space-y-20">
          {contentData.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 items-center gap-10 ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className={`${item.reverse ? "order-2 md:pl-10" : "order-1 md:pr-10"}`}>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
              </div>

              {/* Image */}
              <div className={`${item.reverse ? "order-1" : "order-2"}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="rounded-xl w-full h-auto max-w-[500px] mx-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_b;
