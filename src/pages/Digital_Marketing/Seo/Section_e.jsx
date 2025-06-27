
import React from 'react';
import seoSearchIcon from "../../../../public/seoSearchIcon.png"
import seoDigitalIcon from "../../../../public/seoDigitalIcon.png"
import seoMarktingIcon from "../../../../public/seoMarktingIcon.png"


const seoCards = [
    {
        title: "Search Engine Marketing Reputation Management",
        iconBg: "bg-blue-600",
        icon: seoSearchIcon,
        description: `Maintaining a wonderful online recognition is crucial. Our SEO reputation control services help improve your online presence, ensuring good reviews and high rankings. We use smart tools to monitor and manage your brand's online reputation across platforms.`,
    },
    {
        title: "SEO and Digital Marketing Integration",
        iconBg: "bg-red-500",
        icon: seoDigitalIcon,
        description: `SEO is part of a broader digital marketing strategy. We combine SEO with social media marketing, content creation, and PPC to create a unified online presence. Our team ensures all aspects work together for real results.`,
    },
    {
        title: "White Label SEO Services",
        iconBg: "bg-yellow-400",
        icon: seoMarktingIcon,
        description: `For companies offering SEO without managing it, we provide white label SEO services. Our expert team handles the work under your brand. We include everything from keyword research to reporting.`,
    },
];

const Section_e = () => {
    return (
        <section className="bg-[#0A0F2F] bg-[url('background-lines.webp')] py-20 text-white">
            <div className="max-w-[1200px] mx-auto  px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
                    Advanced SEO Techniques
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {seoCards.map((card, index) => (
                        <div key={index} className="bg-[#12204F] rounded-xl p-6 border border-blue-500/20 hover:shadow-lg transition-shadow duration-300">
                            <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-4`}>
                                <img src={card.icon} alt="icon" className="w-10 h-10 object-cover"   />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                            <p className="text-md leading-7 text-gray-300">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Section_e

