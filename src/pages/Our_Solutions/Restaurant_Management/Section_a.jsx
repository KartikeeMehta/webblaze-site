import React from "react";

function Section_a() {
    return (
        <div className="w-full flex justify-center py-16 bg-white">
            <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
                <div className="flex-shrink-0">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2025/02/smartphone-with-hand-holding-noodles_4_11zon-scaled.jpg" 
                        alt="Metaverse Shopping"
                        className="rounded-2xl border-4 border-blue-500 max-w-[500px] w-full object-cover"
                        style={{ minWidth: 320, minHeight: 320, background: "#eee" }}
                    />
                </div>
                <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Operations with 
                      <span className="text-2xl md:text-3xl font-bold text-[#f75c5c] mb-4"> Webblaze's Restaurant Management </span>Software
                    </h2>
                 
                    <p className="text-gray-700 mb-6">
                        Running a a success restaurant demands green manipulate over multiple regions, consisting of inventory, reservations, and more. At Webblaze, we understand these challenges and have developed complete eating place control software program designed to satisfy the numerous desires of today’s foodservice industry.
                    </p>
                    <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Section_a;
