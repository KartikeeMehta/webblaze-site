import React from 'react';

const Section_d = () => {
  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center text-white py-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Training Approach</h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Our courses are designed with the aid of enterprise experts to equip you with practical skills in Linux system
            management. Whether you are interested in Linux server control or becoming a certified administrator,
            our training programs cover all essential components.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">Linux Foundation CKA Certification</h3>
            <p className="text-gray-300">
              Dive deep into Kubernetes management with our specialised training.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">Red Hat Certified System Administrator (RHCSA)</h3>
            <p className="text-gray-300">
              Gain hands-on experience in Red Hat Enterprise Linux management.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-full sm:w-[48%] lg:w-[30%] bg-[#122044] rounded-xl p-6 border border-blue-700 shadow-md">
            <h3 className="text-xl font-bold mb-2">Linux Foundation Certified System Administrator (LFCS)</h3>
            <p className="text-gray-300">
              Learn essential Linux skills for effective system management.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_d;
