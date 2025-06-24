import React from "react";

const techStack = [
  {
    icon: '/b2bGrowthIcon.png',
    title: "Flutter",
    description: "For move-platform compatibility and a continuing individual revel in.",
  },
  {
    icon: '/b2bGrowthIcon.png',
    title: "React Native",
    description: "To construct excessive-performance mobile apps with a local look and experience.",
  },
  {
     icon: '/b2bGrowthIcon.png',
    title: "Firebase",
    description: "For dependable and stable backend services.",
  },
  {
    icon: '/b2bGrowthIcon.png',
    title: "Node.Js",
    description: "For green server-side operations.",
  },
];

const Section_d = () => {
  return (
    <section className="bg-[#15192c] text-white px-4 md:px-16 py-20">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          Technical Excellence
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-5xl mx-auto">
          <div className="text-center lg:text-right max-w-lg">
            <h3 className="text-lg font-medium mb-4">Source Code Availability</h3>
            <p className="text-sm leading-relaxed text-gray-300">
              We provide the entire Uber clone app deliver code, presenting you with complete control over your app. Our code is easy, nicely-documented, and clean to understand, making future upgrades hassle-free. Whether you want an Uber clone flutter or Uber clone react native, we've got the knowledge to supply.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border-l-4 border-blue-500">
            <img src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Technical-Excellence-1.webp'} alt="Code" className="w-full max-w-md" />
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Technology Stack</h2>
        <p className="text-sm text-gray-300 max-w-2xl mx-auto">
          Our Uber clone app is built the usage of the modern-day era to make sure excessive usual overall performance and scalability. Key generation embody:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-[#0e1323] border border-blue-500 rounded-xl p-6 text-center shadow-md"
          >
            <img
              src={tech.icon}
              alt={tech.title}
              className="w-10 h-10 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
            <p className="text-sm text-gray-300">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_d;
