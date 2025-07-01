import React from "react";
import {
    FaBriefcase,
    FaMapMarkerAlt,
    FaMoneyBillWave,
} from "react-icons/fa";

const jobs = [
    {
        title: "PHP Developer",
        experience: "1-2",
        location: "Mohali, Punjab",
        salary: "15k-50k",
    },
    {
        title: "WordPress Developer",
        experience: "1-2",
        location: "Mohali, Punjab",
        salary: "15k-50k",
    },
    {
        title: "Shopify Developer",
        experience: "1-2",
        location: "Mohali, Punjab",
        salary: "20k-25k",
    },
    {
        title: "BDE",
        experience: "1-2",
        location: "Mohali, Punjab",
        salary: "15k-50k",
    },
];

const Section_b = () => {
    return (
        <div className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                        Are You Ready to{" "}
                        <span className="text-red-500 font-bold">Join Our Team?</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {jobs.map((job, idx) => (
                        <div
                            key={idx}
                            className="bg-white rounded-2xl shadow-md hover:shadow-blue-200 transition p-6 text-left border border-transparent hover:border-blue-100"
                        >
                            <h3 className="text-lg font-bold text-slate-900 mb-4">
                                {job.title}
                            </h3>
                            <ul className="text-sm text-slate-700 space-y-2 mb-6">
                                <li className="flex items-center gap-2">
                                    <FaBriefcase />
                                    {job.experience} year{job.experience !== "1" ? "s" : ""}
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMapMarkerAlt />
                                    {job.location}
                                </li>
                                <li className="flex items-center gap-2">
                                    <FaMoneyBillWave />
                                    {job.salary}
                                </li>
                            </ul>
                            <button className="bg-blue-500 text-white font-medium px-5 py-2 rounded-xl shadow-md  hover:border-blue-600 border-[2px] hover:bg-white hover:text-blue-600">
                                Read More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_b;
