import React from 'react';

const Section_d = () => {
  return (
    <div className="flex justify-center px-4 py-16">

      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-6">
        
        {/* Card 1 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Hotel-Channel-Manager-Software.webp" // replace with actual image path
            alt="Factors Influencing the Cost"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Hotel Channel Manager Software</h3>
            <p className="text-gray-700 text-md">
              Managing a couple of reserving channels may be a complex undertaking. Our motel channel manager software program simplifies this technique by means of integrating all your booking channels into one platform. This guarantees real-time updates and avoids overbooking, offering a continuing enjoy for both your staff and visitors.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/Free-Trial-and-Affordable-Pricing.webp" // replace with actual image path
            alt="Affordable Solutions"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Free Trial and Affordable Pricing</h3>
            <p className="text-gray-700 text-md">
              At Webblaze, we believe in presenting fee for money. That’s why we offer a loose trial of our motel control software program, permitting you to revel in the advantages firsthand. Additionally, our pricing plans are competitive and designed to healthy companies of all sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_d;
