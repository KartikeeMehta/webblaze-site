import React from 'react';

const Section_c = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 font-inter">
            <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <img
                        src="https://webblazesofttech.com/wp-content/uploads/2024/09/Our-3-D-Product-Design-Process.webp"
                        alt="Process Icon"
                        className="w-16 h-16 sm:w-20 sm:h-20 mb-4 rounded-lg"
                        onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/CCCCCC/000000?text=Error"; }}
                    />
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 text-center">
                        Our 3D Product Design Process
                    </h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-8 lg:gap-16">
                    <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
                        <img
                            src="https://webblazesofttech.com/wp-content/uploads/2024/09/Our-3-D-Product-Design-Process-2.webp"
                            alt="3D Design Illustration"
                            className="w-full max-w-md h-auto rounded-xl"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/500x400/CCCCCC/000000?text=Error"; }}
                        />
                    </div>

                    <div className="w-full lg:w-1/2 relative p-4">
                        <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-2 ml-4">
                            <div className="absolute bg-red-500 w-1 h-1/4" style={{ top: '10%', left: 'calc(100% - 2px)' }}></div>
                            <div className="absolute w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-red-500 border-b-8 border-b-transparent" style={{ top: 'calc(10% + 25%)', left: 'calc(100% - 2px)' }}></div>

                            <div className="absolute bg-red-500 w-1 h-1/4" style={{ top: '35%', left: 'calc(100% - 2px)' }}></div>
                            <div className="absolute w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-red-500 border-b-8 border-b-transparent" style={{ top: 'calc(35% + 25%)', left: 'calc(100% - 2px)' }}></div>

                            <div className="absolute bg-red-500 w-1 h-1/4" style={{ top: '60%', left: 'calc(100% - 2px)' }}></div>
                            <div className="absolute w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-red-500 border-b-8 border-b-transparent" style={{ top: 'calc(60% + 25%)', left: 'calc(100% - 2px)' }}></div>
                        </div>


                        <div className="space-y-6 sm:space-y-8">
                            <div className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Initial Consultation</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Discuss your mission necessities and targets.</li>
                                    <li>Identify the scope of labor and precise layout rushes.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Concept Development</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Create preliminary sketches and drafts using Autodesk Fusion 3D and different equipment.</li>
                                    <li>Develop 3D prototypes to visualize the design.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Design Refinement</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Use SolidWorks Premium and Fusion 365 for distinct modeling.</li>
                                    <li>Refine the design based totally on feedback and make sure it meets all.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-100 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <h3 className="text-xl font-semibold text-gray-700 mb-2">Finalization and Delivery</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-1">
                                    <li>Render first-rate 3D fashions using 3DS Max Interior Design and different rendering software program.</li>
                                    <li>Deliver the very last product design inside the desired layout.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section_c;
