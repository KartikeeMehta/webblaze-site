import React from 'react';

const Section_d = () => {
  return (
    <section className="bg-[#0B1021] bg-[url('/background-lines.webp')] bg-cover bg-center py-16 px-4 text-white">
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-snug">
          Why Choose Webblaze for Graphic Design?
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-12 max-w-3xl mx-auto">
          At Webblaze, our commitment to creative excellence and customer satisfaction makes us a top choice for graphic
          design services. Here’s why clients trust us:
        </p>

        {/* Responsive Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-blue-400 bg-opacity-20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Creative Excellence</h3>
            <p className="text-sm sm:text-base">
              Our graphic designers are artists at heart, with a keen eye for aesthetics and a passion for innovation.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-blue-400 bg-opacity-20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Tailored Solutions</h3>
            <p className="text-sm sm:text-base">
              We offer customized graphic design services that cater to your specific needs and preferences.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-blue-400 bg-opacity-20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Timely Delivery</h3>
            <p className="text-sm sm:text-base">
              We understand the importance of deadlines and ensure that your projects are completed on time.
            </p>
          </div>

          {/* Card 4 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-blue-400 bg-opacity-20 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">Affordable Pricing</h3>
            <p className="text-sm sm:text-base">
              Quality graphic design doesn’t have to break the bank. We offer competitive pricing to fit your budget.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_d;
