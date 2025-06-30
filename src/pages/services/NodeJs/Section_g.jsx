
import React from 'react';

const Section_g = () => {
    return (
        <section className='bg-gray-100'>
        <div className=" max-w-[1200px] mx-auto py-16 px-6 sm:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 leading-snug mb-4">
                        Why Node.Js for <br /> Your Project?
                    </h2>
                    <p className="text-gray-700 text-md leading-8">
                        Node.Js offers several benefits that make it the preferred choice for modern application development:
                        <br />

                        – Scalability: Easily scale packages horizontally by using adding extra nodes to the prevailing system. <br />
                        – Performance: Utilizes a non-blocking off I/O version, making it light-weight and green for coping with concurrent requests. <br />
                        – Community Support: A big atmosphere of libraries and modules maintained via a passionate community of developers. <br />
                        – Cost-Effective: Reduced development time and preservation charges due to its single-language structure. <br />
                        – Flexibility: Suitable for constructing both server-aspect and purchaser-side applications, imparting versatility in mission implementation.


                    </p>
                </div>

                <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2025/02/close-up-image-programer-working-his-desk-office_11zon-scaled.jpg"
                        alt="Node.Js developer"
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </div>
        </section>
    );
};

export default Section_g;
