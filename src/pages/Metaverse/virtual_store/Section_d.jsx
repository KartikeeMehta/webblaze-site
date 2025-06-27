import React from "react";

const features = [
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    title: "Meta Store Oculus Integration",
    description:
      "Our answers consist of integration with the Meta Store Oculus, presenting customers with a unified buying enjoy throughout exclusive systems. This consists of the Meta Quest sport shop, Meta Quest 2 sport store, and Meta Quest save.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    title: "Virtual Reality Shopping Online",
    description:
      "Webblaze gives answers for virtual fact purchasing on-line, allowing clients to revel in an immersive purchasing enjoy from the consolation in their houses. Whether it is purchasing in VR, digital truth garb store, or virtual reality gaming center near me, our virtual stores cater to diverse client desires.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    title: "Virtual Retail Store",
    description:
      "Transform your e-commerce platform into a digital retail keep with Webblaze. Our answers include functions like digital shopping internet site, digital ecommerce store, and virtual retail, ensuring a complete and attractive purchasing revel in.",
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3135/3135731.png",
    title: "Metaverse Storefront",
    description:
      "Establish your presence within the metaverse with a metaverse storefront. Webblaze presents answers for metaverse retail shops, metaverse on-line purchasing, and metaverse ecommerce store, helping you reach a much wider target market and increase income.",
  },
];

const rightImages = [
  "https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Virtual-Store-Solutions.webp",
  "https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Virtual-Store-Solutions-1.webp",
];

function Section_d() {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-center py-16"
      style={{
        backgroundImage: "url('background-lines.webp')", // Replace with your actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundColor: "#232435",
      }}
    >
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white">
          Comprehensive Virtual Store Solutions
        </h2>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-center">
          {/* Left: Features */}
          <div className="flex-1 flex flex-col gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start bg-white rounded-xl shadow-lg p-4 min-h-[190px]"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 object-contain rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-base md:text-lg font-bold mb-1 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Right: Images */}
          <div className="flex-1 flex-col gap-6">
            {rightImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Virtual Store ${idx + 1}`}
                className="rounded-2xl object-cover w-[276px] h-[410px] shadow-lg right_image"
                style={{ background: "#eee" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_d;
