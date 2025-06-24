import React from "react";


const Section_h = () => {
  return (
    <section className="bg-[#0f1227] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover py-20 px-6 md:px-12">
      <div className="text-center text-white mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold">Building an Uber Clone</h2>
        <p className="text-xl font-bold mt-2">Step-through-Step Development</p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden border-l-[8px] border-[#ef4a4e] shadow-md">
          <img
            src={'https://webblazesofttech.com/wp-content/uploads/2024/10/Building-an-Uber-Clone-1.webp'}
            alt="Uber Clone Steps"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bullet Points */}
        <div className="text-white text-lg leading-relaxed">
          <p className="mb-6">Building an Uber clone entails numerous steps:</p>
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Requirement Analysis:</strong> Understanding your precise desires and dreams..
            </li>
            <li>
              <strong>Design and Prototyping:</strong> Creating a consumer-pleasant interface and format
            </li>
            <li>
              <strong>Development:</strong> Coding the app the use of the current generation.
            </li>
            <li>
              <strong>Testing:</strong> Ensuring the app is computer virus-free and runs effortlessly.
            </li>
            <li>
              <strong>Deployment:</strong> Launching the app at the favored platforms.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Section_h;
