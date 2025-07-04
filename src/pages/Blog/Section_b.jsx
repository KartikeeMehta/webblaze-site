import React from "react";

const blogPosts = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/06/online-shopping-concept-scaled.jpg",
        title: "Build Your Own Metaverse eCommerce Store – The Future of Online Shopping",
        desc: "Step into the future with Webblaze Softtech. We help businesses build immersive metaverse eCommerce stores, 3D avatars and virtual store platforms. Start your metaverse shopping journey today!",
        link: "/ReadMore_MetaverseEcomerce",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/06/165-2.jpg",
        title: "Smarter Commutes: Why Carpool Software is Transforming Corporate Travel and Employee Mobility",
        desc: "Discover how carpool administration software transforms corporate commuting. Learn its benefits, key features, and business impact in this in-depth guide.",
        link: "/ReadMore_SmarterCommutes",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2025/06/AI-App-Development-in-2025-2.png",
        title: "AI App Development in 2025: The New Frontier for Smart Business Solutions",
        desc: "Get started today with a clear strategy, a powerful idea, and the right development team behind you. Your future-ready app starts now.",
        link: "/ReadMore_AIAppDev",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/08/top-software-development.jpg",
        title: "Top Software Development Trends to Watch in 2025",
        desc: "Software development is always changing with new trends and technologies. In 2025, many exciting developments are happening in this field. Let’s watch some of the top software development trends this year.",
        link: "/ReadMore_TopSoftware",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/07/shopify.webp",
        title: "How to Create a Stunning Shopify Store: Tips from WebBlaze Softtech",
        desc: "Learn how to design, build, and optimize a professional Shopify store with effective strategies for branding, product display, and customer engagement to boost online sales.",
        link: "/ReadMore_ShopifyStore",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/07/wordpress.webp",
        title: "The Ultimate Guide to WordPress Security: Tips and Best Practices",
        desc: "Discover essential WordPress security practices, tools, and tips to protect your website from hackers, malware, and vulnerabilities, ensuring safe, reliable performance for your business.",
        link: "/ReadMore_WordPress",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/07/Ai.webp",
        title: "The Evolution of Software Development: AI’s Impact on Coding",
        desc: "Explore how artificial intelligence is transforming software development, from automating coding tasks to enhancing productivity and innovation in modern development workflows.",
        link: "/ReadMoreAIDevelopment",
    },
];

const Section_b = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-2 sm:px-4">
                {blogPosts.map((post, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl shadow-md hover:shadow-lg hover:shadow-blue-300 transition duration-300 flex flex-col justify-between p-4"
                    >
                        <img
                            src={post.image}
                            alt={post.title}
                            className="rounded-xl w-full h-50 object-cover mb-4"
                        />
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
                            {post.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-4">{post.desc}</p>
                        <a
                            href={post.link}
                            className="bg-blue-500 text-white  border-[2px] hover:border-blue-600  hover:bg-white hover:text-blue-600 text-sm font-medium px-4 py-2 rounded-lg  transition self-start"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section_b;
