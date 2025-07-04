import React from "react";

const Section_a = () => {
  return (
    <section className="bg-white px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="max-w-[1000px] w-full mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug sm:leading-tight mb-10 text-center sm:text-left">
          Build Your Own Metaverse eCommerce Store – <br />
          The Future of Online Shopping
        </h1>

        <div className="flex justify-center mb-10">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/06/online-shopping-concept-scaled.jpg"
            alt="Metaverse Shopping"
            className="rounded-xl w-full object-cover"
          />
        </div>

        <div className="text-gray-700 text-base sm:text-lg leading-relaxed mx-auto text-left">
          <p className="mb-4">
            In today’s digital world, shopping is no longer limited to visiting malls or scrolling through 2D websites.
            The future is here and it’s called the metaverse. This new virtual world is changing how people shop online.
            Now, customers can walk through a digital shop, check out products in 3D and even try them on using avatars
            all without leaving their homes.
          </p>

          <p className="mb-4">
            This is what we call a metaverse eCommerce store. And if you are a business owner or a startup looking to
            stay ahead in this fast-growing digital age, now is the perfect time to set up your own virtual store in
            the metaverse.
          </p>

          <p>
            Learn more:{" "}
            <a
              href="/Shop_metaverse"
              className="text-pink-600 hover:underline font-medium"
            >
              Shopping in a Metaverse
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section_a;
