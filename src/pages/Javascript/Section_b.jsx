import React from "react";

const contentBlocks = [
    {
        title: "Unleashing the Power of JavaScript",
        description: "JavaScript is a versatile programming language that powers the interactive elements of websites and applications. It’s widely adopted for its flexibility and ease of integration with other technologies. At Webblaze, we harness the full potential of JavaScript to create dynamic and engaging user experiences.",
        imagePath:
            "https://webblazesofttech.com/wp-content/uploads/2024/08/php-programmer.webp",
        borderColor: "border-yellow-300",
    },
    {
        title: "Why Choose JavaScript for Your Project?",
        description:
            "JavaScript is essential for modern web development. Its ability to create responsive interfaces, manage server-side operations with Node.js, and handle real-time updates makes it a cornerstone of today’s digital landscape. Our JavaScript services include everything from basic scripting to advanced web applications.",
        imagePath:
            "https://webblazesofttech.com/wp-content/uploads/2024/08/Engaging-Customer-Interactions-with-Shopify-Live-Chat.webp",
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
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
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

export default Section_b;
