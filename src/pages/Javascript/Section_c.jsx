

import React from 'react';

const services = [
    {
        title: 'Custom JavaScript Development',
        points: [
            'Tailored solutions that align with your business objectives.',
            'Advanced JavaScript programming for interactive and responsive web applications.',
        ],
    },
    {
        title: 'Node.js Development',
        points: [
            'High-performance server-side applications.',
            'Scalable solutions for real-time data processing.',
        ],
    },
    {
        title: 'JavaScript Frameworks and Libraries',
        points: [
            'Expertise in React, Angular, Vue.js, and more.',
            'Integration of libraries like D3.js and p5.js for enhanced functionality.',
        ],
    },
    {
        title: 'JavaScript Consulting',
        points: [
            'Strategic advice and technical guidance.',
            'Optimization of existing JavaScript codebases.',
        ],
    },
];

const Section_c = () => {
    return (
        <div className="bg-[#f9fbfc] py-20 px-6">
            <div className="max-w-[1000px]  mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Comprehensive JavaScript Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-6 shadow-sm border-b-4 border-blue-400 hover:shadow-md transition"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                            <ul className="list-decimal list-inside text-gray-600 space-y-1">
                                {service.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Section_c;
