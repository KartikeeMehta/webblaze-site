import React from "react";

const benefits = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/11/Integrations-and-Tools.webp",
        title: "Integrations and Tools",
        desc: "Our OnlyFans clone is like minded with a wide variety of social media control equipment and social media scheduling equipment. Integrate with structures like hootsuite free, awario, and different social media listening gear to optimize your content strategy. Use social media posting systems to make sure your content reaches your audience at the right time.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/11/Market-Your-Platform-Effectively.webp",
        title: "Market Your Platform Effectively",
        desc: "Utilize social media structures for business to amplify your attain. Engage together with your target audience via instagram submit scheduler or great instagram scheduler to maintain a steady on-line presence. Leverage social media management structures and social media monitoring tools to stay in advance of traits and competitor activities.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/11/Monetization-Opportunities.webp",
        title: "Monetization Opportunitiesy",
        desc: "Our OnlyFans clone presents a couple of revenue streams. Charge for subscriptions, provide distinctive content material, and sell merchandise. The pleasant simplest fans and top most effective enthusiasts techniques can be easily carried out to maximize income.",
    },
];

const Section_e = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-[1200px] mx-auto text-center px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Benefits of Choosing Webblaze
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded overflow-hidden text-left hover:shadow-md transition-all duration-300"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_e;
