
import React from 'react';
import word_PressBackImage from "../../../assets/word_PressBackImage.png"

const Section_c = () => {
    return (
        <div className="relative bg-[#0F172A] text-white py-20 px-6 sm:px-10">
            <div
                className="absolute inset-0 bg-cover opacity-5 pointer-events-none"
                style={{ backgroundImage: `url(${word_PressBackImage})` }}
            ></div>            <div className="text-center max-w-4xl mx-auto relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    Search Engine Optimization Tools <br className="hidden sm:block" /> and Techniques
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-16 relative z-10 text-center">
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Google Search Engine Marketing and Analytics
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        We use Google search engine marketing first-rate practices and gear like Google Analytics
                        to monitor your website’s overall performance, music person behavior, and make records-pushed
                        choices for continuous development. <br />
                        Our offerings consist of putting in and optimizing Google My Business to beautify your local presence.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Search Engine Optimization Content Writing and Copywriting
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        Quality content is king. Our search engine optimization content material writing offerings
                        ensure that your internet site has splendid, keyword-rich content material that appeals to
                        each search engines like Google and readers. <br />
                        We specialise in search engine optimization copywriting that engages visitors and encourages conversions.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-center relative z-10">
                <h3 className="text-lg font-semibold mb-4">
                    Technical Search Engine Marketing
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                    Technical search engine marketing is crucial for website optimization.
                    We make certain your web page is rapid, cellular-friendly, and easy to navigate,
                    improving usual consumer revel in and search engine ratings. <br />
                    We offer comprehensive search engine marketing audits to discover and
                    attach technical troubles that can be hindering your website’s performance.
                </p>
            </div>
        </div>
    );
};

export default Section_c;
