import React from "react";

const contentBlocks = [
  {
    title: "Unparalleled Features​",
    description:
      "Our resort management software includes a plethora of capabilities together with a lodge reserving software machine, a resort belongings management device (PMS), and a channel supervisor software. These additives work collectively to offer a seamless experience for each lodge personnel and guests. From online hotel reserving software to advanced hotel reservation software program, our answer covers all factors of inn control.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/10/Unparalleled-Features.webp",
    borderColor: "border-yellow-300",
  },
  {
    title: "Streamlined Operations with PMS Software​",
    description:
      "Webblaze’s PMS hotel software program is designed to handle each issue of assets management. Our PMS machine is versatile and may be custom designed to fit the unique wishes of any hotel, from small boutique resorts to huge luxurious motels. The PMS property management device guarantees green management of room bookings, visitor test-ins and check-outs, billing, and greater.",
    imagePath:
      "https://webblazesofttech.com/wp-content/uploads/2024/10/Streamlined-Operations-with-PMS-Software.webp",
    borderColor: "border-rose-300",
  },
];

function Section_b() {
  return (
    <div
      className="relative w-full py-16 md:py-24 bg-[#fafbfc]"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left bottom",
      }}
    >
      <div className="max-w-[1000px] mx-auto px-4">
        {/* Main Title */}
        <h2 className="text-xl md:text-2xl font-bold text-center mb-10 text-[#222]">
          Advanced Features and App Integration
        </h2>

        {/* Content Blocks */}
        <div className="flex flex-col gap-12">
          {/* First Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[0].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[0].imagePath}
                  alt={contentBlocks[0].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[0].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[0].description}
              </p>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[1].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[1].imagePath}
                  alt={contentBlocks[1].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[1].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[1].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
