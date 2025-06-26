import React from "react";

const Section_b = () => {
    return (
        <div className="bg-white px-6 md:px-16 py-28">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#12162b] leading-snug mb-6">
                        Bringing Your Jewelry <br />
                        Visions to Life with 3D <br />
                        Design
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Welcome to Webblaze, your ultimate vacation spot for modern-day 3D
                        rings layout offerings. At Webblaze, we specialize in transforming
                        your particular ideas into beautiful 3D fashions, ensuring your
                        rings sticks out within the marketplace. Whether you’re an person
                        seeking to create custom pieces or a enterprise aiming to extend
                        your product line, our expert designers and ultra-modern technology
                        will bring your vision to life. Explore our comprehensive services
                        and see how we can turn your desires into fact.
                    </p>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/Bringing-your-Jewelry-Vision.webp"
                        alt="Jewelry 3D Design"
                        className="w-full max-w-[550px] rounded-[120px] object-cover"
                    />

                    {/* Decorative Dots */}
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/Mask-group-1.svg"
                        alt="Dots"
                        className="absolute -bottom-20 left-1/1 transform -translate-x-1/2 w-20 md:w-28"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_b;
