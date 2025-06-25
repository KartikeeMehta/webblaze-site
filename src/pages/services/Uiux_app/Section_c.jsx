import React from 'react';
import { FaUser, FaEye, FaHandshake } from 'react-icons/fa';

const Section_c = () => {
  return (
    <section className="bg-[#1b1e2f] text-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto text-center space-y-8 px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Our Approach to UI and UX Design
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          At Webblaze, we observe a whole approach to UI and UX design. Our
          manner starts off evolved with know-how your industrial agency desires
          and audience. We conduct thorough research and analysis to collect
          insights that inform our format approach. Our crew of professional UI
          designers and UX developers then collaborate to create designs that
          aren’t only visually appealing but additionally quite sensible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-blue-400 mb-4">
              <FaUser />
            </div>
            <h3 className="text-lg font-semibold mb-2">User-Centric Design</h3>
            <p className="text-gray-300 text-sm">
              Our person experience layout gadget is centered around the desires
              and alternatives of your customers. We employ man or woman studies
              and sort out strategies to accumulate comments and make
              records-driven layout choices. This ensures that the final product
              is adapted to offer the great viable revel in for your users.
            </p>
          </div>

          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-red-400 mb-4">
              <FaEye />
            </div>
            <h3 className="text-lg font-semibold mb-2">Visual Design Excellence</h3>
            <p className="text-gray-300 text-sm">
              Our UI designers excel in growing visually lovely interfaces that
              align in conjunction with your logo identity. We focus on factors
              like coloration schemes, typography, and layout to create a cohesive
              and attractive format. Whether it’s a web utility format or a
              cellular UI design, our organization guarantees that each detail is
              meticulously crafted.
            </p>
          </div>

          <div className="border border-gray-600 rounded-xl p-6 text-left hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div className="text-4xl text-yellow-400 mb-4">
              <FaHandshake />
            </div>
            <h3 className="text-lg font-semibold mb-2">Seamless Interaction Design</h3>
            <p className="text-gray-300 text-sm">
              Our person experience layout gadget is centered around the desires
              and alternatives of your customers. We employ man or woman studies
              and sort out strategies to accumulate comments and make
              records-driven layout choices. This ensures that the final product
              is adapted to offer the great viable revel in for your users.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Section_c;
