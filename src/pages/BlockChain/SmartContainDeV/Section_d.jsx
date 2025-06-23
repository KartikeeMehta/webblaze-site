import React from "react";

const Section_d = () => {
    return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-red-500 mb-12">
            Smart Contract Consulting
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden border-l-[6px] border-yellow-400">
                <img
                    src="https://webblazesofttech.com/wp-content/uploads/2024/08/Certified-Solidity-Developer.webp"
                    alt="Solidity Developer"
                    className="w-[400px] h-auto object-cover rounded-xl"
                />
            </div>

            <div className="max-w-xl text-left">
                <h3 className="text-2xl font-semibold mb-4">Certified Solidity Developer</h3>
                <p className="text-gray-600 mb-4">
                    Our crew consists of certified Solidity builders who convey substantial enjoy and knowledge.
                </p>
                <p className="text-gray-600">
                    We offer smart agreement consulting that will help you navigate the complexities of blockchain technology.
                </p>
            </div>
        </div>

        <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/08/small-design.webp"
            className="absolute top-10 right-10 w-20 opacity-40"
            alt="dots icon"
        />
        <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg"
            className="absolute bottom-10 right-10 w-20"
            alt="paper plane"
        />
    </section>
    );
};

export default Section_d;
