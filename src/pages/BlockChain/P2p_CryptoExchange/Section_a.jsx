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
                       Develop Your <span className="text-red-500"> Crypto Exchange </span> with Webblaze

                    </h2>
                    <p className="mt-6 text-gray-700 text-base md:text-sm leading-relaxed">
                        In the ever-evolving crypto market, the demand for sturdy crypto change development offerings has skyrocketed. At Webblaze, a premiere net development corporation, we concentrate on growing top-notch cryptocurrency change platforms tailor-made to fulfill the dynamic desires of the virtual asset exchange industry. Whether you’re aiming to build a current buying and selling platform or a user-pleasant crypto app, our expert crew is right here to show your vision into fact.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                        Contact Us
                    </button>
                </div>

                <div className="flex-1">
                    <img
                        src={
                            "https://webblazesofttech.com/wp-content/uploads/2025/02/woman-s-hand-giving-bitcoin-coin-another-woman_3_11zon-scaled.jpg"
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
