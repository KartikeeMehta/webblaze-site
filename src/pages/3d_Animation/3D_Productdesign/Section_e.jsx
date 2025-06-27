import React from "react";

const cards = [
    {
        icon: "/seoDigitalIcon.png",
        title: "Increased Efficiency",
        description:
            "Using advanced drafting software like AutoCAD Civil Engineering and IMSI TurboCAD, we streamline the layout manner to shop time and resources.",
        borderColor: "border-b-[4px] border-[#ff4d4f]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Enhanced Visual Appeal",
        description:
            "Our 3D photo layout services, consisting of 3D furniture design and 3D container layout, ensure that your merchandise are visually appealing and stand out within the market.",
        borderColor: "border-b-[4px] border-[#1890ff]",
    },
    {
        icon: "/seoDigitalIcon.png",
        title: "Precision and Accuracy",
        description:
            "With tools like Autodesk 123D Design and Fusion 360 for 3D printing, we create unique fashions that meet precise specifications.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
     {
        icon: "/seoDigitalIcon.png",
        title: "Versatility",
        description:
            " From 3D product modeling to 3D packaging rendering, we provide a extensive range of services to cater to unique industries and design desires.",
        borderColor: "border-b-[4px] border-[#fadb14]",
    },
    
];

const Section_e = () => {
    return (
        <div className="bg-[#fafafa] py-20 px-6 md:px-16">
            <div className="max-w-[1200px] mx-auto">


                <h2 className="text-2xl md:text-3xl font-bold text-center mb-16 text-[#1d1e25]">
                   Benefits of Our 3D Product Design Services
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
