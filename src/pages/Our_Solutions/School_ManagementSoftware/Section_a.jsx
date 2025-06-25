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
                    <h1 className="text-white text-3xl md:text-4xl font-extrabold mb-4 leading-tight drop-shadow">
                        School Management Software with the Aid of Webblaze
                    </h1>
                    <h2 className="text-white text-2xl md:text-4xl font-bold mb-2 leading-tight drop-shadow">
                        Transforming Education with Comprehensive School Management Software
                    </h2>
                    <p className="text-white text-base md:text-lg drop-shadow max-w-lg">
                        In the contemporary academic landscape, efficient school control is critical. Webblaze, a main internet improvement company, gives a ultra-modern faculty control software program that simplifies administrative responsibilities, enhances verbal exchange, and improves normal faculty operations. Our software integrates seamlessly with diverse instructional wishes, making it an vital tool for faculties, faculties, and universities.
                    </p>
                    <button className="mt-8 bg-[#297CFF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            Get In Touch
          </button>
                </div>
                {/* Right: Empty, image is in background */}
              
            </div>
        </div>
    );
}

export default Section_a;
