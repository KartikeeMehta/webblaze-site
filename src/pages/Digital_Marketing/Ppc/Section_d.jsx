import React from "react";

const benefits = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/Customized-PPC-Strategies.webp",
        title: "Expert PPC Management",
        desc: "Our team of PPC experts has years of experience managing successful campaigns. We handle all aspects of PPC—from account setup to performance evaluation—ensuring your ads run at their best.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/02/3817830_10902_11zon-scaled.jpg",
        title: "Transparent Reporting",
        desc: "We believe in transparency. Our reports provide clear insights into performance, including metrics like cost-per-click, conversion rates, and ad spend. You always know where your money is going.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/02/18449102_58Z_PPC_Specialist_2_11zon-1536x1536.jpg",
        title: "Customized PPC Strategies",
        desc: "No two businesses are the same. That’s why we craft unique PPC strategies based on your goals, industry, and audience. Our tailored approach helps you reach the right customers.",
    },
];

const Section_d = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-[1200px] mx-auto text-center">
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

export default Section_d;
