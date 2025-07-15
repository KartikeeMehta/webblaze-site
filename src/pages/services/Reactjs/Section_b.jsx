import React from 'react';

const Section_b = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 md:px-12">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">
                
                {/* Left Image Section */}
                <div className="relative w-full md:w-1/2 flex-shrink-0">
                    {/* Yellow stripe only on image side */}
                    <div className="bg-yellow-400 w-3 h-full absolute top-0 left-0 z-0 rounded-tl-3xl rounded-bl-3xl" />

                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
                        alt="Expert Developer"
                        className="relative z-10 w-full h-auto rounded-tr-3xl rounded-br-3xl object-cover"
                    />
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                        Why Choose <br /> React.Js?
                    </h2>
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        React.Js, recognized for its component-based architecture and virtual DOM,
                        offers unparalleled advantages for modern web development. Whether you're
                        looking to enhance user experience, improve performance, or scale your
                        application effortlessly, React.Js is the framework of choice for
                        high-performing web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section_b;
