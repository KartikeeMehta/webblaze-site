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
                    <h2 className="text-2xl md:text-3xl font-bold leading-snug text-red-500 ">
                        Uber Clone Development  {" "}
                        <span className="text-black">
                            by<br /> using Webblaze Your Ultimate Taxi App Solution
                        </span>
                    </h2>
                    <span className="text-black text-sm font-bold">Introduction to Our Uber Clone</span>
                    <p className="mt-5 text-gray-700 text-base md:text-sm leading-relaxed">
                        Webblaze, a main web improvement organisation, gives a strong and function-rich Uber clone app to revolutionize your taxi booking industrial enterprise. Our Uber clone app, designed with the contemporary technology, offers seamless ride-hailing services. Whether you are a startup or a longtime taxi service, our Uber clone software program is your best associate to tap into the developing call for for revel in-sharing apps.                    </p>
                    <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                        Contact Us
                    </button>
                </div>

                <div className="flex-1">
                    <img
                        src={
                            "https://webblazesofttech.com/wp-content/uploads/2024/10/Uber-Clone-Development-by-using-Webblaze-Your-Ultimate-Taxi-App-Solution-2.webp"
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
