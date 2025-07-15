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
                        Webblaze {" "}
                        <span className=" text-red-500">
                            Car Pooling App
                        </span>
                        <br />Development Services
                    </h2>
                    <span className="text-black text-sm font-bold">Transform Your Commute with Webblaze’s Car Pooling App Solutions</span>
                    <p className="mt-5 text-gray-700 text-base md:text-sm leading-relaxed">
                        In cutting-edge rapid-paced international, locating green and eco-friendly commuting alternatives is vital. Webblaze, a main web improvement corporation, gives brand new vehicle pooling app development services designed to streamline and revolutionize your transportation revel in. Whether you want to carpool to work, arrange long-distance carpool rides, or be part of a carpooling outstation trip, our modern answers cater to all your carpooling wishes.                          </p>
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
                            "https://webblazesofttech.com/wp-content/uploads/2024/10/Webblaze-Car-Pooling-App-Development-Services.webp"
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
