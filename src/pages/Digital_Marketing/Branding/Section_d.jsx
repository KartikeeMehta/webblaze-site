
import React from "react";
import bgImage from "../../../assets/word_PressBackImage.png";

const Section_d = () => {
    return (
        <section className="bg-[#1B1D2A] bg-[url('background-lines.webp')] bg-repeat py-16 px-6">
            <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
                <div className="relative">
                    <div className="absolute -bottom-3 -left-3 w-full h-full bg-yellow-400 rounded-xl z-0"></div>
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/08/Why-Choose-Webblaze-1.webp"
                        alt="Good vs Bad"
                        className="relative z-10 rounded-xl"
                    />
                </div>

                <div>
                    <h2 className="text-white text-3xl font-bold mb-6">
                        Why Choose Webblaze?
                    </h2>
                    <ul className="text-gray-300 space-y-5 text-base leading-relaxed list-disc list-inside">
                        <li>
                            <span className="font-semibold text-white">Experienced Team:</span>{" "}
                            Our team of designers and strategists has widespread revel in in growing impactful
                            branding solutions. We understand the nuances of making enterprise emblems and
                            growing a robust brand identity.
                        </li>
                        <li>
                            <span className="font-semibold text-white">Client-Centric Approach:</span>{" "}
                            At Webblaze, we prioritize our clients’ needs. We paintings intently with you to
                            recognize your imaginative and prescient and deliver branding answers that exceed your
                            expectancies. Our custom trademarks online carrier is adapted to satisfy your
                            particular necessities.
                        </li>
                        <li>
                            <span className="font-semibold text-white">Affordable Solutions:</span>{" "}
                            We accept as true with that remarkable branding need to be reachable to all
                            organizations. Our small commercial enterprise emblems carrier ensures that even
                            startups can benefit from expert branding without breaking the financial institution.
                        </li>
                        <li>
                            <span className="font-semibold text-white">Proven Track Record:</span>{" "}
                            We have a demonstrated track file of delivering a hit branding projects. Our clients
                            have seen great upgrades in their logo reputation and patron engagement after using
                            our offerings.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section_d;
