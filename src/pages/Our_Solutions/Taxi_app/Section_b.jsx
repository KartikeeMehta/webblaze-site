import React from 'react';

const Section_b = () => {
  return (
    
    <div className="flex flex-col lg:flex-row max-w-[1200px] mx-auto p-4 gap-6">
      
      {/* Left Side Image */}
      <div className="lg:w-1/2 w-full">
        <div className="h-full">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-43-2048x1705.webp"
            alt="Taxi App User"
            className="h-full w-full object-cover rounded-xl border-l-[6px] border-yellow-400"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="lg:w-1/2 w-full flex flex-col justify-center">
        <p className="text-gray-700 mb-6 text-center lg:text-left">
          Our taxi app is designed with each drivers and passengers in mind, ensuring a continuing experience from start to finish. With capabilities similar to famous apps like Uber Taxi, Lyft Taxi, and Careem Taxi, your app will be ready to address all elements of present day-day transportation.
        </p>

        <div className="space-y-4 text-left">
          <FeatureItem title="Real-Time Tracking" desc="Passengers can track their journey in real-time, similar to the Uber Taxi app and Lyft Taxi app." />
          <FeatureItem title="Easy Booking Process" desc="Users can quick ebook a experience with just a few faucets, similar to the Uber Cab app." />
          <FeatureItem title="Fare Estimation" desc="Provide accurate fare estimates in advance than booking, similar to Uber Taxi fees and Uber Limo services." />
          <FeatureItem title="Multiple Payment Options" desc="Integrate several price strategies, collectively with credit playing cards, virtual wallets, and in-app payments, similar to Uber Cab Service." />
          <FeatureItem title="Driver Ratings and Reviews" desc="Allow passengers to fee and observe drivers, making sure amazing carrier similar to Uber Taxi Driver programs." />
        </div>
      </div>
      
    </div>
  );
};

const FeatureItem = ({ title, desc }) => (
  <div className=" flex items-start gap-3">
    <span className="text-blue-600 text-2xl">✔️</span>
    <div>
      <p className="font-bold">{title}</p>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
  
);

export default Section_b;
