import React from 'react';

const Section_f = () => {
  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-5">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Words from <span className="text-red-500">Our</span>{' '}
            <span className="text-blue-500">COO</span>
          </h2>
          <p className="text-gray-600 text-base mb-6">
            Webblaze is not just about delivering services; it’s about building
            relationships and creating value. Our team’s dedication, expertise,
            and customer-focused approach set us apart in this ever-evolving
            digital landscape. We aim to provide solutions that empower
            businesses to grow and innovate sustainably. At Webblaze, every
            project is a step towards driving meaningful impact for our clients.
          </p>
          <p className="font-semibold text-gray-800 mb-6">
            – Ms. Nisha Vashisht, COO of Webblaze
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded shadow-md transition duration-200">
            Contact Us
          </button>
        </div>

        <div className="relative">
          <div className="relative z-10">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2025/01/Group-1171275938.png'}
              alt="COO"
              className="rounded-[30px] w-full max-w-sm md:max-w-md object-cover"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-full h-full rounded-[30px] border-4 border-red-400 z-0"></div>
          <div className="absolute -bottom-2 -left-2 w-full h-full rounded-[30px] border-b-4 border-blue-400 z-0"></div>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-10 bg-yellow-400 rounded z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
