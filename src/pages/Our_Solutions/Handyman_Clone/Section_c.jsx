import React from 'react';

const features = [
    {
        title: 'Reporting and Analytics',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-2.png',
        points: [
            'Gain insights into your business overall performance with targeted reports.',
            'Track metrics like job of entirety rates and patron delight.',
            'Analyze tendencies in services like handyman gutter repair close to me and electrical handyman near me.',
        ],
    },
    {
        title: 'Mobile Accessibility',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-3.png',
        points: [
            'Manage your commercial enterprise on-the-go together with our cell-pleasant software program.',
            'Features for area technicians to replace activity statuses and talk with the office.',
            'Convenient for tracking services like handyman roof restore and handyman gutter cleansing near me.',
        ],
    },
    {
        title: 'Inventory Management',
        image: 'https://webblazesofttech.com/wp-content/uploads/2024/10/image-4.png',
        points: [
            'Keep track of equipment and substances.',
            'Monitor inventory tiers to avoid delays in carrier shipping.',
            'Manage inventory for duties like handyman window installer and handyman vinyl siding repair.',
        ],
    },
];

const Section_c = () => {
    return (
        <section className="bg-white py-20 px-6">
            <div className="max-w-[1200px] mx-auto space-y-24">
                {features.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                            } items-center gap-10`}
                    >
                        <div className="lg:w-1/2 w-full">
                            <h3 className="text-xl font-semibold text-black mb-4">
                                {item.title}
                            </h3>
                            <ul className="list-disc list-inside text-sm text-gray-800 space-y-2">
                                {item.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="lg:w-1/2 w-full flex justify-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl max-w-[360px] w-full object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section_c;
