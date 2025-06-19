import React from "react";
import {
    FaShoppingCart,
    FaHospital,
    FaGraduationCap,
    FaBuilding,
    FaHotel,
} from "react-icons/fa";

const services = [
    {
        title: "E-trade",
        icon: <FaShoppingCart className="text-white text-lg" />,
        color: "bg-[#5cbefb]",
        bg: "bg-[#e3f1fe]",
        description:
            "Powering real-time inventory control and order processing structures.",
    },
    {
        title: "Healthcare",
        icon: <FaHospital className="text-white text-lg" />,
        color: "bg-[#f87171]",
        bg: "bg-[#fde8e8]",
        description:
            "Facilitating the development of telemedicine systems and patient management systems.",
    },
    {
        title: "Finance",
        icon: <FaGraduationCap className="text-white text-lg" />,
        color: "bg-[#facc15]",
        bg: "bg-[#fef9c3]",
        description:
            "Enabling the introduction of secure and scalable fintech packages for bills and transactions.",
    },
    {
        title: "Education",
        icon: <FaBuilding className="text-white text-lg" />,
        color: "bg-[#facc15]",
        bg: "bg-[#fef9c3]",
        description:
            "Building interactive e-getting to know structures with real-time collaboration functions.",
    },
    {
        title: "Entertainment",
        icon: <FaHotel className="text-white text-lg" />,
        color: "bg-[#38bdf8]",
        bg: "bg-[#e0f2fe]",
        description:
            "From inns to consuming places, our net format services help companies inside the hospitality employer entice and preserve customers via visually attractive and purposeful internet websites.",
    },
];

const Section_f = () => {
    return (
        <div className="bg-white text-gray-800 px-4 py-16 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                    Web Design Services for Various Industries
                </h2>
                <p className="text-sm md:text-base text-gray-600">
                    No rely what agency you are in, our net layout business organisation has the information to create a internet web site that meets your precise wishes. Here are some of the industries we serve
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {services.slice(0, 3).map((item, index) => (
                    <div
                        key={index}
                        className={`rounded-xl shadow-sm border border-gray-100 p-6 pb-8 relative transition hover:shadow-md`}
                    >
                        <div 
                         className={`flex items-center gap-3 mb-4 ${item.bg} rounded-md p-3`}
                     >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-md">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-b-xl"></div>
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                {services.slice(3).map((item, index) => (
                    <div
                        key={index}
                        className={`w-full md:w-[320px] rounded-xl shadow-sm border border-gray-100 p-6 pb-8 relative transition hover:shadow-md`}
                    >
                        <div
                            className={`flex items-center gap-3 mb-4 ${item.bg} rounded-md p-3`}
                        >
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full ${item.color}`}>
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-md">{item.title}</h3>
                        </div>
                        <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-400 to-blue-500 rounded-b-xl"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section_f;

