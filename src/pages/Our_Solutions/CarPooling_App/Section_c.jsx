import React from "react";
import { FaUsers, FaSearch, FaShieldAlt, FaTags, FaBuilding } from "react-icons/fa";

const features = [
  {
    title: "User-Friendly Interface",
    icon: <img src="/CarPool_1.png" alt="" />,
    iconBg: "bg-[#f65351]",
    borderColor: "border-b-[#f65351]",
    items: [
      "Our carpool apps function a user-pleasant interface, making it clean to discover and ebook carpool rides near you.",
      "The carpool travel experience is superior with capabilities like carpool rides near me and find a carpool on line alternatives.",
    ],
  },
  {
    title: "Advanced Search and Discovery",
    icon: <img src="/CarPool_2.png" alt="" />,
    iconBg: "bg-[#2da7ff]",
    borderColor: "border-b-[#2da7ff]",
    items: [
      "Easily find carpool rides the use of our superior search functions, which include carpool finder, carpool internet site, and carpool website online functionalities.",
      "Whether you need to vehicle pool to work or locate carpool services for trip sharing systems, our app has you included.",
    ],
  },
  {
    title: "Secure and Reliable",
    icon: <img src="/CarPool_3.png" alt="" />,
    iconBg: "bg-[#fffff]",
    borderColor: "border-b-[#ffe450]",
    items: [
      "Security is a pinnacle precedence in our carpool apps, with robust measures to make certain secure and reliable carpooling studies.",
      "Our carpool program includes features like carpool sign, carpool symptoms, and carpool tool to decorate protection.",
    ],
  },
  {
    title: "Cost-Effective Solutions",
    icon: <img src="/CarPool_4.png" alt="" />,
    items: [
      "Our carpool offerings are designed to be cost-effective, providing low cost carpool prices and cheap car pool offerings.",
      "Options like carpool coupon and automobile pool coupons offer additional savings for customers.",
    ],
  },
  {
    title: "Corporate and Community Carpooling",
    icon: <img src="/CarPool_5.png" alt="" />,
    items: [
      "Webblaze offers specialized answers for corporate carpooling, making it less difficult for agencies to enforce carpool packages.",
      "Community carpooling functions also are protected, fostering a sense of shared duty and community engagement.",
    ],
  },
];

const Section_c = () => {
  return (
    <section className="w-full bg-[#0d152e] py-20 px-4  bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover">
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-14">
          Features of Webblaze Car Pooling Apps
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 border-b-4 ${feature.borderColor} shadow-md w-full max-w-[340px] h-full`}
            >
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full ${feature.iconBg} mr-3`}>
                  {feature.icon}
                </div>
                <h3 className="text-md font-semibold text-gray-800 text-left">{feature.title}</h3>
              </div>
              <ul className="text-sm text-gray-700 text-left list-disc list-inside space-y-2">
                {feature.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section_c;
