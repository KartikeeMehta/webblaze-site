import React from "react";

const Section_f = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Why Choose Webblaze?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-blue-100 text-blue-900 font-semibold text-lg py-2 rounded-md mb-4">
            Expertise in AI and Web Development
          </div>
          <p className="text-gray-700 text-sm">
            At Webblaze, we pride ourselves on our expertise in AI and web improvement, ensuring that our answers aren’t most effective revolutionary but also reliable and effective.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-red-100 text-red-900 font-semibold text-lg py-2 rounded-md mb-4">
            Proven Track Record
          </div>
          <p className="text-gray-700 text-sm">
            Our portfolio consists of a hit tasks throughout numerous industries, from growing AI-generated news to integrating the present day AI technology in commercial enterprise applications.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-yellow-100 text-yellow-900 font-semibold text-lg py-2 rounded-md mb-4">
            Comprehensive Support
          </div>
          <p className="text-gray-700 text-sm">
            From preliminary session to ongoing support, Webblaze affords complete help, making sure that your AI news anchor carrier operates easily and successfully.


          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_f;
