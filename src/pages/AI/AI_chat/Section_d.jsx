import React from "react";

const Section_i = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center">
        {/* LEFT: TEXT */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
            Industry-Specific Solutions
          </h2>
          <ul className="list-disc list-inside text-gray-800 space-y-4 text-lg leading-relaxed">
            <li>
              <strong className="text-xl">Banking:</strong>
             <> Our chatbot for banks can address
              inquiries, help with transactions, and offer financial advice,
              enhancing the patron experience and operational overall
              performance.</>
            </li>
            <li>
              <strong className="text-xl">Ecommerce:</strong> A chatbot for ecommerce websites can
              control orders, track shipments, and provide product
              recommendations, enhancing customer satisfaction and boosting
              sales.
            </li>
            <li>
              <strong className="text-xl">Real Estate:</strong> Chatbots for real estate agents can
              schedule viewings, answer property-related questions, and provide
              marketplace insights, streamlining the buying process.
            </li>
          </ul>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="bg-[#f44336] p-1 rounded-xl">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Industry-Specific-Solutions-2.png"
              alt="Industry Solutions"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_i;
