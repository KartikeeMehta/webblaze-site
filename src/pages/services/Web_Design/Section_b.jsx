import React from 'react';

const Section_b = () => {
    return (
        <section className="bg-[#f8f9fb] py-16 sm:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-10 lg:gap-16">

                {/* Left Section */}
                <div className="w-full lg:w-1/2">
                    {/* Main Image with left border */}
                    <div className="relative rounded-2xl overflow-hidden shadow-md">
                        <div className="absolute left-0 top-0 h-full w-[6px] bg-yellow-400 z-10 rounded-l-2xl"></div>
                        <img
                            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
                            alt="Designer"
                            className="w-full h-auto object-cover relative z-0 rounded-2xl"
                        />
                    </div>
                    <div className='flex flex-col items-center w-[80%] m-auto justify-center gap-4'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 w-full">

                            <div className="bg-white shadow-md h-16 rounded-xl flex items-center ">
                                <div className="bg-red-500 text-white font-semibold w-16 h-full flex items-center justify-center text-sm rounded-md">
                                    5k+
                                </div>
                                <div className="ml-3 text-sm font-medium text-gray-800">
                                    Awesome Clients
                                </div>
                            </div>

                            <div className="bg-white shadow-md h-16 rounded-xl flex items-center ">
                                <div className="bg-red-500 text-white font-semibold w-16 h-full flex items-center justify-center text-sm rounded-md">
                                    12k+
                                </div>
                                <div className="ml-3 text-sm font-medium text-gray-800">
                                    Years in Business
                                </div>
                            </div>

                        </div>


                        <div className="bg-white shadow-md h-16 rounded-xl flex items-center  sm:col-span-2 w-[100%] sm:w-[50%] mt-2">
                            <div className="bg-red-500 text-white font-semibold w-16 h-full flex items-center justify-center text-sm rounded-md">
                                500k+
                            </div>
                            <div className="ml-3 text-sm font-medium text-gray-800">
                                Projects Delivered
                            </div>

                        </div>
                    </div>


                </div>

                {/* Right Section */}
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[26px] sm:text-[32px] md:text-[36px] font-bold text-[#1e1e1e] leading-snug mb-6">
                        Comprehensive Website Design Services
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-10">
                        At Webblaze, we understand that your website is the face of your employer. Our entire website design services ensure that your web page not only looks great but also works seamlessly. From responsive layouts to custom designs, we build user-focused websites that reflect your brand and engage your audience.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden shadow-md max-w-md w-full mx-auto lg:mx-0">
                        <div className="absolute right-0 top-0 h-full w-[6px] bg-red-500 z-10 rounded-r-2xl"></div>
                        <img
                            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-1.webp"
                            alt="Code Monitor"
                            className="w-full h-auto object-cover relative z-0 rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section_b;
