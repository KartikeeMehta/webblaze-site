import React from 'react';
import girlPhone from '../../assets/girlPhone.png'; 
const Section_j = () => {
    return (
        <div className="bg-gray-100 py-16 px-4 flex justify-center">
            <div className="max-w-7xl w-full bg-white rounded-lg overflow-hidden flex flex-col md:flex-row items-center shadow-lg">
                <div className="bg-[#11182B] text-white p-8 md:w-1/2 w-full rounded-lg md:rounded-r-none">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6 leading-relaxed">
                        Start your <br />
                        entrepreneurial journey <br />
                        with WebBlaze today!
                    </h2>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-md transition duration-200">
                        Get In Touch
                    </button>
                </div>

                <div className="md:w-1/2 w-full">
                    <img
                        src={girlPhone}
                        alt="Woman on phone"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Section_j;
