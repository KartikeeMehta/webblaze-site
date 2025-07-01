import React from "react";

const cards = [
    {
        icon: "/seoDigitalIcon.png",
        title: "Cross-Platform Compatibility",
        description:
            "Our 3D avatars are designed to be well matched across diverse structures, including IMVU on-line 3D metaverse game, membership cooee apk, and virtual avatar games. This ensures a steady and tasty user enjoy, no matter the platform.",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Advanced Customization",
        description:
            "Webblaze offers superior customization alternatives for 3D avatars, allowing you to create precise and personalised virtual representations. Our offerings consist of 3D avatar chat rooms, avatar 3D apk, and avatar 3D loose online, supplying infinite possibilities for customization.",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Interactive Features",
        description:
            "Enhance your virtual presence with interactive features which include avatar orchestra metaverse, avatar life love metaverse, and avatar games on line virtual worlds. Our 3D avatars provide a dynamic and tasty experience that keeps users coming returned for greater.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
];

const Section_e = () => {
    return (
        <div className="bg-[#fafafa] py-20 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto px-6">


                <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
                    Seamless Integration Across Platforms
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl shadow-md px-6 py-8 text-left ${card.borderColor}`}
                        >
                            <div className="flex items-start mb-5">
                                <img
                                    src={card.icon}
                                    alt={card.title}
                                    className="w-12 h-12 object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-[#1d1e25]">
                                {card.title}
                            </h3>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_e;
