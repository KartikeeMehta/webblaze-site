import React from "react";

const contentBlocks = [
  {
    title: "Klaviyo Shopify and Marketing Tools",
    description:
      "Leverage the power of email marketing with our Klaviyo Shopify integration. This powerful double enables you create personalized/interactive mail campaigns that retain interactions customers and drive sales. Our integration offering makes certain that you can easily manage your marketing efforts from within your Shopify store.",
    imagePath:
      "https://images.pexels.com/photos/206434/pexels-photo-206434.jpeg?auto=compress&w=200&h=200&fit=crop",
    borderColor: "border-yellow-300",
  },
  {
    title: "Oberlo and DSers Shopify for Dropshipping",
    description:
      "If you are into dropshipping, our Oberlo Shopify and DSers Shopify apps are perfect for you. These apps simplify the method of importing merchandise from providers and handling orders. With our dropshipping tools, you can without difficulty upload merchandise for your store and automate your account stocks.",
    imagePath:
      "https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&w=200&h=200&fit=crop",
    borderColor: "border-rose-300",
  },
  {
    title: "Inventory Management and Shopify POS Pro",
    description:
      "Efficient stock management is crucial for any E-commerce strategist. Our Shopify stock management app helps you hold track of your stock degrees in real-time, lowering the threat of stockouts and overstocking. The Shopify POS Pro complements this via providing superior stock management capabilities, incorporated along with your POS gadget.",
    imagePath:
      "https://images.pexels.com/photos/2100063/pexels-photo-2100063.jpeg?auto=compress&w=200&h=200&fit=crop",
    borderColor: "border-yellow-300",
  },
];

function Section_c() {
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

          {/* Third Row */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div
                className={`rounded-full border-4 ${contentBlocks[2].borderColor} w-[276px] h-[480px] flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={contentBlocks[2].imagePath}
                  alt={contentBlocks[2].title}
                  className="w-[276px] h-[480px] object-cover rounded-full"
                />
              </div>
            </div>
            {/* Text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-[#222]">
                {contentBlocks[2].title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                {contentBlocks[2].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_c;
