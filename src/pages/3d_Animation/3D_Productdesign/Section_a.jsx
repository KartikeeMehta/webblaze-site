import React from "react";

const Section_a = () => {
    return (
        <div className="bg-white px-6 md:px-16 py-28">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#12162b] leading-snug mb-6">
                       3D Product Design Services by means of Webblaze
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                        Welcome to Webblaze, your trusted companion for innovative 3D product design offerings. At Webblaze, a highest quality net development organization, we specialise in reworking your thoughts into beautiful 3D models that convey your vision to lifestyles. Whether you’re searching out 3D product modeling, 3D photograph layout, or advanced drafting software program solutions, our group of specialists is here that will help you acquire your dreams.
                    </p>
                </div>

                <div className="flex-1 relative">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/3d-Product-Design.webp"
                        alt="Jewelry 3D Design"
                        className="w-full max-w-[550px] rounded-[120px] object-cover"
                    />

                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/Mask-group-1.svg"
                        alt="Dots"
                        className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 w-20 md:w-28"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_a;
