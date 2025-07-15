import React from 'react';
import { useNavigate } from 'react-router-dom';

const Section_f = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f9f9f9] py-16 px-4">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Image - shown first on mobile */}
        <div className="order-1 md:order-2 flex justify-center">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2025/01/Group-1171275938.png"
            alt="COO"
            className="w-full max-w-[350px] rounded-[30px] object-cover"
          />
        </div>

        {/* Text Content - always left-aligned */}
        <div className="order-2 md:order-1 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            Words from <span className="text-red-500">Our</span>{' '}
            <span className="text-blue-500">COO</span>
          </h2>

          <p className="text-gray-600 text-base mb-4 leading-relaxed max-w-xl">
            Webblaze is not just about delivering services; it’s about building
            relationships and creating value. Our team’s dedication, expertise,
            and customer-focused approach set us apart in this ever-evolving
            digital landscape. We aim to provide solutions that empower
            businesses to grow and innovate sustainably. At Webblaze, every
            project is a step towards driving meaningful impact for our clients.
          </p>

          <p className="font-semibold text-gray-800 mb-6 max-w-xl">
            – Ms. Nisha Vashisht, COO of Webblaze
          </p>

          <button
            onClick={() => navigate('/Contact_Us')}
            className="bg-blue-500 text-white border-2 border-blue-500 hover:bg-white hover:text-blue-500 px-6 py-2 rounded-lg transition"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section_f;
