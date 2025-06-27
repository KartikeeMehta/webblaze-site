import React from "react";

const industries = [
    {
        title: "Art and Entertainment",
        description:
            "Webblaze specializes in creating NFT art marketplaces wherein artists can showcase and promote their virtual art. Our platforms offer features like artist profiles, digital galleries, and steady payment gateways.",
        icon: "/ecomerceGrowthIcon.png",
    },
    {
        title: "Gaming",
        description:
            "Our NFT market solutions cater to the gaming industry, permitting the trading of in-recreation assets, characters, and skins. We make sure seamless integration with gaming structures for a smooth person experience.",
        icon: "/ecomerceGrowthIcon.png",
    },
    {
        title: "Music",
        description:
            "We expand music NFT marketplaces in which artists can tokenize their music and sell it directly to fans. Our systems help numerous codecs, inclusive of audio, video, and stay streaming.",
        icon: "/ecomerceGrowthIcon.png",
    },
    {
        title: "Real Estate",
        description:
            "Webblaze gives NFT marketplace development for real property, allowing the tokenization of properties. This progressive method simplifies belongings transactions and gives a obvious and secure trading environment.",
        icon: "/ecomerceGrowthIcon.png",
    },
];

const Section_d = () => {
    return (
        <section className="max-w-[1200px] mx-auto py-16 px-4 md:px-12 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Industries We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                {industries.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 hover:shadow-lg transition"
                    >
                        <img
                            src={item.icon}
                            alt={item.title}
                            className="w-12 h-12 object-contain mt-1"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section_d;
