
import React from "react";

const services = [
    {
        title: "Custom Vue.Js Application Development",
        description:
            "We build bespoke web packages tailor-made to your commercial enterprise wishes. From preliminary session to deployment, our crew works intently with you to make sure your vision is realized.",
    },
    {
        title: "Single-Page Application (SPA) Development",
        description:
            "We specialize in growing SPAs that provide a seamless and interactive person revel in. Our SPAs are fast, responsive, and characteristic-wealthy.",
    },
    {
        title: "Vue.Js Component Development",
        description:
            "Need custom additives? We develop reusable and maintainable Vue.Js additives that beautify the capability of your applications.",
    },
    {
        title: "Vue.Js and Nuxt.Js Integration",
        description:
            "Nuxt.Js is a framework built on top of Vue.Js that permits server-facet rendering, static web page generation, and greater. We leverage Nuxt.Js to improve search engine marketing and performance.",
    },


    {
        title: "Third-Party Integration",
        description:
            "Whether it’s integrating APIs, fee gateways, or other third-birthday celebration services, we ensure seamless integration along with your Vue.Js packages.",
    },
    {
        title: "Vue.Js Migration Services",
        description:
            "Nuxt.Js is a framework built on top of Vue.Js that permits server-facet rendering, static web page generation, and greater. We leverage Nuxt.Js to improve search engine marketing and performance.",
    },
    {
        title: "Maintenance and Support​",
        description:
            "We offer ongoing upkeep and help services to keep your applications strolling easily. From trojan horse fixes to performance optimizations, we have got you covered.",
    },
];

const Section_d = () => {
    return (
        <div className="w-full mx-auto bg-[#0F172A] text-white py-16 px-6 sm:px-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Webblaze’s Vue.Js Development Services
            </h2>
            <p className="text-sm text-blue-100 w-full md:w-[60%] mx-auto text-center mb-10 leading-relaxed">
                At Webblaze, we offer a comprehensive range of Vue.Js development services tailored to your specific requirements. Our team is highly skilled in the latest technologies and follows industry best practices to deliver exceptional solutions.
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
