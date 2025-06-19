
import React from "react";

const services = [
    {
        title: "MongoDB and Mongoose",
        description:
            "Integrating MongoDB with Node.Js for efficient facts managing."},
    {
        title: "Express.Js",
        description:
            "Developing sturdy APIs and web applications the usage of the Express.Js framework.",
    },
    {
        title: "AWS and DigitalOcean Integration",
        description:
            "Deploying Node.Js packages on cloud structures like AWS and DigitalOcean.",
    },
    {
        title: "Authentication and Authorization",
        description:
            "Implementing steady authentication using frameworks like Auth0 and JWT tokens."},


    {
        title: "Performance Monitoring",
        description:
            "Utilizing tools like New Relic and Prometheus for performance monitoring and optimization.",
    },
   
];

const Section_d = () => {
    return (
        <div className="w-full mx-auto bg-[#0F172A] text-white py-16 px-6 sm:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
               Our Expertise in Node.Js Ecosystem
            </h2>
            <p className="text-sm text-blue-100 w-full md:w-[60%] mx-auto text-center mb-10 leading-relaxed">
                At Webblaze, our crew of Node.Js builders is properly-versed inside the whole atmosphere:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-[#172B47] border border-blue-500/20 rounded-xl p-6 shadow-md hover:shadow-blue-600/30 transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-sm text-blue-100 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Section_d;
