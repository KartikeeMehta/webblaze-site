import React from "react";

const cards = [
    {
        icon: "/seoDigitalIcon.png",
        title: "YouTube Video Animation",
        description:
            "Create attractive and shareable content material cloth for your YouTube channel with our expert animation offerings.",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "3D Medical Animation",
        description:
            "Simplify complex medical standards with our specific and accurate clinical animations.",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "3D Character Animation",
        description:
            "Bring your characters to existence with our great 3D man or woman animation offerings.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
];

const Section_e = () => {
    return (
        <div className="bg-[#fafafa] py-20 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto px-5">

                <h2 className="text-2xl md:text-4xl font-bold text-center mb-5 text-[#1d1e25]">
                    Customized Solutions for Every Need
                </h2>

                <p className="text-lg mb-16">At Webblaze, we understand that each assignment is specific. That’s why we offer customized animation answers tailor-made to your unique necessities. Whether you need youtube animation, 3D person animation, or 3D medical animation, we’ve were given have been given the abilities and revel in to deliver extraordinary results. Our offerings encompass:</p>

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
                            <h3 className="text-xl font-bold mb-3 text-[#1d1e25]">
                                {card.title}
                            </h3>
                            <p className="text-md text-gray-700 leading-relaxed">
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
