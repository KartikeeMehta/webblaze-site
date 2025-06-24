import React from "react";
const Section_e = () => {
  return (
    <section className="bg-white py-20 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#0d152e]">
          Specialized Clones
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="overflow-hidden rounded-md mb-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Uber-Eats-Clone.webp'}
              alt="Uber Eats Clone"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#0d152e] mb-3">Uber Eats Clone</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Expand your enterprise with our Uber Eats clone app. It includes functions
            like order monitoring, price gateway integration, and a person-friendly
            interface. Our ubereats clone script is exceptional for launching a food
            transport provider.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="overflow-hidden rounded-md mb-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Uber-Freight-Clone.webp'}
              alt="Uber Freight Clone"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#0d152e] mb-3">Uber Freight Clone</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            For logistics organizations, our Uber freight clone gives entire solutions
            for freight control. It includes real-time monitoring, load matching, and
            automated invoicing.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="overflow-hidden rounded-md mb-6">
            <img
              src={'https://webblazesofttech.com/wp-content/uploads/2024/10/White-Label-Solutions.webp'}
              alt="White Label Solutions"
              className="w-full h-auto object-cover"
            />
          </div>
          <h3 className="text-xl font-bold text-[#0d152e] mb-3">White Label Solutions</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Our white label Uber clone permits you to logo the app as your private.
            With our Uber clone software software, you may customise every difficulty
            of the app, from the brand to the shade scheme, making sure it aligns
            with your emblem identification.
          </p>
        </div>
         </div>
      </div>
    </section>
  );
};

export default Section_e;
