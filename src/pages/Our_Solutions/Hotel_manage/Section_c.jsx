import React, { useState } from 'react';

const Section_c = () => {
  const [selected, setSelected] = useState(0);

  const features = [
    {
      title: "Comprehensive Hotel Booking System",
      desc: "Our Hotel booking machine is a critical thing of our lodge management software. It allows for clean management of reservations, making sure that no booking is overlooked. The inn reservation software integrates with a couple of reserving channels, providing a unified view of all reservations.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Comprehensive-Hotel-Booking-System-1024x579.webp",
    },
    {
      title: "Optimize Your Revenue with Hotel Revenue Management Software",
      desc: "Webblaze’s inn sales control software enables you maximize profitability with the aid of analyzing marketplace facts and adjusting pricing techniques consequently. This device guarantees that you are usually offering competitive quotes, assisting to attract extra visitors even as optimizing sales.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Optimize-Your-Revenue-with-Hotel-Revenue-Management-Software.webp",
    },
    {
      title: "Enhance Guest Experience with Hotel CRM",
      desc: "Our hotel CRM software program is designed to decorate the guest experience with the aid of handling guest facts effectively. This consists of private options, previous stays, and unique requests. The first-class CRM software for hotels guarantees personalized provider, which can result in increased visitor satisfaction and loyalty.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Enhance-Guest-Experience-with-Hotel-CRM-1024x579.webp",
    },
    {
      title: "Efficient Front Desk Operations",
      desc: "The the front table is the coronary heart of any hotel, and our hotel the front desk software streamlines front desk operations. This software program consists of gear for take a look at-in and check-out, billing, and visitor service management, making sure a clean and efficient the front table experience.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Efficient-Front-Desk-Operations-1024x579.webp",
    },
    {
      title: "Advanced Hotel Maintenance Software",
      desc: "Proper protection is vital for any hotel. Our lodge renovation software lets in you to schedule and manage protection responsibilities correctly, making sure that your private home is continually in pinnacle situation. This not most effective complements guest pride however also prolongs the lifespan of your belongings.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Advanced-Hotel-Maintenance-Software-1024x579.webp",
    },
    {
      title: "Integration with Third-Party Services",
      desc: "Webblaze’s hotel management software seamlessly integrates with various 1/3-birthday celebration services together with on line travel organizations (OTAs) and international distribution systems (GDS). This guarantees that your resort is always seen to capability guests, maximizing your reserving opportunities.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Integration-with-Third-Party-Services-1024x579.webp",
    },
    {
      title: "Small Hotel Management Software",
      desc: "We apprehend the unique demanding situations confronted with the aid of small lodges. Our small motel management software program is designed to provide the identical degree of functionality as our solutions for large houses however in a greater inexpensive and scalable bundle. This consists of small hotel booking software and small resort reservation systems which might be clean to apply and enforce.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Small-Hotel-Management-Software-1024x579.webp",
    },
    {
      title: "Cloud-Based Solutions",
      desc: "Webblaze’s cloud-based totally inn management software program offers flexibility and accessibility. With our cloud-primarily based PMS structures, you may control your inn from anywhere, at any time. This guarantees that you are constantly in control, even while you are not on-site.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Cloud-Based-Solutions-1024x579.webp",
    },
    {
      title: "Customizable and Scalable",
      desc: "Our inn management software is pretty customizable and scalable. Whether you run a small bed and breakfast or a massive chain of motels, our software program may be tailored to satisfy your particular wishes. This consists of customization alternatives for boutique motel control software program and big-scale hotel belongings control software.",
      image: "https://webblazesofttech.com/wp-content/uploads/2024/10/Customizable-and-Scalable-1024x579.webp",
    },
  ];

  return (
    <div className="bg-[#181C2E] bg-[url('https://webblazesofttech.com/wp-content/uploads/2024/07/background-lines.webp')] bg-cover bg-center w-full px-4 py-12">
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Buttons */}
        <div className="w-full lg:w-1/2 space-y-4">
          {features.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelected(idx)}
              className={`cursor-pointer p-4 rounded-lg shadow-sm transition-all ${
                selected === idx
                  ? 'bg-red-100 text-red-600 font-semibold'
                  : 'bg-white hover:bg-gray-100'
              }`}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-[#ffff] rounded-lg text-black p-6 flex flex-col items-center space-y-4">
          <img
            src={features[selected].image}
            alt={features[selected].title}
            className="rounded-lg w-full max-w-md object-cover"
          />
          <div className="w-full">
            <h2 className="text-xl font-bold mb-2">{features[selected].title}</h2>
            <p className="text-sm mb-4 min-h-[120px]">{features[selected].desc}</p>
            <div className="">
              <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded shadow-md transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Section_c;
