

import React from "react";

const Section_g = () => {
  return (
    <section className="relative bg-white py-20">
      <img
        src={'https://webblazesofttech.com/wp-content/uploads/2024/07/plane.svg'}
        alt="Paper Plane Icon"
        className="absolute top-6 right-6 w-15 h-15 md:w-20 md:h-20"
      />

      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Measuring Success and Continuous Improvement
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/08/Growth-Marketing-Analytics.webp'}
              alt="Growth Marketing Analytics"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-black mb-3">
                Growth Marketing Analytics
              </h3>
              <p className="text-gray-700 text-md">
                At Webblaze, we consider in continuous development. Our growth
                advertising analytics offerings provide distinctive insights
                into marketing campaign performance, patron behavior, and ROI.
                We use those insights to refine our techniques and acquire
                higher results.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/08/Performance-Growth-Marketing.webp'}
              alt="Performance Growth Marketing"
              className="w-full h-64 object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-2xl font-semibold text-black mb-3">
                Performance Growth Marketing
              </h3>
              <p className="text-gray-700 text-md">
                Our performance increase advertising approach makes a speciality
                of maximizing ROI and reaching measurable outcomes. We set clean
                KPIs, reveal development, and make facts-pushed adjustments to
                make certain your marketing efforts deliver most desirable
                effects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_g;
