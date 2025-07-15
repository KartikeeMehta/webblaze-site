import React from "react";

const contentBlocks = [
  {
    title: "Unique Shopify Themes",
    description:
      "Webblaze focuses on designing specific Shopify issues that align with your emblem identification. Our designers create visually lovely issues that no longer most effective appeal to clients however additionally offer an intuitive buying experience. From minimalist designs to vibrant layouts, we make sure your Shopify shop captures attention and converts visitors into clients.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/unique-shopify-themes.png",
    borderColor: "border-yellow-400",
    imagePosition: "left",
  },
  {
    title: "Shopify Website Design Services",
    description:
      "Our Shopify website design offerings at Webblaze attention on growing person-pleasant and responsive web sites. We make certain that your Shopify keep seems terrific on all gadgets, supplying a constant person enjoy. Our design technique includes optimizing navigation, improving visual appeal, and making sure short load instances, which might be crucial for retaining clients.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/Shopify-Website-Design-Services.png",
    borderColor: "border-red-500",
    imagePosition: "right",
  },
];

function Section_c() {
  return (
    <div
      className="w-full py-16 md:py-24 bg-[#1B1F2E]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Design and Customization
        </h2>

        <div className="flex flex-col gap-24">
          {contentBlocks.map((block, index) => {
            const isLeft = block.imagePosition === "left";
            return (
              <div
                key={index}
                className={`flex flex-col lg:flex-row ${!isLeft ? "lg:flex-row-reverse" : ""
                  } items-center gap-12 lg:gap-20`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div
                    className={`overflow-hidden border-[5px] ${block.borderColor}
                      w-full max-w-[320px] h-[420px]
                      rounded-none lg:rounded-[50%/60%]`}
                  >
                    <img
                      src={block.imagePath}
                      alt={block.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 px-2 sm:px-4 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">
                    {block.title}
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    {block.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section_c;
