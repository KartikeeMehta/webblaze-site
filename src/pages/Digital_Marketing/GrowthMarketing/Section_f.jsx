import React from "react";

const cards = [
    {
        badge: "Digital Marketing for Business Growth",
        badgeColor: "bg-blue-100 text-gray-800",
        borderColor: "border-b-4 border-blue-400",
        description:
            "Digital advertising is essential for business increase within the current era. Our digital marketing for enterprise increase services encompass search engine optimization, PPC, social media marketing, and content marketing. We purpose to increase your on line visibility and power qualified site visitors on your internet site.",
    },
    {
        badge: "Social Media Marketing for Business Growth",
        badgeColor: "bg-red-100 text-gray-800",
        borderColor: "border-b-4 border-blue-400",
        description:
            "Social media structures are powerful gear for engaging with customers and constructing brand consciousness. Our social media advertising and marketing for business boom services include method development, content material introduction, and community management.",
    },
    {
        badge: "Growth Marketing Automation",
        badgeColor: "bg-yellow-100 text-gray-800",
        borderColor: "border-b-4 border-blue-400",
        description:
            "Automation is prime to scaling advertising efforts effectively. Our increase advertising and marketing automation offerings help streamline your advertising approaches, from lead technology to patron nurturing, making sure steady and effective communication.",
    },
];

const Section_f = () => {
    return (
        <section className="bg-white py-16">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Enhancing Digital Presence
                </h2>
                <div className="grid gap-6 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg shadow-sm p-6 text-left ${card.borderColor}`}
                        >
                            <div
                                className={`inline-block px-4 py-4 font-semibold text-xl rounded-md mb-4 ${card.badgeColor}`}
                            >
                                {card.badge}
                            </div>
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

export default Section_f;
