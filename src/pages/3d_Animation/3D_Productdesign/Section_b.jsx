import React from "react";

const features = [
  {
    title: "Expertise in 3D Design Software",
    description:
      "Our team is gifted in using the cutting-edge layout software, such as Autodesk CAD, Autodesk Revit 2022, and Fusion 360 3D modeling. We leverage those gear to create unique and correct 3D models that meet your specs.",
    icon: "/digitalGrowth.png",
    borderColor: "border-red-400",
  },
  {
    title: "Comprehensive Product Design Services",
    description:
      "From 3D packaging design to 3D fixtures rendering, we offer a huge range of services to cater to various industries. Our expertise consists of developing 3D prototypes, 3D printed furniture, or even 3D signage design.",
    icon: "/digitalGrowth.png",
    borderColor: "border-blue-400",
  },
  {
    title: "Cutting-Edge Drafting Software",
    description:
      "We make use of pinnacle-tier drafting software program together with SolidWorks Premium and AutoCAD Mechanical 3D to ensure precision and performance in our designs. Our drafting solutions are best for creating complicated product designs and exact 3D fashions.",
     icon: "/digitalGrowth.png",
    borderColor: "border-yellow-400",
  },
  {
    title: "Advanced 3D Modeling Capabilities",
    description:
      "Our 3D designers are professional in the usage of equipment like 3DS Max Design and Adobe Substance 3D Designer. We offer excellent 3D product modeling and rendering services that bring your principles to lifestyles with stunning visuals.",
    icon: "/digitalGrowth.png",
    borderColor: "border-green-400",
  },
   {
    title: "Versatile 3D Graphic Design",
    description:
      "Whether you want 3D hoodie design, 3D container design, or 3D bottle layout, our crew can cope with it all. We create visually appealing and useful 3D designs that seize the essence of your brand and merchandise.",
    icon: "/digitalGrowth.png",
    borderColor: "border-green-400",
  },
];

const Section_b = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">
          Why Choose Webbaze for 3D Product Design?
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 text-left border-b-4 ${item.borderColor} transition hover:shadow-xl`}
            >
              <div className="flex items-start gap-4">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-12 h-12 shrink-0"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_b;
