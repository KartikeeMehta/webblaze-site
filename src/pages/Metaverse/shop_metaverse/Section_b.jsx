import React from "react";

function Section_b() {
  return (
    <div className="w-full flex justify-center py-16 bg-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/medium-shot-woman-experiencing-virtual-reality-2048x1365.jpg" // Replace with your actual image
            alt="Metaverse Shopping"
            className="rounded-2xl border-4 border-blue-500 max-w-[500px] w-full object-cover"
            style={{ minWidth: 320, minHeight: 320, background: "#eee" }}
          />
        </div>
        {/* Right: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            The Future of Shopping:
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-[#f75c5c] mb-4">
            Metaverse Shopping
          </h3>
          <p className="text-gray-700 mb-6">
            The concept of shopping within the metaverse isn’t only a trend but
            a big shift in how clients have interaction with brands and
            products. Imagine a unbroken combo of bodily and virtual worlds
            wherein customers can browse, strive, and purchase merchandise in a
            completely immersive virtual surroundings. At Webblaze, we focus on
            metaverse shopping and are devoted to constructing sophisticated
            metaverse purchasing platforms that cater to the needs of present
            day retail.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section_b;
