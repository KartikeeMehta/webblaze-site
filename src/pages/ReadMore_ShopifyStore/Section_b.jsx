import React, { useEffect, useRef, useState } from "react";

const blogs = [
  {
    id: 1,
    title:
      "Build Your Own Metaverse eCommerce Store – The Future of Online Shopping",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/06/online-shopping-concept-scaled.jpg",
    description:
      "Step into the future with Webbalze Softtech. We help businesses build immersive metaverse eCommerce stores, 3D avatars and virtual store platforms. Start your metaverse shopping journey today!",
  },
  {
    id: 2,
    title:
      "AI App Development in 2025: The New Frontier for Smart Business Solutions",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2025/06/AI-App-Development-in-2025-2.png",
    description:
      "Get started today with a clear strategy, a powerful idea, and the right development team behind you. Your future-ready app starts now.",
  },
  {
    id: 3,
    title: "Top Software Development Trends to Watch in 2025",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/08/top-software-development.jpg",
    description:
      "Software development is always changing with new trends and technologies. In 2025, many exciting developments are happening in this field. Let’s watch some of the top software development trends this year.",
  },
  {
    id: 4,
    title:
      "How to Create a Stunning Shopify Store: Tips from WebBlaze Softtech",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/07/shopify.webp",
    description:
      "Learn how to design, build, and optimize a professional Shopify store with effective strategies for branding, product display, and customer engagement to boost online sales.",
  },
  {
    id: 5,
    title: "The Ultimate Guide to WordPress Security: Tips and Best Practices",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/07/wordpress.webp",
    description:
      "Discover essential WordPress security practices, tools, and tips to protect your website from hackers, malware, and vulnerabilities, ensuring safe, reliable performance for your business.",
  },
  {
    id: 6,
    title: "The Evolution of Software Development: AI’s Impact on Coding",
    date: "May. 18/2023",
    image:
      "https://webblazesofttech.com/wp-content/uploads/2024/07/Ai.webp",
    description:
      "Explore how artificial intelligence is transforming software development, from automating coding tasks to enhancing productivity and innovation in modern development workflows.",
  },
];

const VISIBLE_CARDS = 3;
const TOTAL_SLIDES = blogs.length - VISIBLE_CARDS + 1;

const Section_b = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.offsetWidth / VISIBLE_CARDS;
      container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % TOTAL_SLIDES;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f7f9fc] py-16 px-4 overflow-x-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Related Posts
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth no-scrollbar max-w-6xl mx-auto p-2"
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="min-w-[310px] max-w-[350px] flex-shrink-0 bg-white rounded-xl shadow-sm p-5 transition hover:shadow-lg overflow-hidden"
          >
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-50 object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{blog.description}</p>
            <button className="bg-blue-500 hover:border-blue-600 hover:bg-white hover:text-blue-600 border-[2px] text-white text-sm px-4 py-2 rounded-lg transition">
              Read More
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: TOTAL_SLIDES }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-blue-500 scale-125"
                : "bg-blue-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Section_b;
