
import React from 'react';

const data = [
    {
        title: 'Responsive Web Design for Modern Users',
        desc: `In current digital age, having a responsive internet website online is crucial. At Webblaze, we make sure your web site seems and features flawlessly on all gadgets, along side computers, drugs, and smartphones. Our responsive internet design services are geared towards presenting an maximum appropriate viewing enjoy on your visitors, no matter what device they use.`,
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/responsive-web-design.webp',
        border: 'border-yellow-400',
    },
    {
        title: 'Custom Web Design Solutions',
        desc: `Every business agency is particular, and so are its internet layout desires. Our custom internet layout offerings are tailored to reflect your logo’s character and meet your precise dreams. From coloration schemes and typography to layout and capability, we paintings carefully with you to create a internet site that sticks out from the opposition.`,
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/custom-web-design.webp',
        border: 'border-red-400',
    },
    {
        title: 'Web Design Company Near Me',
        desc: `Looking for a web layout enterprise near you? Webblaze is located in India, serving customers globally. Our group is just a name away, prepared to speak approximately your venture and offer the remarkable net layout solutions.`,
        address: `Visit us at Cyber Cube, C201-202, Phase 8B, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160055.`,
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/08/web-design-company.webp',
        border: 'border-yellow-400',
    },
];

const Section_e = () => {
    return (
        <section className="py-16 bg-[#f9f9fb] px-4 relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto  space-y-16">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className={`flex flex-col md:flex-row items-center gap-10 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-shrink-0">
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-64 h-64 object-cover rounded-full border-4 ${item.border} p-1`}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
                            {item.address && <p className="text-sm font-semibold text-gray-900">{item.address}</p>}
                        </div>
                    </div>
                ))}
            </div>

            <img
                src="/images/paper-plane.svg"
                alt=""
                className="absolute top-[20%] right-10 w-20 opacity-70 hidden sm:block"
            />
            <img
                src="/images/dots.svg"
                alt=""
                className="absolute bottom-10 right-10 w-10 opacity-30 hidden sm:block"
            />
        </section>
    );
};

export default Section_e;
