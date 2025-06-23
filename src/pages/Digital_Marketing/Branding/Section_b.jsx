import React from "react";

const Section_a = () => {
    return (
        <div className="bg-[#333] text-white py-16 px-50">
            <div className="max-w-[1200px]  mx-auto flex flex-col md:flex-row items-center justify-between gap-10  ">
                <div className="max-w-xl">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Elevate Your Digital Presence with
                        <br />
                        Webblaze's 3D Avatar Services.
                    </h1>
                    <h2 className="text-xl font-semibold mb-4">
                        Unleash the Power of 3D Avatars.
                    </h2>
                    <p className="text-base leading-relaxed text-gray-300">
                        In today's digital age, creating a dynamic online presence is
                        critical. Webblaze, a leading net development corporation, offers
                        modern-day 3D avatar introduction offerings. Our understanding spans
                        numerous industries, providing personalized metaverse avatars,
                        digital avatars, and immersive 3D studies that captivate your target
                        audience and drive engagement.
                    </p>
                </div>

                <div className="relative flex justify-center items-end gap-4">
                    <div className="absolute -top-10 -z-10 w-[280px] h-[280px] bg-blue-500 rounded-[45%] blur-md opacity-80"></div>
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/3d-avatar-boy-character-white-background_959342-242-removebg-preview-1.png"
                        alt="3D Avatar Jumping"
                        className="w-[120px] md:w-[120px] object-contain"
                    />
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/456c6c08f2-removebg-preview-1.png"
                        alt="3D Avatar Standing"
                        className="w-[120px] md:w-[120px] object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_a;
