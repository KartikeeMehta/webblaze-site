import React from "react";

const Section_a = () => {
    return (
        <section
            className="relative h-[45vh] bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage: "url('https://webblazesofttech.com/wp-content/uploads/2024/08/smm-banner.webp')",
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4">
                <div className="text-center text-white max-w-3xl">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">
                        Enhance Your Online Presence with Webblaze
                    </h1>
                    <p className="text-sm md:text-base">
                        At Webblaze, we understand that branding is a vital commercial enterprise strategy for online enterprise success. Our professional crew is dedicated to creating company emblems that replicate your emblem’s identity and values. With the growing competition within the virtual marketplace, having a completely unique and memorable brand photo is vital for standing out and attracting clients.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Section_a;
