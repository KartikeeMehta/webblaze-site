import React from "react";

const benefits = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/Customized-PPC-Strategies.webp",
        title: "Expert PPC Management",
        desc: "Our team of “percent experts” and “p.C experts” has years of enjoy coping with a hit campaigns. We handle all aspects of “p.C control,” from advert introduction to overall performance evaluation, making sure your campaigns are usually performing at their high-quality.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/02/3817830_10902_11zon-scaled.jpg",
        title: "Transparent Reporting",
        desc: "We believe in transparency. Our exact reports provide insights into your campaign overall performance, together with metrics like “cost according to click,” “pay consistent with click on ads,” and “google pay in line with click advertising and marketing.” You’ll usually recognize how your campaigns are performing and where your finances is being spent.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/02/18449102_58Z_PPC_Specialist_2_11zon-1536x1536.jpg",
        title: "Customized PPC Strategies",
        desc: "No  agencies are the identical. That’s why we develop custom designed PPC strategies tailored for your unique goals and industry. Whether you want “p.C services near me,” “percent for law corporations,” or “ecommerce p.C,” we’ve the understanding to deliver consequences.",
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
                                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-md leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_d;
