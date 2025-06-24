import React from "react";

const Section_e = () => {
  return (
    <section className="bg-[#121726] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] text-white py-16 md:py-24 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start gap-12">
        
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="rounded-2xl overflow-hidden border-4 border-[#E03C31] shadow-xl w-full max-w-md">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/10/various-education.jpeg"
              alt="Educational Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            Comprehensive Solutions for Various <br /> Educational Institutions
          </h2>

          <ul className="space-y-5 text-sm md:text-base text-gray-300 leading-relaxed list-disc pl-5">
            <li>
              <strong className="text-white">Free Student Management System:</strong>{" "}
              For establishments with finances constraints, Webblaze gives a free scholar management gadget that includes essential capabilities for handling pupil information, attendance, and educational statistics. This device guarantees that each one faculties, no matter price range, can advantage from cutting-edge guide control tools.
            </li>
            <li>
              <strong className="text-white">Education Management Software:</strong>{" "}
              Our schooling management software is designed to satisfy the numerous desires of educational institutions, from K-12 schools to better schooling. This complete solution consists of functions for administration, student control, and academic monitoring, ensuring that schools can operate efficiently and efficaciously.
            </li>
            <li>
              <strong className="text-white">Fee Management System:</strong>{" "}
              Managing school costs may be a complicated mission. Our price management device simplifies fee series, monitoring, and reporting. This system ensures that colleges can manage their finances correctly, presenting transparency and duty in economic operations.
            </li>
          </ul>

          <button className="mt-8 bg-[#297CFF] hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-md transition duration-300">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_e;
