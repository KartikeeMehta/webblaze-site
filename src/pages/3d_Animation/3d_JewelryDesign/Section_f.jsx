import React from "react";

const cardData = [
    {
        title: " 3D Engagement Ring Design",
        description:
            "Create the precise engagement ring with our specialized  3D engagement ring design  offerings. Whether you opt for traditional styles or modern twists, our designs will seize the essence of your love story.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/3d-engagement-ring-design.webp",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        title: "3D Custom Pendant",
        description:
            "Design your personal  3D custom pendant  with our expert crew. From  3D pendant designs  to  3D printed earrings patterns , we make certain every piece is unique and beautifully crafted.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/3d-custom-pendant.webp",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        title: "3D Earrings Design",
        description:
            "Our  3D rings design  offerings cater to diverse styles, from sensitive studs to elaborate danglers. Each layout is tailored to satisfy your aesthetic and useful requirements.",
        image:
            "https://webblazesofttech.com/wp-content/uploads/2024/09/3d-earrings-design.webp",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
];

const Section_f = () => {
    return (
        <div className="bg-white py-20 px-6 md:px-8">
            <div className="max-w-[1200px] mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
                    Specialized 3D Jewelry Design Services </h2>

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

export default Section_f;
