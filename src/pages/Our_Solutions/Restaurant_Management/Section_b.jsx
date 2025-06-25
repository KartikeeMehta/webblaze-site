import React from "react";

const benefits = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/01/image-15.png",
        title: "Comprehensive Restaurant Management System",
        desc: "Our software offers give up-to-stop answers that optimize each element of your restaurant operations, from real-time stock monitoring to seamless table management, ensuring you can offer top notch carrier and maximize profitability.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/01/image-16.png",
        title: "Asset Management",
        desc: "Our superior admin panels offer eating place proprietors and managers with the gear to oversee and manage each element of their commercial enterprise. You can without problems get right of entry to income records, reveal inventory ranges, control reservations, music employee performance, and greater—at some point of a unmarried, intuitive dashboard.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/01/image-17.png",
        title: "Incident Management",
        desc: "Streamline your delivery operations with our dedicated shipping panel. Manage transport team of workers, tune orders, and optimize routes to make sure well timed deliveries and excessive consumer delight.",
    },
];

const Section_b = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-[1200px] mx-auto text-center px-5">
                

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

export default Section_b;
