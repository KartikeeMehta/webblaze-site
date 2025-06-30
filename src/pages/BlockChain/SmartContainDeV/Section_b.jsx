import React from "react";
import competitivePricing from "../../../assets/competitivePricing.png";
import experienceIcon from "../../../assets/experienceIcon.png";
import clientIcon from "../../../assets/clientIcon.png";

const Section_b = () => {
    const data = [
        {
            icon: experienceIcon,
            title: "Expertise in Blockchain Technology",
            desc: "Our institution consists of licensed smart agreement developers professional in blockchain smart agreement development.We are talented in diverse blockchain systems, together with Ethereum, Binance Smart Chain, and more.",
            bgColor: "bg-blue-600",
        },
        {
            icon: clientIcon,
            title: "Comprehensive Services",
            desc: "We offer a complete sort of smart settlement development offerings, from preliminary session to deployment and protection.Our offerings include NFT smart settlement development, DeFi smart settlement development, and additional.",
            bgColor: "bg-red-400",
        },
        {
            icon: competitivePricing,
            title: "Tailored Solutions",
            desc: "We apprehend that every enterprise has particular wishes. Our smart contract consulting services make certain customized solutions that fit your specific requirements.",
            bgColor: "bg-yellow-300",
        },

    ];

    return (
        <section className="bg-[#0B0F1C] bg-[url('background-lines.webp')] py-20 px-4">
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
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-md text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_b;
