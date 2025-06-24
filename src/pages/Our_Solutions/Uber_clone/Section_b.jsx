import React from "react";
const   Section_b = () => {
  return (
    <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
          Why Choose Our Uber Clone App?
        </h2>
        <p className="text-xl font-medium text-gray-700">
          Comprehensive Features
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="rounded-xl overflow-hidden border-2 border-blue-500 shadow-lg max-w-md">
          <img
            src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Why-Choose-Our-Uber-Clone-App-2.webp'}
            alt="Uber App Screenshot"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="text-left max-w-xl text-gray-800">
          <p className="mb-6">
            Our Uber clone app comes with advanced features that ensure a
            smooth and inexperienced revel in for both drivers and riders. Key
            competencies consist of:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Real-time Tracking:</strong> Users can music their
              experience in actual-time
            </li>
            <li>
              <strong>Multiple Payment Options:</strong> Integrate various price
              gateways for ease of transaction.
            </li>
            <li>
              <strong>In-app Chat:</strong> Enables verbal exchange amongst
              driving force and rider.
            </li>
            <li>
              <strong>Rating and Review System:</strong> Allows clients to fee
              and evaluation their rides.
            </li>
            <li>
              <strong>Ride History:</strong> Users can view their beyond rides
              and receipts.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section_b;
