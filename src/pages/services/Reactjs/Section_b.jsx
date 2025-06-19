import React from 'react';

const Section_b = () => {
    return (
        <section className="bg-white max-w-[1200px] mx-auto py-20  md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="relative w-full md:w-1/2">
                    {/* Yellow stripe on the left only */}
                    <div className="bg-yellow-400 w-3 h-full absolute top-0 left-0 z-0 rounded-tl-3xl rounded-bl-3xl"></div>

                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
                        alt="Expert Developer"
                        className="relative z-10 w-full h-auto rounded-tr-3xl rounded-br-3xl"
                    />
                </div>

                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-4"> Why Choose <br /> React.Js?
                    </h2>
                    <p className="text-gray-700 mb-4 text-base">
                        React.Js, recognized for its aspect-primarily based architecture and virtual DOM, gives unparalleled advantages for present day net development. Whether you are seeking to enhance consumer experience, enhance overall performance, or scale your software resultseasily, React.Js is the framework of preference for high-appearing net packages.
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Section_b;
