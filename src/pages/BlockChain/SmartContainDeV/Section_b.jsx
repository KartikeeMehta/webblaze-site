import React from "react";
import competitivePricing from "../../../assets/competitivePricing.png";
import experienceIcon from "../../../assets/experienceIcon.png";
import clientIcon from "../../../assets/clientIcon.png";

const Section_b = () => {
    const data = [
        {
            icon: experienceIcon,
            title: "Expertise in Blockchain Technology",
            desc: "Our team comprises some of the high-quality WordPress builders within the enterprise, with years of revel in in delivering wonderful WordPress web sites.",
            bgColor: "bg-blue-600",
        },
        {
            icon: clientIcon,
            title: "Comprehensive Services",
            desc: "We prioritize our customers' needs and work intently with them to make certain their vision is found out.",
            bgColor: "bg-red-400",
        },
        {
            icon: competitivePricing,
            title: "Tailored Solutions",
            desc: "Our offerings are priced competitively, offering notable cost for your investment.",
            bgColor: "bg-yellow-300",
        },

    ];

    return (
        <section className="bg-[#0B0F1C] py-20 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
                    Why Choose Webblaze for Smart Contract
                    Development?
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500 transition-colors duration-300 rounded-xl p-10 max-w-sm w-full text-left text-white"
                        >
                            <div
                                className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bgColor} mb-4`}
                            >
                                <img src={item.icon} alt="icon" className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_b;
