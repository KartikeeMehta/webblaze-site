

import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const projects = [
    "NiaWigs", "3rdrailclothing", "Anubis-Canada",
    "Schuhbidu", "Garden city Renovations", "The Buisness Insights",
    "Ogslimes", "My Book Venture", "Monika Kuzman",
    "Agile Tech Labs", "Dev By Jannis", "Brooklyn Archival",
    "Bad Bikers", "FORTACE Group", "TMS Longisland",
    "Interflora", "RERG", "Maximus Procurement"
];

const Section_b = () => {
    return (
        <div className="bg-white py-20 px-4">
            <div className="max-w-[1200px] mx-auto text-center px-5">
                <p className="text-red-500 font-medium mb-2">About Us</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
                    Showcasing Our Creative Excellence
                </h2>
                <p className="text-gray-500 max-w-3xl mx-auto mb-12">
                    Explore our portfolio to see a curated selection of our most innovative and successful projects.
                    From concept to execution, each piece demonstrates our commitment to quality and creativity.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group flex items-center justify-center bg-[#f9fbfe] text-slate-900 font-semibold text-lg py-3 px-5 rounded-xl shadow hover:shadow-md transition hover:text-blue-500"
                        >
                            <FaThumbsUp className="mr-2 text-slate-700 transition group-hover:text-blue-500" />
                            <span className="transition group-hover:text-blue-500">{project}</span>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_b;
