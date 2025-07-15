import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
      const navigate = useNavigate()

  return (
    <div
      className="py-16 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
        <div className="flex-1">
          <p className="text-2xl md:text-md font-bold leading-snug text-red-500 mb-4">
            Webblaze: Your Ultimate NFT Marketplace Solution.
          </p>

          <h2 className="text-2xl md:text-4xl font-bold leading-snug text-black">
            Discover the World of{" "}
            <span className="text-red-500">NFTs</span>
          </h2>

          <h2 className="text-2xl md:text-3xl font-bold leading-snug text-red-500">
            with Webblaze
          </h2>

          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            Welcome to Webblaze, a main web development company that specialize in growing contemporary NFT marketplaces. Our expertise in growing robust NFT structures ensures that your marketplace stands out in the competitive virtual landscape. With our innovative solutions, you can release a feature-rich NFT market that caters to artists, collectors, and investors international.
          </p>

          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] 
             text-white border-2 border-[#1C92FF] hover:border-[#1C92FF] 
             font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
          >
            Contact Us
          </button>
        </div>


        <div className="flex-1">
          <img
            src={
              "https://webblazesofttech.com/wp-content/uploads/2025/02/iguana-with-neon-lights_1_11zon-scaled.jpg"
            }
            alt="WordPress Developer"
            className="rounded-3xl w-full h-[350px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_a;
