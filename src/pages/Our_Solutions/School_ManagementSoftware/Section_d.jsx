import React from "react";

const benefits = [
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42645.webp",
        title: "Best CRM for Schools",
        desc: "Effective verbal exchange with parents and students is essential for faculty fulfillment. Our exceptional CRM for schools offers a complete solution for coping with communications, tracking inquiries, and preserving relationships with stakeholders. This feature guarantees that faculties can interact with their network successfully and provide well timed updates and statistics.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42657.webp",
        title: "Asset Management",
        desc: "Managing school resources successfully is critical for operational achievement. Our asset control software for colleges enables music and manipulate college belongings, ensuring that assets are applied efficiently and maintained well. This feature supports the efficient allocation of school resources, lowering waste and improving universal management.",
    },
    {
        image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Rectangle-42658.webp",
        title: "Incident Management",
        desc: "Handling incidents and emergencies successfully is essential for preserving a safe college surroundings. Our incident management software gives gear for reporting, tracking, and resolving incidents, making sure that schools can reply directly and accurately to any scenario.",
    },
];

const Section_d = () => {
    return (
        <section className="bg-gray-50 py-16 px-4 md:px-10">
            <div className="max-w-[1200px] mx-auto text-center px-5">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                    Enhancing School Operations with Advanced Technology
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-sm rounded overflow-hidden text-left hover:shadow-md transition-all duration-300"
                        >
                            <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_d;
