import React from "react";

const benefits = [
    {
        title: "Environmental Impact",
        img: "https://webblazesofttech.com/wp-content/uploads/2024/10/Environmental-Impact.webp",
        points: [
            "Carpooling reduces the range of vehicles on the road, reducing emissions and contributing to a puriﬁer surroundings.",
            "Our carpooling car sharing alternatives promote eco-friendly transportation.",
        ],
    },
    {
        title: "Cost Savings",
        img: "https://webblazesofttech.com/wp-content/uploads/2024/10/Cost-Savings.webp",
        points: [
            "Carpooling facilitates reduce commuting prices, with shared costs for gasoline and maintenance.",
            "Features like carpool prices and car pool scheme make it a cost-effective choice for day by day commutes and long-distance travel.",
        ],
    },
    {
        title: "Convenience and Flexibility",
        img: "https://webblazesofttech.com/wp-content/uploads/2024/10/Convenience-and-Flexibility.webp",
        points: [
            "With our carpool apps, users can without difficulty discover carpool rides, whether or not they need to carpool now or agenda a trip for later.",
            "Flexible alternatives like carpool rideshare web sites and carpool driving make it handy for users to manage their journey plans.",
        ],
    },
    {
        title: "Enhanced Social Connections",
        img: "https://webblazesofttech.com/wp-content/uploads/2024/10/Enhanced-Social-Connections.webp",
        points: [
            "Carpooling fosters social interactions and connections, making commutes more enjoyable.",
            "Our app supports features like carpool with friends and carpool chat groups.",
        ],
    },
    {
        title: "Reliable and Safe",
        img: "https://webblazesofttech.com/wp-content/uploads/2024/10/Reliable-and-Safe.webp",
        points: [
            "Webblaze guarantees that each one carpool rides are dependable and secure, with functions like carpool select up and carpool pass ensuring a steady enjoy.",
            "Our carpool mobility answers additionally encompass emergency help features.",
        ],
    },
];

const Section_d = () => {
    return (
        <section className="bg-white py-20 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-semibold text-[#0d152e] mb-14">
                    Benefits of Car Pooling with Webblaze
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 justify-items-center">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md p-4 max-w-[320px] w-full text-left"
                        >
                            <img
                                src={benefit.img}
                                alt={benefit.title}
                                className="rounded-md w-full h-48 object-cover mb-4"
                            />
                            <h3 className="font-semibold text-[15px] text-[#0d152e] mb-2">
                                {benefit.title}
                            </h3>
                            <ol className="list-decimal list-inside text-sm text-gray-800 space-y-1">
                                {benefit.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section_d;
