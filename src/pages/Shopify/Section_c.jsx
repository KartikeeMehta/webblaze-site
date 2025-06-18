import React from "react";

const contentBlocks = [
  {
    title: "Unique Shopify Themes",
    description:
      "Webblaze focuses on designing specific Shopify issues that align with your emblem identification. Our designers create visually lovely issues that no longer most effective appeal to clients however additionally offer an intuitive buying experience. From minimalist designs to vibrant layouts, we make sure your Shopify shop captures attention and converts visitors into clients.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/unique-shopify-themes.png", // Replace with your actual image path
    imagePosition: "left",
  },
  {
    title: "Shopify Website Design Services",
    description:
      "Our Shopify website design offerings at Webblaze attention on growing person-pleasant and responsive web sites. We make certain that your Shopify keep seems terrific on all gadgets, supplying a constant person enjoy. Our design technique includes optimizing navigation, improving visual appeal, and making sure short load instances, which might be crucial for retaining clients.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Shopify-Website-Design-Services.png", // Replace with your actual image path
    imagePosition: "right",
  },
];

function Section_c() {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#1B1F2E]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')", // Replace with your actual background image
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Design and Customization
        </h2>

        {/* Content Blocks */}
        <div className="flex flex-col gap-20">
          {contentBlocks.map((block, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                block.imagePosition === "right"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Image Container */}
              <div className="w-full md:w-1/2">
                <div
                  className={`relative rounded-[40px] overflow-hidden transform ${
                    block.imagePosition === "left"
                      ? "rotate-[5deg] hover:rotate-0"
                      : "rotate-[-5deg] hover:rotate-0"
                  } transition-transform duration-500 border-4 border-yellow-400`}
                >
                  <img
                    src={block.imagePath}
                    alt={block.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                  {block.title}
                </h3>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
          @keyframes fadein {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default Section_c;
