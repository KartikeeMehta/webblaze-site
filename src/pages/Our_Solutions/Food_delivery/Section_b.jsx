import React from "react";

const WhyChooseWebblaze = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Why Choose Webblaze?
      </h2>

      {/* Top 3 cards */}
      <div className="flex flex-wrap justify-center gap-6 mb-10">
        {/* Card 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[280px] max-w-[370px]">
          <div className="text-red-600 text-4xl mb-4">🕑</div>
          <h3 className="text-xl font-semibold mb-3">
            Expertise in Delivery App Development
          </h3>
          <p className="text-gray-700 text-sm">
            Webblaze is well known for its expertise in shipping app development. Our crew of skilled builders is adept at developing a food ordering app that is not most effective user-best however additionally filled with functions that enhance the person enjoy. Whether you want to assemble a food delivery app or create a food app like Zomato, we’ve got the capabilities and enjoy to deliver.


          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[280px] max-w-[370px]">
          <div className="text-blue-600 text-4xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-3">
            Custom Solutions for Every Need
          </h3>
          <p className="text-gray-700 text-sm">
            We recognize that each commercial enterprise is specific, and so are its requirements. Our custom meals delivery software development services make certain that your app is customized in your precise desires. From creating a food ordering app to growing a grocery transport app, we offer a sizeable variety of offerings to cater to great segments of the meals transport enterprise.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 flex-1 min-w-[280px] max-w-[370px]">
          <div className="text-yellow-500 text-4xl mb-4">💰</div>
          <h3 className="text-xl font-semibold mb-3">
            Competitive Development Costs
          </h3>
          <p className="text-gray-700 text-sm">
            One of the number one worries for any commercial enterprise in search of to increase a meals shipping app is the fee. At Webblaze, we provide competitive meals transport app improvement price with out compromising on great. Whether you are attempting to broaden a shipping app or create a meals ordering app, we provide value-effective answers that in shape your price variety.
          </p>
        </div>
      </div>

      {/* Bottom Row: Image and 4th Card */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Illustration Image */}
        <div className="w-full lg:w-2/3">
          <img
            src="https://webblazesofttech.com/wp-content/uploads/2024/10/image-3066.png" // replace this path
            alt="Delivery Illustration"
            className="rounded-lg shadow-md w-full h-auto"
          />
        </div>

        {/* 4th Card */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white shadow-md rounded-lg p-6 h-full">
            <div className="text-red-600 text-4xl mb-4">🧱</div>
            <h3 className="text-xl font-semibold mb-3">
              Advanced Technology Stack
            </h3>
            <p className="text-gray-700 text-sm">
              We leverage the modern-day technology to build your app. From Android Studio meals ordering app improvement to React Native food delivery app introduction, our builders are proficient inside the usage of advanced equipment and frameworks. This ensures that your app is not simplest strong but additionally scalable and future-proof.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseWebblaze;
