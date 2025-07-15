import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
    const navigate =useNavigate()
    return (
        <div
            className="py-16 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-bold leading-snug text-black">
                        Your Ultimate <span className="text-red-500">SEO</span> Services Provider
                    </h2>
                    <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
                        Welcome to Webblaze, your cross-to net development company focusing on Vue.Js development offerings. Vue.Js is a revolutionary JavaScript framework used to create dynamic and excessive-performing web packages. Whether you are looking for a single-page application or a complex company-degree solution, Webblaze has the knowledge to supply top-notch results. Our crew of seasoned builders harnesses the electricity of Vue.Js to build scalable, maintainable, and green web packages that meet your business desires.
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
                            "https://webblazesofttech.com/wp-content/uploads/2025/02/man-is-working-computer-with-graph-screen_2_11zon-scaled.jpg"
                        }
                        alt="WordPress Developer"
                        className="rounded-3xl w-full max-h-[420px] object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_a;
