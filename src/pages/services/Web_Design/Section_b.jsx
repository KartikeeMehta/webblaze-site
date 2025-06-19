import React from 'react';

const Section_b = () => {
    return (
        <section className="bg-[#f8f9fb] py-20">
            <div className="max-w-[1240px] mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row gap-14 items-start">
                <div className="flex-1">
                    <div className="relative rounded-2xl overflow-hidden shadow-md">
                        <div className="absolute left-0 top-0 h-full w-[6px] bg-yellow-400 z-10 rounded-l-2xl"></div>
                        <img
                            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
                            alt="Designer"
                            className="rounded-2xl w-full h-auto object-cover relative z-0"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-6 w-[80%] ml-10">

                        <div className="bg-white shadow-md h-16 rounded-xl flex  items-center">
                            <div className="text-white bg-red-500 font-semibold  w-[22%] h-full rounded-md text-sm mb-1 flex  items-center justify-center">5k+</div>
                            <div className="text-sm text-gray-800 font-medium ml-3">Awesome Clients</div>
                        </div>


                        <div className="bg-white shadow-md h-16 rounded-xl flex  items-center">
            
                             <div className="text-white bg-red-500 font-semibold w-[22%] h-full rounded-md text-sm mb-1 flex  items-center justify-center">12k+</div>

                            <div className="text-sm text-gray-800 font-medium ml-3">Years in Business</div>
                        </div>

                
                         <div className="bg-white shadow-md h-16 rounded-xl flex  items-center  col-span-2 mt-1 w-[50%] ml-20">
            
                             <div className="text-white bg-red-500 font-semibold w-[22%] h-full rounded-md text-sm mb-1 flex  items-center justify-center">500k+</div>

                            <div className="text-sm text-gray-800 font-medium ml-3">Years in Business</div>
                        </div>

                    </div>
                </div>

                <div className="flex-1">
                    <h2 className="text-[28px] sm:text-[34px] lg:text-[36px] font-bold text-[#1e1e1e] mb-6 leading-snug">
                        Comprehensive Website Design Services
                    </h2>
                    <p className="text-gray-600 text-[16px] leading-[1.8] mb-10">
                        At Webblaze, we understand that your website is the face of your employer. Our entire website design services ensure that your web page not only looks great but also works seamlessly. From responsive layouts to custom designs, we build user-focused websites that reflect your brand and engage your audience.
                    </p>

                    <div className="relative rounded-2xl overflow-hidden max-w-md shadow-md">
                        <div className="absolute right-0 top-0 h-full w-[6px] bg-red-500 z-10 rounded-r-2xl"></div>
                        <img
                            src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-1.webp"
                            alt="Code Monitor"
                            className="rounded-2xl w-full h-auto object-cover relative z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section_b;
