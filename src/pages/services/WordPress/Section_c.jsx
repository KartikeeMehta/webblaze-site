import React from 'react';

const Section_c = () => {
    return (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-10">

                <div className="relative w-full md:w-1/2">
                    <div className="bg-yellow-400 w-2 sm:w-3 h-full absolute top-0 left-0 z-0 rounded-tl-3xl rounded-bl-3xl" />
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Comprehensive-Website-Design-Services-3.webp"
                        alt="Expert Developer"
                        className="relative z-10 w-full h-auto rounded-tr-3xl rounded-br-3xl object-cover"
                    />
                </div>

                <div className="w-full md:w-1/2 text-left">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-4">
                        Meet Our Expert <br /> WordPress Developers
                    </h2>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base leading-relaxed">
                        Finding a professional WordPress developer can be a daunting task.
                        At Webblaze, our team of certified WordPress specialists and freelance
                        WordPress developers are here to provide top-notch solutions. Our
                        developers are highly skilled in:
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2 text-sm sm:text-base">
                        <li>PHP for WordPress development</li>
                        <li>Custom WordPress plugin and theme development</li>
                        <li>WooCommerce and e-commerce solutions</li>
                        <li>Elementor and Divi theme customization</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Section_c;
