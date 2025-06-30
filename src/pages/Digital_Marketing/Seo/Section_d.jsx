
import React from 'react';

const services = [
    {
        title: "Ecommerce Search Engine Marketing",
        highlight: "Ecommerce",
        description: `For online shops, we offer specialised ecommerce SEO services to optimize your product listings and enhance your visibility on platforms like Shopify and Amazon.

Our Shopify SEO offerings assist you rank higher on Shopify’s search results, using more site visitors and sales in your store.`,
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/ecommerce-seo-icon.webp",
    },
    {
        title: "SEO for Small Businesses",
        highlight: "Small Businesses",
        description: `Small companies want affordable search engine marketing services to compete with larger corporations. We offer value-powerful SEO packages tailor-made for small agencies to help them gain online growth.

Our search engine optimization services for small groups cover everything from local SEO to complete SEO strategies.`,
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/seo-small-buisness.webp",
    },
    {
        title: "SEO for Niche Markets",
        highlight: "Niche Markets",
        description: `We cater to niche markets with custom SEO strategies. Whether you need dental SEO, real estate SEO, or SEO for plumbers, our experts help you dominate your exact marketplace.

Our services optimize your website for unique keywords tailored to your business and audience.`,
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/seo-niche-market-icon.webp",
    },
];

const Section_d = () => {
    return (
        <section className="py-16 bg-white text-gray-800">
            <div className="max-w-[1200px]  mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    Specialized Search Engine Marketing Services
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6">
                            <img src={service.image} alt={service.highlight} className="w-20 h-20 mx-auto mb-4" />
                            <h3 className="text-xl font-bold text-center mb-2">
                                <span className="text-red-500">{service.highlight}</span>{" "}
                                {service.title.replace(service.highlight, '')}
                            </h3>
                            <p className="text-md text-gray-700 whitespace-pre-line">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Section_d
