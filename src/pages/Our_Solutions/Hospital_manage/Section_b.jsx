import React from 'react';

const Section_b = () => {
  return (
    <section className='bg-gray-50'>
    <div className=" max-w-[1200px] mx-auto px-4 py-16 space-y-20">
      {/* Row 1: Image Left, Text Right */}
      <div className=" flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-yellow-300 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/hospital1.jpeg"
              alt="Hospital Management"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Comprehensive Hospital Management System
          </h2>
          <p className="text-gray-700 text-lg">
            Our health center control gadget software encompasses diverse modules to cater to each aspect of clinic operations. From affected person management and electronic clinical report software program to health center inventory control software, our machine is built to deal with all of it. The integration guarantees that patient facts is securely stored and effortlessly accessible.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left, Image Right */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">
            Advanced Hospital Software Systems
          </h2>
          <p className="text-gray-700 text-lg">
            Our advanced hospital systems offer real-time analytics, intuitive dashboards, and seamless integration across departments. This ensures efficiency, accuracy, and improved patient care at every level of operation.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="rounded-full overflow-hidden border-4 border-red-400 w-80 h-80">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/Advanced-Hospital-Software-Systems.jpeg"
              alt="Advanced Hospital Systems"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Section_b;
