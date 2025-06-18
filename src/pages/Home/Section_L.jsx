import React, { useEffect, useState } from 'react';
import shopifyIcon from "../../assets/shopify.png";
import wordPressIcon from "../../assets/wordPressIcon.png";
import aiIcon from "../../assets/aiIcon.png";

const blogs = [
    { id: 1, title: "How to Create a Stunning Shopify Store", date: "May. 18/2023", image: shopifyIcon, description: "Professional SEO, branding, and digital marketing services." },
    { id: 2, title: "The Ultimate Guide to WordPress Security", date: "May. 18/2023", image: wordPressIcon, description: "Tips and practices for secure WordPress sites." },
    { id: 3, title: "The Evolution of Software Development", date: "May. 18/2023", image: aiIcon, description: "How AI is reshaping modern coding." },
];

const totalDots = 5;

const Section_L = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % totalDots);
        }, 2000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#f7f9fc] py-16 px-4 overflow-x-hidden">
            <div className="text-center mb-12">
                <p className="text-red-500 text-sm font-semibold mb-2">Blog</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Looking For Valuable Business Content?
                </h2>
                <p className="text-gray-500 max-w-xl mx-auto">
                    Discover the digital possibilities for your brand with our comprehensive suite of services.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {blogs.map((blog) => (
                    <div key={blog.id} className="bg-white rounded-xl shadow-sm p-5 transition-all hover:shadow-lg">
                        <div className="rounded-xl overflow-hidden mb-4">
                            <img src={blog.image} alt={blog.title} className="w-full h-44 object-cover" />
                        </div>
                        <div className="mb-2">
                            <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                                {blog.date}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{blog.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">{blog.description}</p>
                        <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded hover:bg-blue-600 transition">
                            Read More
                        </button>
                    </div>
                ))}
            </div>

            {/* Auto-Moving Dots */}
            <div className="flex justify-center mt-10 space-x-2">
                {[...Array(totalDots)].map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-500 scale-125' : 'bg-blue-200'
                            }`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section_L;
