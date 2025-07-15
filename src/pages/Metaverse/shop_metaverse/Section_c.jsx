import React from "react";
import { useNavigate } from "react-router-dom";

function Section_c() {
  const navigate = useNavigate();

  return (
    <div
      className="w-full flex justify-center py-16"
      style={{
        backgroundImage: "url('/background-lines.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#181c2b",
      }}
    >
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-stretch gap-10 px-4 mx-auto md:min-h-[450px]">
        
        {/* Left: Text Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center h-full text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Creating Immersive{" "}
            <span className="text-[#f75c5c]">Metaverse Shopping</span>{" "}
            Experiences
          </h2>
          <p className="mb-6">
            Metaverse retail solutions offer more than just an online shop. They
            offer an immersive and interactive metaverse buying experience that
            captivates and engages users like never before. Our team crafts
            metaverse virtual stores where customers can enjoy a highly interactive
            and engaging shopping journey. From metaverse ecommerce store development
            to metaverse retail spaces, our services cover everything needed to
            launch a successful virtual shopping destination.
          </p>
          <button
            onClick={() => navigate("/Contact_Us")}
            className="bg-[#1C92FF] hover:bg-white mt-4 hover:text-[#1C92FF] 
             text-white border-2 border-[#1C92FF] hover:border-[#1C92FF] 
             font-medium px-8 py-3 rounded-xl shadow-md transition duration-300 w-[200px]"
          >
            Know More
          </button>
        </div>

        {/* Right: Image Section */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/businesswoman-working-with-modern-virtual-technologies-hands-touching-screen-1-2048x1365.jpg"
            alt="Metaverse Shopping"
            className="rounded-2xl border-b-8 border-[#f75c5c] w-full max-w-[500px] h-full object-cover"
            style={{ background: "#eee" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Section_c;
