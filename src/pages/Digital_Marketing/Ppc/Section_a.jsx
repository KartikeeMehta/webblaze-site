import React from "react";
import bgImagePpc from "../../../../public/bgImagePpc.jpg";

const Section_a = () => {
    return (
        <section
            className="relative h-[55vh] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImagePpc})`,
            }}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            <h1 className="relative z-10 text-white text-3xl md:text-5xl font-bold text-center px-4">
                Unlock Your Business Potential <br />
                with Webblaze’s PPC Services
            </h1>
        </section>
    );
};

export default Section_a;
