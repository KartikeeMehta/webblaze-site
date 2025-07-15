import React from "react";

function Section_a() {
  return (
    <div
      className="relative w-full min-h-[510px] flex items-center justify-center py-12"
      style={{
        backgroundImage:
          "url('https://webblazesofttech.com/wp-content/uploads/2025/02/portrait-happy-asian-female-model-using-vr-headset-smiling-laughing-virtual-reality-glasses-standing-blue-background-1_1_11zon-scaled.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 bg-[#000000E0]"
        style={{ backgroundColor: "#000000A0" }}
      ></div>
      <div className="relative w-full max-w-[1200px] flex items-center px-4 mx-auto">
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
        <div className="flex-1" />
      </div>
    </div>
  );
}

export default Section_a;
