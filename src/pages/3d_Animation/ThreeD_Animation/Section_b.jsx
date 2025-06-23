import React from "react";

const Section_b = () => {
    return (
        <div className="bg-white px-6 md:px-16 py-28">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#12162b] leading-snug mb-6">
                      Experience the Best 3D <br />
                       Animation Services at <br />
                       Webblaze
                    </h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Welcome to Webblaze, your closing excursion spot for pinnacle-notch 3D animation services. As a leading internet improvement employer, we awareness on growing lovely animations that supply your thoughts to life. Whether you’re searching out video animation, activity animation, or youtube video animation, we have were given the statistics to satisfy your desires. Explore our complete kind of services and discover how we will let you gain your animation desires.
                    </p>
                </div>

                <div className="flex-1 relative">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/image.png"
                        alt="Jewelry 3D Design"
                        className="w-full max-w-[550px] rounded-[120px] object-cover"
                    />

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
