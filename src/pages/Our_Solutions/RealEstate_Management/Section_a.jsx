import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";
import { useNavigate } from "react-router-dom";

const Section_a = () => {
      const navigate=useNavigate()

    return (
        <div
            className="py-16 bg-no-repeat bg-cover bg-center"
            style={{
                backgroundImage: `url(${bgImage})`,
            }}
        >
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10 rounded-3xl p-8 ">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug text-black ">
                        Streamline Your {" "}
                        <span className=" text-red-500">
                            Property  <br />Management
                        </span>
                        {" "} with Webblaze
                    </h2>
                    <p className="mt-5 text-gray-700 text-base md:text-sm leading-relaxed">
                        At Webblaze, we recognize the challenges that actual property experts face in handling properties effectively. Our Real Estate Management Software is designed to simplify these demanding situations, supplying an all-in-one solution for assets control,whether or not you manipulate a unmarried condo assets or a massive industrial portfolio.                                              </p>
                    <button
                        onClick={() => navigate("/Contact_Us")}
                        className="bg-[#1C92FF] hover:bg-white mt-8 hover:text-[#1C92FF] text-white border-2 hover:border-[#1C92FF] font-medium px-8 py-3 rounded-xl shadow-md transition duration-300"
                    >
                        Contact Us
                    </button>
                </div>

                <div className="flex-1">
                    <img
                        src={
                            "https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275779.webp"
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
