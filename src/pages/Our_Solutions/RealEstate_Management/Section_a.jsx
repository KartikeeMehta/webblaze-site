import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_a = () => {
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
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
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
