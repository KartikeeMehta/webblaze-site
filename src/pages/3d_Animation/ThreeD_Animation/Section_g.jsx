import React from "react";

const cardData = [
    {
        title: "Naruto Shippuden Animation",
        description:
            "Experience the dynamic and motion-packed animations of Naruto Shippuden with our professional group.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/image-1-1.png",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        title: "Dragon Ball Z Animation",
        description:
            "Relive the pleasure of Dragon Ball Z with our adorable animations that seize the essence of the series.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/image-2.png",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        title: "One Piece Odyssey",
        description:
            "Dive into the area of One Piece Odyssey with our fascinating animations that deliver the story to life.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/image-3.png",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },

];

const Section_g = () => {
    return (
        <div className="bg-white py-20 px-6 md:px-8">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#E95353]">
                    Our Portfolio of Work
                </h2>
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3 text-[#1d1e25]">
                    Tailored Solutions for Your Needs
                </h2>
                <p className="mb-16" >Webblaze has labored on a number of excessive-profile animation tasks, turning in awesome results for our customers. Some of our incredible projects consist of:
                </p>

                <div className="grid gap-8 md:grid-cols-3">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white shadow-md rounded-xl overflow-hidden ${card.borderColor} transition-all duration-300`}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6 text-center">
                                <h3 className="text-lg font-bold mb-3 text-[#1d1e25]">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_g;
