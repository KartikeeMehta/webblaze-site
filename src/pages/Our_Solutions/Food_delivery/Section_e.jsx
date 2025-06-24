import React from 'react';

const CostSection = () => {
  return (
    <section>
      <h1 className='text-4xl text-black text-center font-bold pt-5 pb-10 m-auto'>Cost to Develop a Food Delivery App</h1>
    <div className="flex justify-center px-4">

      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full gap-6">
        
        {/* Card 1 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-55-1024x680.webp" // replace with actual image path
            alt="Factors Influencing the Cost"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Factors Influencing the Cost</h3>
            <p className="text-gray-700 text-md">
              The value of developing a meals delivery app can range based on severa factors, which include the complexity of the app, the capabilities included, and the era stack used. At Webblaze, we offer apparent pricing and offer targeted estimates to help you understand the investment required.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 bg-white rounded-2xl shadow-md overflow-hidden">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-56-1024x682.webp" // replace with actual image path
            alt="Affordable Solutions"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Affordable Solutions</h3>
            <p className="text-gray-700 text-md">
              Despite the high satisfactory of our services, we offer lower priced solutions that make certain you get the first-rate charge to your money. Whether you need to build an app like Zomato or growth a custom solution, we offer rate-effective options.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CostSection;
