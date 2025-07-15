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
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug text-black">
                        Transform Your Handyman <br />  Business with Webblaze's {" "}
                        <br />
                        <span className="text-red-500">
                            Handyman Software
                        </span>
                    </h2>
                    <p className="text-lg mt-5 text-gray-700 md:text-sm leading-relaxed">
                        Running a handyman commercial enterprise involves juggling numerous duties, from customer scheduling to invoicing. Streamlining these approaches can substantially decorate performance and patron pleasure. At Webblaze, we focus on growing complete handyman software program answers tailored to fulfill the precise needs of your business. Our software integrates the modern day functions to help you manipulate your operations seamlessly and develop your business results easily.                         </p>
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
                            "https://webblazesofttech.com/wp-content/uploads/2024/10/Group-1171275779.png"
                        }
                        alt="WordPress Developer"
                        className="rounded-3xl w-full h-[550px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_a;
