import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    name: "UI/Ux Design",
    color: "bg-blue-100",
    icon: "/uixIcon.png",
    bgColor: "#26ACF0",
    path: "/Uiux_app",
    summary: "UI/UX design focuses on enhancing the way users interact with digital products and services. UI (User Interface) design deals with the visual elements, such as layouts, colors, and typography.",
  },
  {
    name: "Branding",
    color: "bg-red-100",
    icon: "/brandIcon.png",
    path: "/Branding",
    bgColor: "#E95353",
    summary: "We build strong and memorable brand identities through unique logos, compelling visuals, and strategic messaging that resonate with your audience and distinguish your business.",
  },
  {
    name: "E-Commerce",
    color: "bg-yellow-100",
    bgColor: "#E7DE02",
     path: "/E_comm",
    icon: "/E-CommerceIcon.png",
    summary: "Webblaze delivers robust and scalable e-commerce platforms equipped with advanced features like secure payment gateways, intuitive product catalogs, and personalized shopping experiences.",
  },
  {
    name: "Development",
    color: "bg-yellow-100",
    bgColor: "#E7DE02",
    path: "/Word_Press",
    icon: "/devlopmetIcon.png",
    summary: "Our expert developers craft bespoke web and mobile solutions, integrating cutting-edge technologies to meet your unique business needs and deliver exceptional performance.",
  },
  {
    name: "App Development",
    color: "bg-red-100",
    bgColor: "#E95353",
    path: "/Shopify_app",
    icon: "/DigitalMarketing.png",
    summary: "Our skilled app developers design tailored mobile applications, blending innovation and functionality to enhance user engagement, streamline operations, and drive measurable growth for your business.",
  },
  {
    name: "Digital Marketing",
    color: "bg-red-100",
    bgColor: "#E95353",
    path: "/Seo",
    icon: "DigitalMarketing.png",
    summary: "From social media management to targeted campaigns, Webblaze ensures your business reaches the right audience through innovative strategies that drive traffic and maximize conversions.",
  },
];

function ServiceCard({ name, color, icon, summary, bgColor, path }) {
  const [hovered, setHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false)
  const navigate = useNavigate();

  return (
    <div
      className="relative flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-8 transition-transform duration-300 hover:-translate-y-2 cursor-pointer min-h-[300px] overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Card content */}
      <div
        className={`flex flex-col items-center justify-center transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"
          }`}
      >
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 text-3xl ${color}`}
        >
          <img src={icon}></img>
        </div>
        <div className="text-xl font-bold text-gray-800 mb-2 text-center">
          {name}
        </div>
      </div>
      {/* Animated overlay summary */}
      <div
        className={`absolute left-0 bottom-0 w-full h-full flex flex-col  justify-center border-2 border-blue-500 bg-white rounded-2xl shadow-lg text-gray-700  px-6 py-8 transition-all duration-500 ease-in-out
    ${hovered ? "translate-y-0 opacity-100 pointer-events-auto" : "translate-y-full opacity-0 pointer-events-none"}
  `}
        style={{ zIndex: 10 }}
      >
        <h3 className="text-xl font-bold text-gray-800 mb-3">{name}</h3>
        <p className="text-gray-600 mb-6 font-normal text-base">
          {summary}
        </p>
        <Button
          onClick={() => navigate(path)}
          variant="outline"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            backgroundColor: btnHover ? "white" : bgColor,
            color: btnHover ? bgColor : "white",
            borderColor: bgColor,
            borderWidth: "2px",

          }}
          className="rounded-xl transition duration-300 p-5 w-[60%]"
        >
          Explore More
        </Button>
      </div>


    </div>
  );
}

function Section_c() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-8">
        <div className="text-red-400 text-2xl font-medium mb-2">Services</div>
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What’s Brewing In The Webblaze Softtech?
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover the digital possibilities for your brand with our
          comprehensive suite of services.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((service) => (
          <ServiceCard key={service.name} {...service} />
        ))}
      </div>
    </section>
  );
}

export default Section_c;
