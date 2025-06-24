import React from "react";

const features = [
    {
        title: "Expert Development Team",
        description:
            "Webblaze boasts a team of skilled developers who concentrate on growing remarkable social media systems. From app cloner solutions to social media app maker services, our crew ensures your platform runs smoothly and successfully.",
    },
    {
        title: "Scalable Solutions",
        description:
            "Whether you’re concentrated on a small target audience or aiming for 1M – 10M customers, our solutions are scalable to fulfill your needs. Our expertise in creating platforms like reality social app, bereal app, mewe app, and clubhouse app ensures you get a product which could grow along with your audience.",
    },
    {
        title: "Comprehensive Support",
        description:
            "From preliminary setup to ongoing preservation, Webblaze gives comprehensive assist to ensure your platform stays up-to-date and steady. Utilize our social media scheduling app, social media reporting tools, and social media making plans equipment to maintain your content method heading in the right direction.",
    },
    {
        title: "Free and Premium Tools",
        description:
            "Access various unfastened social media control tools and social media scheduling tools free to enhance your platform. For extra superior wishes, our top rate tools provide extra functionalities to provide you a aggressive aspect.",
    },
    {
        title: "Analytics and Insights",
        description:
            "Our social media analytics platform and high-quality social media analytics equipment provide you with distinctive insights into user conduct and content material performance. Use these insights to refine your strategy and achieve higher consequences.",
    },
];

const Section_f = () => {
    return (
        <section className="w-full bg-[#0F172A] text-white py-20 px-4" style={{ backgroundImage: 'url("/path-to/your-pattern.svg")', backgroundRepeat: "repeat" }}>
            <div className="max-w-[1200px] mx-auto text-center px-5">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">How Webblaze Can Help You</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b]/60 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-left w-full max-w-sm"
                        >
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-sm text-white/80 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_f;
