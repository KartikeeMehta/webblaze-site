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
        title: "Comprehensive Carpool Services",
        icon: <FaShoppingCart className="text-white text-lg" />,
        color: "bg-[#5cbefb]",
        bg: "bg-[#e3f1fe]",
        description:
            "Our automobile pooling apps are tailored to provide seamless carpool offerings, whether for daily commutes or intercity tour. With our consumer-friendly carpool platform, finding a carpool near you is just a few taps away. Webblaze’s answers include features like carpool rideshare, company carpooling, and carpool transportation offerings.",
    },
    {
        title: "Healthcare",
        icon: <FaHospital className="text-white text-lg" />,
        color: "bg-[#f87171]",
        bg: "bg-[#fde8e8]",
        description:
            "For healthcare carriers, we layout web websites that are not handiest informative however additionally stable and compliant with industry regulations. Our digital sanatorium solutions take affected individual engagement to the subsequent diploma.",
    },
    {
        title: "Education",
        icon: <FaGraduationCap className="text-white text-lg" />,
        color: "bg-[#facc15]",
        bg: "bg-[#fef9c3]",
        description:
            "Educational establishments can benefit from our custom net format offerings. We create interactive and appealing net web sites that decorate the gaining knowledge of revel in.",
    },
    {
        title: "Real Estate",
        icon: <FaBuilding className="text-white text-lg" />,
        color: "bg-[#facc15]",
        bg: "bg-[#fef9c3]",
        description:
            "Real property specialists can rely on us for net websites that show off houses inside the high-quality feasible mild. Our designs assist attract ability consumers and renters.",
    },
    {
        title: "Hospitality",
        icon: <FaHotel className="text-white text-lg" />,
        color: "bg-[#38bdf8]",
        bg: "bg-[#e0f2fe]",
        description:
            "From inns to consuming places, our net format services help companies inside the hospitality employer entice and preserve customers via visually attractive and purposeful internet websites.",
    },
];

const Section_b = () => {
    return (
        <div className="bg-white text-gray-800 px-4 py-16 max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-3xl font-bold mb-2">
                    Why Choose Webblaze for Your Car Pooling App?
                </h2>

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

export default Section_b;

