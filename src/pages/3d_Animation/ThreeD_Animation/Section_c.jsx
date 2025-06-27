import React from "react";

const cards = [
    {
        icon: "/seoDigitalIcon.png",
        title: "Video Animation",
        description:
            "Transform your thoughts into visually beautiful films that engage and entertain your target marketplace. From explainer motion photographs to promotional content material, our video animation services cover all your goals.",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Game Animation",
        description:
            "Enhance your gaming experience with our pinnacle-notch pastime animation offerings. We create dynamic and realistic animations that deliver characters and environments to life.",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Product Animation",
        description:
            "Showcase your products in the incredible moderate with our 3D product animation services. Highlight the capabilities and advantages of your merchandise in a visually appealing way.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
];

const Section_c = () => {
    return (
        <div className="bg-[#fafafa] py-20 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto">

                <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-[#E95353]">
                    Our Expertise in 3D Animation
                </h2>
                <h4 className="text-2xl md:text-4xl font-bold text-center mb-5 text-[#1d1e25]">
                    Professional 3D Animation Services
                </h4>
                <p className=" text-lg mb-16">At Webblaze, we provide a huge style of 3D animation services to cater to numerous industries and dreams. Our organization of professional animators is talented in developing fantastic animations that captivate audiences and bring your message successfully. Our offerings encompass:</p>

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
                            <h3 className="text-2xl font-bold mb-3 text-[#1d1e25]">
                                {card.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_c;
