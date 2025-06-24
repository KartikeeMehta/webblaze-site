import React from "react";

const Section_b = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-16 px-4">
      <div className="max-w-[1200px] mx-auto bg-white rounded-xl shadow-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 px-5">
        {/* Left Side Content */}
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e293b] mb-4">
            Introduction to OnlyFans Clone
          </h2>
          <p className="text-[#4b5563] text-base md:text-lg mb-6 leading-relaxed">
            Webbaze, a main internet development corporation, introduces the closing social media app – the OnlyFans clone. This platform is designed to emulate the famous OnlyFans enjoy, providing customers the potential to create and proportion one of a kind content, manipulate subscriptions, and construct a committed following. Perfect for influencers, content creators, and agencies seeking to monetize their online presence, our OnlyFans clone is a strong solution to your digital wishes.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition duration-300">
            Get In Touch
          </button>
        </div>

        {/* Right Side Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/11/Introduction-to-OnlyFans-Clone.webp"
            alt="OnlyFans Clone Preview"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Section_b;
