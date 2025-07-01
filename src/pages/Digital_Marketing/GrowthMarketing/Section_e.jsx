
import React from "react";

const cardData = [
    {
        icon: "/investmentIcon.png",
        title: "Startup Growth Agency",
        description:
            "Startups require particular growth strategies to establish themselves inside the market. Our startup growth organization offerings are tailored to meet the unique wishes of early-level companies, that specialize in speedy person acquisition and brand constructing.",
    },
    {
        icon: "/hackGrowthIcon.png",
        title: "Growth Marketing for Startups",
        description:
            "At Webblaze, we recognize the demanding situations startups face. Our increase advertising for startups includes centered advertising and marketing campaigns, increase hacking techniques, and leveraging virtual marketing enterprise growth traits to propel your startup ahead.",
    },
];

const Section_e = () => {
    return (
        <section
            className="relative bg-cover bg-center py-20"
            style={{
                backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/08/Growth-Marketing-for-Startups-scaled.webp')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
                    Growth Marketing for Startups
                </h2>

                <div className="grid gap-6 md:grid-cols-2">
                    {cardData.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white bg-opacity-90 rounded-xl p-6 text-left shadow-lg"
                        >
                            <img
                                src={card.icon}
                                alt={card.title}
                                className="w-14 h-14 mb-4"
                            />
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                {card.title}
                            </h3>
                            <p className="text-gray-700 text-md leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_e;
