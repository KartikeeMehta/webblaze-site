import React from 'react';


const services = [
    {
        title: "Custom WordPress Development",
        points: [
            "Tailored answers in your specific necessities",
            "Seamless integration with present systems",
            "Focus on performance and protection",
        ],
    },
    {
        title: "WordPress Web Design",
        points: [
            "Attractive and person-friendly designs",
            "Responsive layout for all gadgets",
            "Brand-aligned subject matters and templates",
        ],
    },
    {
        title: "WooCommerce Development",
        points: [
            "E-commerce answers for on-line stores",
            "Custom WooCommerce subject and plugin improvement",
            "Payment gateway integration and inventory control",
        ],
    },
    {
        title: "WordPress Plugin Development",
        points: [
            "Custom plugin advent to beautify functionality",
            "Plugin updates and maintenance",
            "Integration with 1/3-party offerings",
        ],
    },
    {
        title: "WordPress Theme Development",
        points: [
            "Attractive and person-friendly designs",
            "Responsive layout for all gadgets",
            "Brand-aligned subject matters and templates",
        ],
    },
    {
        title: "White Label WordPress Development",
        points: [
            "Partner with us for white label solutions",
            "Confidential and seamless integration",
            "Professional and reliable offerings",
        ],
    },
];

const Section_b = () => {
    return (
        <div className="relative py-16 bg-[#f9fbfd] overflow-hidden">
            <img
                src={'https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg'}
                alt="Paper Plane"
                className="absolute top-4 right-8 w-28 h-28 md:w-32 md:h-32"
            />

            <img
                src={'https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-2.webp'}
                alt="Decor Dots"
                className="absolute bottom-4 right-4 w-20 h-20 md:w-20 md:h-20"
            />

            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What’s Brewing In The Webblaze Softtech?
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto mb-12">
                    At Webblaze, we provide a huge range of WordPress development offerings that will help you create a sturdy online presence. Our services encompass
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm p-6 text-left border-b-4 border-blue-400"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">{service.title}</h3>
                            <ul className="list-decimal pl-5 space-y-1 text-gray-700 text-sm">
                                {service.points.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_b;
