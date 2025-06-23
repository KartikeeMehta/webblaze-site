import React from "react";

const Section_c = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Key Features of Our Sexting Chat Bot
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Feature 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-blue-100 text-blue-900 font-semibold text-lg py-2 rounded-md mb-4">
            Real-Time Responses
          </div>
          <p className="text-gray-700 text-sm">
            Our sexting chat bot offers real-time responses, making sure that users obtain instant
            feedback all through their interactions. This capability is critical for preserving user
            interest and improving the general revel in.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-red-100 text-red-900 font-semibold text-lg py-2 rounded-md mb-4">
            Privacy and Security
          </div>
          <p className="text-gray-700 text-sm">
            At Webbaze, we prioritize user privacy and protection. Our chat bots nsfw are built
            with strong security measures to guard person information and ensure secure interactions.
            This dedication to security enables construct agree with your target audience.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <div className="bg-yellow-100 text-yellow-900 font-semibold text-lg py-2 rounded-md mb-4">
            Multi-Platform Compatibility
          </div>
          <p className="text-gray-700 text-sm">
            Our sexting chat bot may be integrated across multiple systems, including websites,
            cellular apps, and social media channels. This versatility guarantees that your users
            can get entry to the bot anyplace they’re, improving accessibility and comfort.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section_c;
