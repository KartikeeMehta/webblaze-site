import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Build Your Own Metaverse eCommerce Store – The Future of Online Shopping",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2025/06/online-shopping-concept-scaled.jpg",
    description: "Step into the future with Webbalze Softtech. We help businesses build immersive metaverse eCommerce stores, 3D avatars and virtual store platforms. Start your metaverse shopping journey today!",
    link: "/ReadMore_MetaverseEcomerce"
  },
  {
    id: 2,
    title: "Smarter Commutes: Why Carpool Software is Transforming Corporate Travel and Employee Mobility",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2025/06/165-2.jpg",
    description: "Discover how carpool administration software transforms corporate commuting. Learn its benefits, key features, and business impact in this in-depth guide.",
    link: "/ReadMore_SmarterCommutes"
  },
  {
    id: 3,
    title: "AI App Development in 2025: The New Frontier for Smart Business Solutions",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2025/06/AI-App-Development-in-2025-2.png",
    description: "Get started today with a clear strategy, a powerful idea, and the right development team behind you. Your future-ready app starts now.",
    link: "/ReadMore_AIAppDev"
  },
  {
    id: 4,
    title: "Top Software Development Trends to Watch in 2025",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/08/top-software-development.jpg",
    description: "Software development is always changing with new trends and technologies. In 2025, many exciting developments are happening in this field.",
    link: "/ReadMore_TopSoftware"
  },
  {
    id: 5,
    title: "How to Create a Stunning Shopify Store: Tips from WebBlaze Softtech",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/shopify.webp",
    description: "Learn how to design, build, and optimize a professional Shopify store with effective strategies for branding and sales.",
    link: "/ReadMore_ShopifyStore"
  },
  {
    id: 6,
    title: "The Ultimate Guide to WordPress Security: Tips and Best Practices",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/wordpress.webp",
    description: "Discover essential WordPress security practices, tools, and tips to protect your website from hackers and malware.",
    link: "/ReadMore_WordPress"
  },
  {
    id: 7,
    title: "The Evolution of Software Development: AI’s Impact on Coding",
    date: "May. 18/2023",
    image: "https://webblazesofttech.com/wp-content/uploads/2024/07/Ai.webp",
    description: "Explore how artificial intelligence is transforming software development, boosting productivity and innovation.",
    link: "/ReadMoreAIDevelopment"
  },
];

const Section_L = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const navigate = useNavigate();

  const updateItemsPerView = () => {
    if (window.innerWidth < 768) {
      setItemsPerView(1);
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2);
    } else {
      setItemsPerView(3);
    }
  };

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next > blogs.length - itemsPerView ? 0 : next;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView]);

  return (
    <section className="bg-[#f9fafb] py-16 px-4 overflow-hidden">
      <div className="text-center mb-12">
        <p className="text-red-500 text-[22px] font-semibold mb-2">Blog</p>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Looking For Valuable Business Content?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-base">
          Discover the digital possibilities for your brand with our comprehensive suite of services.
        </p>
      </div>

      {/* Carousel */}
      <div className="relative overflow-hidden max-w-[1200px] mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            width: `${(blogs.length * 100) / itemsPerView}%`,
            transform: `translateX(-${(100 / blogs.length) * currentIndex}%)`,
          }}
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="m-4  "
              style={{ width: `${100 / blogs.length}%` }}
            >
              <div className="bg-white rounded-xl shadow-sm hover:shadow-blue-200 p-5 flex flex-col justify-between h-full hover:shadow-2xl transition">
                <div>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-[#1a1a1a] mb-3 leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-5">
                    {blog.description.length > 160
                      ? blog.description.slice(0, 160) + "..."
                      : blog.description}
                  </p>
                </div>
                <button
                  onClick={() => navigate(blog.link)}
                  className="bg-[#1c92ff] text-white text-sm py-3 px-6 rounded-lg hover:bg-white hover:text-blue-500 transition w-fit self-start hover:border-blue-400 hover:border-[2px]"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: blogs.length - itemsPerView + 1 }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${i === currentIndex ? "bg-blue-500 scale-110" : "bg-blue-200"
              }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Section_L;
