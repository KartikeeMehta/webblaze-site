import React from "react";

const cards = [
    {
        icon: "/seoDigitalIcon.png",
        title: "Adobe Animation",
        description:
            "Create colourful and engaging 2D animations with our Adobe Animation data.",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Blender 3D Animation",
        description:
            "Leverage the electricity of Blender for growing specific and practical 3D animations.",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "CGI Animation",
        description:
            "Experience the wonderful of laptop-generated imagery with our awesome CGI animations.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
];

const Section_h = () => {
    return (
        <div className="bg-[#181C2E] py-20 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto">

                <h2 className="text-2xl md:text-3xl font-bold text-center mb-5 text-white">
                  Diverse Animation Styles
                </h2>
                <p className=" mb-16 text-white">We satisfaction ourselves on our functionality to art work with a large sort of animation styles, from 2D animation to CGI animation. Our crew is talented in:</p>

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

export default Section_h;
