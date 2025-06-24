import React from "react";

function Section_a() {
    return (
        <div
            className="relative w-full min-h-[510px] flex items-center justify-center py-12"
            style={{
                backgroundImage:
                    "url('https://webblazesofttech.com/wp-content/uploads/2025/02/back-school-university-concept-portrait-cheerful-young-handsome-male-student-wearing-backpack_6_11zon-scaled.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
            }}
        >
        
            <div className="relative w-full max-w-[1200px] flex items-center px-4 mx-auto">
                {/* Left: Text */}
              <div className="flex-1" />

                <div className="max-w-xl text-left">
                    <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 leading-tight drop-shadow">
                        Transforming Retail
                    </h2>
                    <h1 className="text-white text-2xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow">
                        Dive into the Future with <br className="hidden md:block" />
                        Shopping Metaverse <br className="hidden md:block" />
                        Development
                    </h1>
                    <p className="text-white text-base md:text-lg drop-shadow max-w-lg">
                        In an era wherein virtual transformation is redefining the retail
                        panorama, Webblaze is at the leading edge of making contemporary
                        buying metaverse solutions. Our comprehensive offerings are designed
                        to revolutionize your retail approach through integrating digital
                        fact into your enterprise version. Embrace the future with us and
                        redefine how customers enjoy buying within the metaverse.
                    </p>
                </div>
                {/* Right: Empty, image is in background */}
              
            </div>
        </div>
    );
}

export default Section_a;
