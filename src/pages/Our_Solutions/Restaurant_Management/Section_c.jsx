import React from "react";

const cardData = [
  {
    icon: "https://img.icons8.com/emoji/96/delivery-truck.png",
    title: "Mobile App for Customers and Drivers",
    description:
      "Enhance convenience for clients and drivers with our custom cell apps. Customers can browse the menu, vicinity orders, track deliveries, and provide remarks, whilst drivers get hold of real-time order updates, optimized shipping routes, and in-app verbal exchange tools.",
    borderColor: "border-[#E03C31]",
  },
  {
    icon: "https://img.icons8.com/emoji/96/delivery-truck.png",
    title: "Comprehensive Restaurant Inventory Management",
    description:
      "Our inventory management device offers real-time tracking of inventory stages, reducing waste and optimizing orders. With functions consisting of a meals costing device and mobile-pleasant restaurant stock app, you could manipulate your materials successfully, minimize losses, and boost profitability.",
    borderColor: "border-[#297CFF]",
  },
  {
    icon: "https://img.icons8.com/emoji/96/delivery-truck.png",
    title: "Reservations and Table Management",
    description:
      "Efficient desk control is important for boosting the eating revel in. Our reservation device simplifies reserving approaches, reduces wait instances, and maximizes table turnover, ensuring a unbroken revel in for the duration of top hours.",
    borderColor: "border-[#FFEA00]",
  },
];

const Section_c = () => {
  return (
    <section className="bg-[#121726] py-16 px-4 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px]  mx-auto px-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl border-b-4 ${card.borderColor} p-8 shadow-md`}
          >
            <img src={card.icon} alt="" className="w-12 h-12 mb-4" />
            <h3 className="text-lg font-bold text-black mb-3">{card.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section_c;
