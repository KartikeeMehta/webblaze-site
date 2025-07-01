import React from 'react';

const Section_a = () => {
    return (
        <>
            <section className="relative min-h-[500px] flex items-center justify-center text-center text-white px-4">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://webblazesofttech.com/wp-content/uploads/2024/07/about-page-banner.webp')`,
                    }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-60" />
                </div>


                <div className="relative z-10 max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
                    <p className="md:text-sm leading-relaxed text-gray-100 text-base font-normal">
                        Explore our collection of case studies to see how we’ve helped clients overcome challenges and<br /> achieve remarkable results.          </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
                    <svg
                        className="relative block w-[calc(100%+1.3px)] h-[80px]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 500 80"
                        preserveAspectRatio="none"
                    >
                    </svg>
                </div>
            </section>
        </>
    );
};

export default Section_a;
