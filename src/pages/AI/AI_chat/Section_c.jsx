import React from 'react';

const Section_b = () => {
  return (
    <div className="bg-[#0B1021] bg-[url('/background-lines.webp')] bg-cover bg-center py-16 px-6 md:px-12 text-white">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 underline">
          Improve Business Efficiency
        </h2>

        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl w-full sm:w-[48%] md:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Improve-Business-Efficiency.png"
              alt="Automated Customer Support"
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-black mb-2 text-center">
                Automated Customer Support
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-center">
                Using chatbots helps automate repetitive tasks, freeing your staff to focus on more complex issues.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl w-full sm:w-[48%] md:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Seamless-Integration.png"
              alt="Seamless Integration"
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-black mb-2 text-center">Seamless Integration</h3>
              <p className="text-sm md:text-base text-gray-700 text-center">
                Easily integrate chatbots into your website with minimal disruption to existing operations.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl w-full sm:w-[48%] md:w-[30%]">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Improve-Business-Efficiency.png"
              alt="Cost-Effective Solution"
              className="rounded-t-xl w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl text-black mb-2 text-center">Cost-Effective Solution</h3>
              <p className="text-sm md:text-base text-gray-700 text-center">
                A free chatbot can be a budget-friendly way to reduce customer support costs for small businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_b;
