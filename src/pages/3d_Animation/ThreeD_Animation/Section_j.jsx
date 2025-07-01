
import React from "react";
import { Banknote, Truck, Home, HeartPulse, Gamepad2 } from "lucide-react";

const industries = [
  {
    title: "Finance and Banking",
    description:
      "We increase DeFi smart contracts for lending, borrowing, staking, and additional. Our solutions make certain stable and green monetary transactions.",
    icon: <Banknote className="w-6 h-6" />,
    color: "bg-[#E3F2FF]",
    border: "border-b-4 border-blue-400",
  },
  {
    title: "Supply Chain Management",
    description:
      "Our smart contracts streamline supply chain operations, making sure transparency and overall performance. We increase answers for tracking items, handling stock, and greater.",
    icon: <Truck className="w-6 h-6" />,
    color: "bg-[#FFE4E4]",
    border: "border-b-4 border-blue-400",
  },
  {
    title: "Real Estate",
    description:
      "We create smart contracts for actual assets transactions, ensuring solid and obvious offers. Our answers consist of belongings control, leasing, and more.",
    icon: <Home className="w-6 h-6" />,
    color: "bg-[#FFFDDC]",
    border: "border-b-4 border-blue-400",
  },
  {
    title: "Healthcare",
    description:
      "Our smart contracts decorate healthcare operations, ensuring constant and green statistics control. We increase answers for affected man or woman statistics, billing, and greater.",
    icon: <HeartPulse className="w-6 h-6" />,
    color: "bg-[#FFE4E4]",
    border: "border-b-4 border-blue-400",
  },
  {
    title: "Gaming and Entertainment",
    description:
      "We expand NFT smart contracts for gaming and enjoyment, allowing stable and efficient digital asset manipulate. Our solutions encompass tokenizing virtual property, dealing with in-recreation currencies, and further.",
    icon: <Gamepad2 className="w-6 h-6" />,
    color: "bg-[#E3F2FF]",
    border: "border-b-4 border-blue-400",
  },
];

const Section_j = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-[1200px] mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D1128] mb-12">
          Industries We Serve
        </h2>
        <div className="grid gap-6 md:grid-cols-3 justify-center">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              className={`rounded-xl shadow-md p-6 text-left bg-white ${industry.border}`}
            >
              <div className={`flex items-center gap-2  mb-4 ${industry.color} p-3  rounded-md w-[80%]`}>
                {industry.icon}
                <span className="text-xl font-semibold">{industry.title}</span>
              </div>
              <p className="text-md text-gray-700">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section_j;
