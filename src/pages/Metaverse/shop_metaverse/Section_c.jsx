import React from "react";

function Section_c() {
  return (
    <div
      className="w-full flex justify-center py-16"
      style={{
        backgroundImage: "url('public/background-lines.webp')", // Replace with your actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#181c2b",
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center gap-10 px-4 mx-auto">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start justify-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Creating Immersive{" "}
            <span className="text-[#f75c5c]">Metaverse Shopping</span>{" "}
            Experiences
          </h2>
          <p className="text-white mb-6">
            Metaverse retail solutions offer more than just an online shop. They
            offer an immersive and interactive metaverse buying enjoy that
            captivates and engages users like by no means earlier than. Our team
            crafts metaverse digital shops in which customers can revel in a
            exceedingly interactive and engaging buying adventure. From
            metaverse ecommerce save development to metaverse retail shops, our
            offerings cover all aspects had to installation a a success virtual
            shopping area.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-200">
            Know More
          </button>
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0">
          <img
            src="https://img.freepik.com/free-photo/woman-wearing-virtual-reality-goggles-interacting-with-graphs-digital-interface_53876-104179.jpg" // Replace with your actual image
            alt="Metaverse Shopping"
            className="rounded-2xl border-b-8 border-[#f75c5c] max-w-[500px] w-full object-cover"
            style={{ minWidth: 320, minHeight: 320, background: "#eee" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section_c;
