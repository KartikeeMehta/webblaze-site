import React from "react";

const Section_c = () => {
  return (
    <div className="bg-[#0f1125] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-no-repeat bg-center py-24 px-6 md:px-20 text-white">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-20">
          Advanced CAD Jewelry Design
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">
              Custom 3D Printed Jewelry
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-300 leading-relaxed">
              <li>
                With the brand new 3D printing era, we create bespoke portions
                tailored on your specifications. From complicated 3D revealed
                rings designs to personalised 3D monogram necklaces, our
                offerings cater to a wide range of custom earrings needs.
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/Custom-3-d-Printed-Jewelry.webp"
              alt="Custom 3D Printed Jewelry"
              className="rounded-[20px] border-r-8 border-red-500 max-w-full w-[420px]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div className="flex justify-center md:justify-start">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/3-D-Necklace-Design.webp"
              alt="3D Necklace Design"
              className="rounded-[20px] border-r-8 border-red-500 max-w-full w-[420px]"
            />
          </div>

          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">3D Necklace Design</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 leading-relaxed">
              <li>
                We provide awesome 3D necklace layout offerings that permit you
                to visualize and create lovely necklaces. Whether you desire a
                3D gold necklace or a current 3D necklace model, our designers
                will craft the best piece.
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-2">3D Ring Design</h3>
            <ul className="list-disc list-inside text-sm text-gray-300 leading-relaxed">
              <li>
                Our team specializes in developing splendid 3D ring designs on
                line. From diamond ring 3D models to unique 3D flower jewelry,
                we make sure each layout is meticulously crafted to fulfill your
                expectancies.
              </li>
            </ul>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="https://webblazesofttech.com/wp-content/uploads/2024/09/3-D-Ring-Design.webp"
              alt="3D Ring Design"
              className="rounded-[20px] border-r-8 border-red-500 max-w-full w-[420px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_c;
